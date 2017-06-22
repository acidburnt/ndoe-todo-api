const mongoose = require( 'mongoose' );

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost/TodoApp' );

const Todo = mongoose.model( 'Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
} );

const newTodo = new Todo( {
	text: 'Cook dinner'
} );

const nextTodo = new Todo( {
	text: 'Do dishes',
	completed: false,
	completedAt: 34
} );

// newTodo.save().then( doc => {
// 	console.log( 'Saved todo', doc );
// }, e => {
// 	console.log( e );
// } );
nextTodo.save().then( doc => {
	console.log( 'Saved todo', doc );
}, e => {
	console.log( e );
} );

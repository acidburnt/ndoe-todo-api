const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/TodoApp' );
mongoose.Promise = global.Promise;

const Todo = mongoose.model( 'Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
} );

const User = mongoose.model( 'User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
} );

const newTodo = new Todo( {
	text: 'Cook dinner'
} );

const newUser = new User( {
	email: 'locky700@gmail.com'
} );

// newTodo.save().then( doc => {
// 	console.log( 'Saved todo', doc );
// }, e => {
// 	console.log( e );
// } );
newUser.save().then( doc => {
	console.log( 'Saved: ', doc );
}, e => {
	console.log( e );
} );

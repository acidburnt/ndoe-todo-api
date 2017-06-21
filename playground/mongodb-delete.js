// const MongoClient = require( 'mongodb' ).MongoClient;
const { MongoClient, ObjectID } = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( err, db ) => {
	if ( err ) {
		return console.log( 'Unable to connect to MongoDD server' );
	};
	console.log( 'Connected to MongoDB server!' );
	// deleteMany
	// db.collection( 'Todos' )
	// 	.deleteMany( { text: 'Eat lunch' } )
	// 	.then( result => {
	// 		console.log( result );
	// 	} );
	// deleteOne
	// db.collection( 'Todos' )
	// 	.deleteOne( { text: 'Eat lunch' } )
	// 	.then( result => {
	// 		console.log( result.deletedCount );
	// 	} );
	// findOneAndDelete
	// db.collection( 'Todos' )
	// 	.findOneAndDelete( { completed: false } )
	// 	.then( result => {
	// 		console.log( result );
	// 	} );

	db.collection( 'Users' )
		.deleteMany( { name: 'Michal' } )
		.then( result => {
			console.log( result );
		} );
	db.collection( 'Users' )
		.findOneAndDelete( { _id: new ObjectID( '59499424e89e9634476df701' ) } )
		.then( result => {
			console.log( result );
		} );

	// db.close();
} );
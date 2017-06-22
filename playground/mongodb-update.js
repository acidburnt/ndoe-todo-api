// const MongoClient = require( 'mongodb' ).MongoClient;
const { MongoClient, ObjectID } = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( err, db ) => {
	if ( err ) {
		return console.log( 'Unable to connect to MongoDD server' );
	};
	console.log( 'Connected to MongoDB server!' );
	// db.collection( 'Todos' )
	// 	.findOneAndUpdate( { _id: new ObjectID( '594adecff20d5e423bc2b697' ) }, {
	// 		$set: { completed: true }
	// 	}, { returnOriginal: false } )
	// 	.then( result => {
	// 		console.log( result );
	// 	} );

	db.collection( 'Users' )
		.findOneAndUpdate( { _id: new ObjectID( '5949959be711c835a648cd73' ) }, {
			$set: { name: 'Michał' },
			$inc: { age: 1 }
		}, { returnOriginal: false } )
		.then( result => {
			console.log( result );
		} );
	// db.close();
} );

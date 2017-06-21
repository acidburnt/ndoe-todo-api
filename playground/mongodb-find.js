// const MongoClient = require( 'mongodb' ).MongoClient;
const { MongoClient, ObjectID } = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( err, db ) => {
	if ( err ) {
		return console.log( 'Unable to connect to MongoDD server' );
	};
	console.log( 'Connected to MongoDB server!' );

	// db.collection( 'Todos' )
	// 	.find( { _id: new ObjectID( '594848387f796e2710970fed' ) } )
	// 	.toArray().then( docs => {
	// 		console.log( 'Todos' );
	// 		console.log( JSON.stringify( docs, undefined, 2 ) );
	// 	}, err => {
	// 		console.log( 'Unable to fetch todos', err );
	// 	} );
	//
	// db.collection( 'Todos' )
	// 	.find()
	// 	.count()
	// 	.then( count => {
	// 		console.log( `Todos count: ${count}` );
	// 	}, err => {
	// 		console.log( err );
	// 	} );

	db.collection( 'Users' )
		.find( { name: 'Michal' } )
		.toArray()
		.then( docs => {
			console.log( 'Users with name Michal:' );
			console.log( JSON.stringify( docs, undefined, 2 ) );
		}, err => {
			console.log( err );
		} );

	// db.close();
} );

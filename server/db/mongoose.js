const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/TodoApp' );
mongoose.Promise = global.Promise;

module.exports = { mongoose };

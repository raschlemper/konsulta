'use strict';

var config = require('./environment');
var mongoose = config.mongoDB.mongoose;
var plugins = config.mongoDB.plugins;

var SystemSchema = new mongoose.Schema({
  	name: String,
  	description: String
});

/**
 * Virtuals
 */
 	

/**
 * Validations
 */


/**
 * Pre-save hook
 */


/**
 * Methods
 */

SystemSchema.methods = {};	
SystemSchema.plugin(plugins.deepPopulate);

module.exports = mongoose.model('System', SystemSchema);

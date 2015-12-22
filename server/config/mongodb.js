/**
 * MongoDB Configuration
 */

'use strict';

var mongoose = require('mongoose');
var config = require('./environment');

var plugins: {
	'deepPopulate' = require('mongoose-deep-populate');
}

var options: {
   	'db': { safe: true }
}

mongoose.connect(config.mongo.uri, options);

if(config.seedDB) { require(config.mock); }

module.exports = {
	'mongoose': mongoose,
	'plugins': plugins
}

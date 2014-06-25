'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Settings Schema
 */
var SettingsSchema = new Schema({
	// Settings model fields   
	// ...
});

mongoose.model('Settings', SettingsSchema);
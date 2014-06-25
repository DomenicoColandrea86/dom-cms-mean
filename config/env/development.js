'use strict';

module.exports = {
	db: 'mongodb://localhost/dom-cms-dev',
	app: {
		title: 'dom-cms - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '258597800997110',
		clientSecret: process.env.FACEBOOK_SECRET || '90db210c4bbef4ecc12e804f3216ea8a',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'heN725oc34HSC2WSy5zQWhGBU',
		clientSecret: process.env.TWITTER_SECRET || 'o3IDSwvBZFLGu6DEDeR9TVJeiiCj13Tgm23nNfdTanMKlJ0xI1',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};

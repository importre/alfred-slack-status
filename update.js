'use strict';
const alfy = require('alfy');
const got = require('got');
const Rx = require('rxjs/Rx');
const makeOutput = require('./utils').makeOutput;

const index = parseInt(alfy.input, 10);
const status = index < 0 ? alfy.config.get('custom') : makeOutput()[index];
const tokens = alfy.config.get('tokens') || {};
const sources = Object.keys(tokens).map(key => {
	const baseUrl = 'https://slack.com/api/users.profile.set';
	const options = {
		method: 'get',
		query: {
			/* eslint camelcase: ["error", {properties: "never"}] */
			token: tokens[key],
			profile: JSON.stringify({
				status_text: status.title,
				status_emoji: status.emoji
			})
		}
	};

	return Rx.Observable.fromPromise(got(baseUrl, options));
});

Rx.Observable.zip(sources).subscribe(
	res => {
		if (!res.ok) {
			console.log(res.error);
		}
	},
	err => {
		console.log(err.toString());
	}
);


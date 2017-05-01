'use strict';
const alfy = require('alfy');
const got = require('got');
const output = require('./data');

const baseUrl = 'https://slack.com/api/users.profile.set';
const index = parseInt(alfy.input, 10);
const status = index < 0 ? alfy.config.get('custom') : output[index];

const options = {
	method: 'get',
	query: {
		/* eslint camelcase: ["error", {properties: "never"}] */
		token: alfy.config.get('token'),
		profile: JSON.stringify({
			status_text: status.title,
			status_emoji: status.emoji
		})
	}
};

got(baseUrl, options).then(response => {
	const res = JSON.parse(response.body, null, 2);
	if (!res.ok) {
		console.log(res.error);
	}
});


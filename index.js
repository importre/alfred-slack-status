'use strict';
const alfy = require('alfy');
const makeOutput = require('./utils').makeOutput;

function showDefault() {
	const output = makeOutput();
	alfy.output(output);
}

const status = /\s*(\S+)\s+(.+)\s*/.exec(alfy.input.trim());

if (alfy.input && status) {
	const statuses = [{
		title: status[2],
		subtitle: status[1],
		emoji: status[1],
		arg: -1
	}];
	alfy.config.set('custom', statuses[0]);
	alfy.output(statuses);
} else {
	showDefault();
}


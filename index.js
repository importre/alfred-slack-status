'use strict';
const alfy = require('alfy');
const utils = require('./utils');

function showDefault() {
	const output = utils.makeOutput();
	alfy.output(output);
}

function showCustom(statuses) {
	alfy.config.set('custom', statuses[0]);
	alfy.output(statuses);
}

const input = (alfy.input || '').trim();
const status = /\s*(\S+)\s+(.+)\s*/.exec(input);

if (utils.isClear(input)) {
	showCustom([{
		title: utils.REMOVE_STATUS,
		subtitle: '',
		emoji: '',
		icon: {
			path: './icons/x.png'
		},
		arg: -1
	}]);
} else if (status) {
	showCustom([{
		title: status[2],
		subtitle: status[1],
		emoji: status[1],
		arg: -1
	}]);
} else {
	showDefault();
}


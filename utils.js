'use strict';

const REMOVE_STATUS = 'Remove status';

function makeOutput() {
	const statuses = require('./statuses.json');
	return statuses.map((status, index) => Object.assign(status, {
		arg: index
	}));
}

function isClear(input) {
	return /^clea[rn]$/.exec(input);
}

module.exports = {
	REMOVE_STATUS,
	makeOutput,
	isClear
};


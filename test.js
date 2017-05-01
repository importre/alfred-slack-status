import test from 'ava';

test('default', async t => {
	const result = require('./statuses.json');
	t.true(Array.isArray(result));
	t.true(result.length > 0);
});


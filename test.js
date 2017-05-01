import test from 'ava';
import alfyTest from 'alfy-test';
import output from './data';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy();

	t.deepEqual(result, output);
});


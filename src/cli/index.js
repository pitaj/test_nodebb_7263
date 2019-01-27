'use strict';

console.log('Got to `cli/index` module');

require.id = 123;

console.log('before', require.id);

require('../../require-main');

console.log('after', require.id);

require('./other');

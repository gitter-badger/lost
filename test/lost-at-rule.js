'use strict';

var check = require('./check');

describe('lost-at-rule', function() {
  it('foobar', function() {
    check(
      '@lost rounding 99.9;\n' +
      'a { lost-waffle: 2/5 3 0 flex; }',
      'a { flex: 0 0 auto; width: calc(99.9% * 2/5);' +
      ' height: calc(99.9% * 2/5); }\n' +
      'a:nth-child(1n) { margin-right: 0; margin-bottom: 0; margin-left: 0; }\n' +
      'a:last-child { margin-right: 0; margin-bottom: 0; }\n' +
      'a:nth-child(3n) { margin-right: 0; margin-left: auto; }\n' +
      'a:nth-last-child(-n + 3) { margin-bottom: 0; }'
    );
  });

  it('foobar', function() {
    check(
      '@lost rounding 99.99;',
      ''
    );
  });
});

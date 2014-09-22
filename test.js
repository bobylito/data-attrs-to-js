var test = require('prova');
var tojs = require('./');
var element = document.querySelector('#dataz');

test('a simple usage', function(t) {
  t.plan(1);

  t.deepEqual(tojs(element), {
    browser: 'ie6',
    user: {
      id: '9',
      name: 'John'
    },
    awesome: {
      'colors.red': '#ff0000'
    }
  });
});

test('a pattern usage', function(t) {
  t.plan(1);

  t.deepEqual(tojs(element, { pattern: /^user/ }), {
    user: {
      id: '9',
      name: 'John'
    }
  });
});

test('a separator usage', function(t) {
  t.plan(1);

  t.deepEqual(tojs(element, { separator: '.' }), {
    'user-name': 'John',
    'user-id': '9',
    browser: 'ie6',
    'awesome-colors': {
      red: '#ff0000'
    }
  });
});

# data-attrs-to-js [![Dependency Status](http://img.shields.io/david/ThankYouMotion/data-attrs-to-js.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/data-attrs-to-js) [![devDependency Status](http://img.shields.io/david/dev/ThankYouMotion/data-attrs-to-js.svg?style=flat-square)](https://david-dm.org/ThankYouMotion/data-attrs-to-js#info=devDependencies)

Parse your [data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) as JavaScript objects.

## Usage

```html
<div id="dataz"
  data-user-name="John"
  data-user-id="9"
  data-browser="ie6"
  data-awesome-colors.red="#ff0000">
</div>
```

```js
var tojs = require('data-attrs-to-js');
var elem = document.querySelector('dataz');

console.log(tojs(elem));

// {
//   browser: 'ie6',
//   user: {
//     id: '9',
//     name: 'John'
//   },
//   awesome: {
//     'colors.red': '#ff0000'
//   }
// }

console.log( 
  tojs(elem, {
    pattern: /^user/
  })
);

// {
//   user: {
//     id: '9',
//     name: 'John'
//   }
// }

console.log( 
  tojs(elem, {
    separator: '.'
  })
);

// {
//   'user-name': 'John',
//   'user-id': '9',
//   browser: 'ie6',
//   'awesome-colors': {
//     red: '#ff0000'
//   }
// }
```






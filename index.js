module.exports = function dataAttrsToJs(elem, opts) {
  var res = {};

  opts = opts || {};

  if (opts.separator === undefined) {
    opts.separator = '-';
  }

  Array.prototype.slice.call(elem.attributes)
    .filter(someAttributes(opts.pattern))
    .forEach(parseAttribute);

  function parseAttribute(attr) {
    var path = attr.name.slice(5).split(opts.separator);

    path.reduce(function(obj, part, idx, path) {
      // we do not mind the "data-" part
      if (part === 'data') {
        return obj;
      }

      // end of path, store value
      if (idx === path.length - 1) {
        obj[part] = attr.value;
      } else {
        // inside the path, create inside object
        obj[part] = obj[part] || {};
      }

      // return reference to current part
      return obj[part];
    }, res);
  }

  return res;
}

function someAttributes(pattern) {
  return function filterAttribute(attr) {
    var res;

    res = /^data\-/.test(attr.name);

    if (pattern === undefined) {
      return res
    }

    return res && pattern.test(attr.name.slice(5));
  }
}

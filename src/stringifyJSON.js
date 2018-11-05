// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function' || typeof obj === undefined) {
    return '';
  }
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var newObj = [];
    obj.map(function(currentValue) {
      newObj.push(stringifyJSON(currentValue)); 
    });
    return '[' + newObj.join(',') + ']';
  }
  if (!Array.isArray(obj)) {
    var newerObj = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        newerObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      } 
    }
    return '{' + newerObj + '}';
  }
};

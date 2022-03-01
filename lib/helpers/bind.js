'use strict';
// 导出bind函数
// bind返回一个新的函数，并且指定this为fn，参数为thisArg
module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

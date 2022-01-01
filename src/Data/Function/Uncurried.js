"use strict";

// module Data.Function.Uncurried

var mkFn = function (f) {
  return function () {
    return Array.prototype.slice.call(arguments)
      .reduce(function (ff, a) { return ff(a); }, f);
  };
};

var runFn = function (l, f) {
  return function (a) {
    return l <= 1 ? f(a) : runFn(l - 1, f.bind(null, a));
  };
};

exports.mkFn0 = function (fn) {
  return function () {
    return fn();
  };
};

exports.mkFn2 = mkFn;

exports.mkFn3 = mkFn;

exports.mkFn4 = mkFn;

exports.mkFn5 = mkFn;

exports.mkFn6 = mkFn;

exports.mkFn7 = mkFn;

exports.mkFn8 = mkFn;

exports.mkFn9 = mkFn;

exports.mkFn10 = mkFn;

exports.runFn0 = runFn.bind(null, 0);

exports.runFn2 = runFn.bind(null, 2);

exports.runFn3 = runFn.bind(null, 3);

exports.runFn4 = runFn.bind(null, 4);

exports.runFn5 = runFn.bind(null, 5);

exports.runFn6 = runFn.bind(null, 6);

exports.runFn7 = runFn.bind(null, 7);

exports.runFn8 = runFn.bind(null, 8);

exports.runFn9 = runFn.bind(null, 9);

exports.runFn10 = runFn.bind(null, 10);

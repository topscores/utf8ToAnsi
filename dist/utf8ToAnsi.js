'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertOneCharacter = exports.convertOneCharacter = function convertOneCharacter(c) {
  return c.charCodeAt(0) < 128 ? c // This is english alphabet
  : String.fromCharCode(c.charCodeAt(0) - 0x0e01 /* Utf8 ก */ + 161 /* Window-874 ก*/
  );
};

var utf8ToAnsi = exports.utf8ToAnsi = function utf8ToAnsi(s) {
  return s.split('').map(function (c) {
    return convertOneCharacter(c);
  }).reduce(function (converted, c) {
    return converted + c;
  });
};
'use strict';

var backBlock = function backBlock(res) {
  if (res) {
    var response = JSON.parse(res);
    return response.message;
  } else {
    return '';
  }
};

exports.default = backBlock;
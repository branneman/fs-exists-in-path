'use strict';

var path  = require('path');
var fs    = require('fs');
var async = require('async');

module.exports = function(file, callback) {

    var dirs = process.env.PATH.split(path.delimiter);

    var tasks = [];
    dirs.forEach(function(dir) {
        tasks.push(function(cb) {
            fs.exists(path.join(dir, file), function(exists) {
                cb(null, exists);
            });
        });
    });

    async.parallel(tasks, function(err, results) {
        callback(null, !!~results.indexOf(true));
    });
};

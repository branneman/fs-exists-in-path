'use strict';

var fs = require('fs'),
    Q  = require('q');

module.exports = function(file, finished) {

    var paths = process.env['PATH'].split(';');

    var promises = [];
    for (var i = 0; i < paths.length; i++) {
        var fn = function() {
            var deferred = Q.defer();
            fs.exists(paths[i] + '//' + file, function(exists) {
                deferred.resolve(exists);
            });
            return deferred.promise;
        };
        promises.push(fn());
    }

    Q.allSettled(promises).then(function(results) {
        finished(-1 !== results.map(function(v) {
            return v.value;
        }).indexOf(true));
    });
};
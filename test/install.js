
var hello = require('..');
var path = require('path');
var fs = require('fs');
var ajgenesis = require('ajgenesis');

exports['Install module'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir(__dirname);
    
    hello.install(ajgenesis, function (err, data) {
        test.ok(!err);
        fs.existsSync('ajgenesis');
        fs.existsSync(path.join('ajgenesis', 'modules'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'hello'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'hello', 'readme.txt'));
        process.chdir(cwd);
        test.done();
    });
}

var path = require('path');

function install(ajgenesis, cb) {
    ajgenesis.fs.createDirectory('ajgenesis');
    ajgenesis.fs.createDirectory(path.join('ajgenesis', 'modules'));
    ajgenesis.fs.createDirectory(path.join('ajgenesis', 'modules', 'hello'));
    ajgenesis.fs.copyDirectory(path.join(__dirname, 'module'), path.join('ajgenesis', 'modules', 'hello'), cb);
}

module.exports = {
    install: install
}
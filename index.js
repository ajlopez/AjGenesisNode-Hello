
var path = require('path');

function install(ajgenesis, cb) {
    ajgenesis.createDirectory('ajgenesis');
    ajgenesis.createDirectory(path.join('ajgenesis', 'modules'));
    ajgenesis.copyDirectory(path.join(__dirname, 'module'), path.join('ajgenesis', 'modules', 'hello'));
    cb(null, null);
}

module.exports = {
    install: install
}
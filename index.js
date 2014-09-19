
var path = require('path');

function install(ajgenesis, cb) {
    ajgenesis.createDirectory('ajgenesis');
    ajgenesis.createDirectory(path.join('ajgenesis', 'modules'));
    ajgenesis.createDirectory(path.join('ajgenesis', 'modules', 'hello'));
    ajgenesis.copyDirectory(path.join(__dirname, 'module'), path.join('ajgenesis', 'modules', 'hello'), cb);
}

module.exports = {
    install: install
}
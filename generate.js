
var ajgenesis = require('ajgenesis'),
    fs = require('fs'),
    path = require('path');

module.exports = function (model, args) {
    var buildir = (args && args.length) ? args[0] : 'build';
    buildir = path.resolve(buildir);    
    ajgenesis.createDirectory(buildir);
    
    if (!model.name)
        model.name = 'world';
    
    var javatemplatename = path.join(__dirname__, 'templates', 'java.tpl');
    var javatargetename = path.join(buildir, 'Hello.java');
    
    var cstemplatename = path.join(__dirname__, 'templates', 'cs.tpl');
    var cstargetename = path.join(buildir, 'Hello.cs');
    
    var vbtemplatename = path.join(__dirname__, 'templates', 'vb.tpl');
    var vbtargetename = path.join(buildir, 'Hello.vb');
    
    var jstemplatename = path.join(__dirname__, 'templates', 'js.tpl');
    var jstargetename = path.join(buildir, 'hello.js');
    
    ajgenesis.fileTransform(javatemplate, javatargetname, model);
    ajgenesis.fileTransform(cstemplate, cstargetname, model);
    ajgenesis.fileTransform(vbtemplate, vbtargetname, model);
    ajgenesis.fileTransform(jstemplate, jstargetname, model);
}
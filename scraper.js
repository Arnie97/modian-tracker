'use strict';

var fs = require('fs'),
    page = require('webpage').create();

page.settings.loadImages = false;
page.onConsoleMessage = function(msg) {
    console.log(msg);
    fs.write('moerail.txt', msg + '\n', 'a');
};

page.open('frame.html', function(status) {
    if (status !== 'success') {
        console.error(status);
        phantom.exit();
    }
});

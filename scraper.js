'use strict';

var page = require('webpage').create();

page.settings.loadImages = false;
page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open('frame.html', function(status) {
    if (status !== 'success') {
        console.error(status);
        phantom.exit();
    }
});

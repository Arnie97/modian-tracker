'use strict';

var page = require('webpage').create(),
    url = 'https://zhongchou.modian.com/item/8738.html';

page.settings.loadImages = false;
page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open(url, function(status) {
    if (status === 'success') {
        page.evaluate(function() {
            var lst = $('li.data>h2>span');
            console.log(lst[0].textContent + ' ' + lst[1].textContent);
        });
        phantom.exit(0);
    } else {
      phantom.exit(1);
    }
});

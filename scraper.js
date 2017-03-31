'use strict';

var page = require('webpage').create(),
    previous = '',
    url = 'https://zhongchou.modian.com/item/8738.html';

page.settings.loadImages = false;
page.onConsoleMessage = function(msg) {
    switch (msg[0]) {
    case '#':
        if (previous !== msg) {
            previous = msg;
            console.log(msg + new Date().toLocaleString());
        }
        break;
    case '/':
        break;
    default:
        console.log(msg);
    }
};

function refresh() {
    page.open(url, function(status) {
        if (status === 'success') {
            page.evaluate(function() {
                window.setTimeout(function() {
                    var lst = $('li.data>h2>span');
                    console.log('# ' + lst[0].textContent + ' ' + lst[1].textContent + ' ');
                }, 5000);
            });
        } else {
            console.log(status);
        }
    });
}

window.setInterval(refresh, 300000);

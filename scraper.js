'use strict';

var page = require('webpage').create(),
    previous = '',
    url = 'https://zhongchou.modian.com/item/8738.html';

page.settings.loadImages = false;
page.onConsoleMessage = function(msg) {
    switch (msg[0]) {
    case '\t':
        if (previous !== msg) {
            previous = msg;
            console.log(getTimeString() + msg);
        }
        break;
    case '/':
        break;
    default:
        console.log(msg);
    }
};

function getTimeString() {
    var date = new Date();
    date.setTime(Date.now() + 8 * 3600 * 1000);
    var str = date.toISOString().substr(0, 19).replace('T', ' ');
    return str;
}

function refresh() {
    page.open(url, function(status) {
        if (status === 'success') {
            page.evaluate(function() {
                window.setTimeout(function() {
                    var lst = $('li.data>h2>span'),
                        sum = lst[0].textContent.replace(',', ''),
                        count = lst[1].textContent;
                    console.log('\t' + sum + '\t' + count);
                }, 5000);
            });
        } else {
            console.log(status);
        }
    });
}

refresh();
window.setInterval(refresh, 300000);

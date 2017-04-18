'use strict';

var url = 'https://zhongchou.modian.com/realtime/get_simple_product',
    history = '',
    ids = 8738,
    interval = 450000;

function getTimeString() {
    var date = new Date();
    date.setTime(Date.now() + 8 * 3600 * 1000);
    var str = date.toISOString().substr(0, 19).replace('T', ' ');
    return str;
}

function diff(item) {
    if (history !== item.backer_money) {
        history  =  item.backer_money;
        console.log([
            getTimeString(),
            item.backer_money.replace(',', ''),
            item.backer_count
        ].join('\t'));
    }
}

function refresh() {
    $.ajax({
        url: url,
        type: 'GET',
        data: {'ids': ids},
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        success: function(data) {
            diff(data[0]);
        }
    });
}

refresh();
window.setInterval(refresh, interval);

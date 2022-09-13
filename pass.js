// ==UserScript==
// @name         +5s
// @version      v1.0
// @author       A1in
// @namespace    https://github.com/A1in-SY
// @description  偷走华南师范大学教务系统5秒时间
// @match        https://jwxt.scnu.edu.cn/xtgl/index_initMenu.html*
// @run-at       document-end
// ==/UserScript==

(async function () {
    'use strict';
    var exits = false;
    var login = Date.now();
    var url = window.location.href;
    if (url.includes('t=')) {
        login = url.split('t=')[1];
    }
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.indexOf('t_+5s') == 0) {
            exits = true;
            if (c.split('=')[1] != login) {
                document.cookie = 't_+5s=' + login;
                window.location.reload();
            }
        }
    }
    if (!exits) {
        document.cookie = 't_+5s=' + login;
        window.location.reload();
    }
})();
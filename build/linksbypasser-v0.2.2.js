// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.2.2
// @description  Decrease your wasting time on short links
// @author       Putu Ardi Dharmayasa
// @downloadURL  https://yasawibu.github.io/linksbypasser/release/linksbypasser.user.js
// @grant        none
// @run-at       document-start
// @include      http://*
// @include      https://*
// ==/UserScript==

(function() {
    'use strict';

    /* * * * * * * * *
     * Main Program *
     * * * * * * * */

    // list of supported links.
    let linkMatch = [
        /ani-share\.com/,
        /coeg.in/,
        /kurosafe\.club/,
        /kurosafe\.web\.id/,
        /lifesurance\.info/,
        /lindung\.in/,
        /linkshrink\.net/,
        /siherp\.com/,
        /siotong\.com/,
        /telondasmu\.com/,
        /tojros\.tk/,
        /linkpoi.in/,
        /safelinkview\.com/,
        /safelinkreviewz\.com/,
        /getinfos\.net/,
        /shtme\.co\/(?!get)/,
        /intercelestial\.com/,
        /spacetica\.com/,
        /malaysurance\.com/,
        /94lauin\.com/,
        /dl-protect1\.com/,
        /sflink\.cc/,
        /kuhaku\.cf/,
        /fmlawkers\.club/,
        /businessforyouand\.me/,
        /bagilagi\.com/,
        /skinnycat\.net/,
        /bkshort\.info/,
        /yametesenpai\.xyz/,
        /wptech\.ga/,
        /short\.anidesu\.net/,
        /indexmovie\.biz\/(?!get)/,
        /ytfire\.host/,
        /delekke\.com/,
        /filmku21\.website\/(?=links)/,
        /plantaheim\.web\.id/,
        /short\.awsubs\.co/,
        /xydeyou\.com/,
        /landscapenature\.pw/,
        /dl\.animeindoku\.net/,
        /inlink\.co/,
        /menujulink\.online/,
        /t4ank\.top/,
        /healthtod\.com/,
        /gomentod\.com/,
        /hunstulovers\.net/,
        /safelinku\.net/,
        /newterusin\.ga/,
        /zonawibu\.bid/,
        /link\.shirogaze\.tk/
    ];

    // check the link.
    // is it supported or not.
    let link = window.document.location.hostname + window.document.location.pathname;
    let linkCheck = false;
    for (let i = 0; i != linkMatch.length; ++i) {
        linkCheck = linkMatch[i].test(link);
        if (linkCheck == true) {
            let host = window.document.location.hostname;
            let trimHost = host.match(/^(www\.|\w+\.u\.)?([^]+)/);
            host = trimHost[2];
            bypassLink(host);
            return;
        }
    }
    return;

    /* * * * * * * * * *
     * Bypass Methods *
     * * * * * * * * */

    // serialize-0.2.min.js
    // author: Dimitar Ivanov
    // page  : https://code.google.com/archive/p/form-serialize/
    // source: https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/form-serialize/serialize-0.2.min.js
    function serialize(form){
        if(!form||form.nodeName!=="FORM"){ return; }
        var i,j,q=[];
        for(i=form.elements.length-1;i>=0;i=i-1){
            if(form.elements[i].name===""){ continue; }
            switch(form.elements[i].nodeName){
                case"INPUT":
                    switch(form.elements[i].type){
                        case"text":
                        case"hidden":
                        case"password":
                        case"button":
                        case"reset":
                        case"submit":
                            q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));
                            break;
                        case"checkbox":
                        case"radio":
                            if(form.elements[i].checked){ q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value)); }
                            break;
                        case"file":
                            break;
                    }
                    break;
                case"TEXTAREA":
                    q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));
                    break;
                case"SELECT":
                    switch(form.elements[i].type){
                        case"select-one":
                            q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));
                            break;
                        case"select-multiple":
                            for(j=form.elements[i].options.length-1;j>=0;j=j-1){
                                if(form.elements[i].options[j].selected){ q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value)); }
                            }
                            break;
                    }
                    break;
                case"BUTTON":
                    switch(form.elements[i].type){
                        case"reset":
                        case"submit":
                        case"button":
                            q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));
                            break;
                    }
                    break;
            }
        }
        return q.join("&");
    }

    // not yet implement error handling
    function POST(url, data, contentType, withXHR) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', contentType);
            if (arguments.length === 4 && withXHR === true)
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onload = function () {
                resolve(this.responseText);
            };
            xhr.send(data);
        });
    }

    function openLink(url) {
        window.location.href = url;
    }

    function selectElement(selector) {
        return window.document.querySelector(selector);
    }

    function getScriptValue(pattern) {
        let el = window.document.getElementsByTagName('script');
        if (el.length > 0) {
            for (let i = 0; i !== el.length; ++i) {
                const u = el[i].textContent.match(pattern);
                if (u) {
                    return u[1];
                }
            }
        }
    }

    function getUrl(location, pattern) {
        if (arguments.length === 1) {
            if (typeof location === 'string') {
                location = selectElement(location);
                return location.href;
            } else {
                pattern = location;
                const a = window.location.href;
                const u = a.match(pattern);
                if (u)
                    return u[1];
            }
        } else if (arguments.length === 2) {
            location = selectElement(location);
            const a = location.href;
            const u = a.match(pattern);
            if (u)
                return u[1];
        } else {
            return;
        }
    }

    function b64(url, string) {
        string = string || 0;

        url = atob(url);
        if (string === 0)
            return url;
        else
            return (string + url);
    }

    function bypassLink(host) {
        window.document.title = 'LinksBypasser - Wait a moment...';
        switch (host) {
            case 'zonawibu.bid':
                {
                    let url = getUrl(/go=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'hunstulovers.net':
                {
                    let url = getUrl(/go\/([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'healthtod.com':
                {
                    // case 1
                    let url = getUrl(/d=([^#]+)/);
                    if (url) {
                        url = b64(url);
                        openLink(url);
                    }

                    // case 2
                    window.document.addEventListener('DOMContentLoaded', function() {
                        url = getScriptValue(/var a='([^']+)'/);
                        if (url) {
                            window.stop();
                            openLink(url);
                        }
                    });
                    return;
                }

            case 'inlink.co':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let form = selectElement('#go-link');
                    if (form) {
                        const url = form.action;
                        const data = serialize(form);
                        const content = 'application/x-www-form-urlencoded';
                        POST(url, data, content, true).then((respone) => {
                            respone = JSON.parse(respone);
                            let url = respone.url;
                            openLink(url);
                        });
                    }
                });
                return;

            case 'dl.animeindoku.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a#download');
                    openLink(url);
                });
                return;

            case 'safelinkreviewz.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/var d_link = '([^]+)'/);
                    url = decodeURIComponent(url);
                    openLink(url);
                });
                return;

            case 'short.awsubs.co':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('div.kiri center a');
                    openLink(url);
                });
                return;

            case 'filmku21.website':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/window\.location\.href='([^']+)'/);
                    openLink(url);
                });
                return;

            case 'ytfire.host':
                {
                    let url = getUrl(/\?get=([^]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }


            case 'indexmovie.biz':
                {
                    let url = '/get' + window.location.pathname;
                    openLink(url);
                    return;
                }

            case 'safelinku.net':
            case 'sflink.cc':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    // first step
                    let form = selectElement('#link-view');
                    if (form) {
                        form.submit();
                    }

                    // second step
                    form = selectElement('#go-link');
                    if (form) {
                        const url = form.action;
                        const data = serialize(form);
                        const content = 'application/x-www-form-urlencoded';
                        POST(url, data, content, true).then((respone) => {
                            respone = JSON.parse(respone);
                            let url = respone.url;
                            openLink(url);
                        });
                    }
                });
                return;

            case 'dl-protect1.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let form = selectElement('div.content form');
                    if (form) {
                        let url = form.action;
                        let data = '------WebKitFormBoundaryiyVq4neKSEfeozRf\r\nContent-Disposition: form-data; name=\"submit\"\r\n\r\nContinuer\r\n------WebKitFormBoundaryiyVq4neKSEfeozRf--\r\n';
                        let content = 'multipart/form-data; boundary=----WebKitFormBoundaryiyVq4neKSEfeozRf';
                        POST(url, data, content).then((respone) => {
                            let url = respone.match(/"lienet"><a href="([^"]+)"/);
                            openLink(url[1]);
                        });
                    }
                });
                return;

            case '94lauin.com':
            case 'skinnycat.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/;window\.location="([^"]+)"/);
                    openLink(url);
                });
                return;

            case 'delekke.com':
            case 'kuhaku.cf':
            case 'malaysurance.com':
            case 'wptech.ga':
                {
                    let url = getUrl(/\?([^]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'spacetica.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('div p b a');
                    openLink(url);
                });
                return;

            case 'shtme.co':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('div.content div a');
                    openLink(url);
                });
                return;

            case 'newterusin.ga':
            case 'safelinkview.com':
            case 'yametesenpai.xyz':
                {
                    let url = getUrl(/id=([^&]+)[^]/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'linkpoi.in':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a.btn');
                    openLink(url);
                });
                return;

            case 'ani-share.com':
            case 'bagilagi.com':
            case 'getinfos.net':
            case 'intercelestial.com':
            case 'landscapenature.pw':
            case 'lifesurance.info':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/var a='([^']+)'/);
                    openLink(url);
                });
                return;

            case 'bkshort.info':
            case 'fmlawkers.club':
            case 'kurosafe.club':
            case 'kurosafe.web.id':
            case 'xydeyou.com':
                {
                    let url = getUrl(/site=([^&]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'businessforyouand.me':
            case 'gomentod.com':
            case 'lindung.in':
            case 'plantaheim.web.id':
            case 't4ank.top':
                {
                    let url = getUrl(/d=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'linkshrink.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/revC\("([^"]+)"\)/);
                    url = b64(url, '/');
                    openLink(url);
                });
                return;

            case 'coeg.in':
            case 'siherp.com':
            case 'siotong.com':
            case 'telondasmu.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('.download-link a', /r=([^]+)/);
                    url = b64(url);
                    openLink(url);
                });
                return;

            case 'link.shirogaze.tk':
            case 'menujulink.online':
            case 'short.anidesu.net':
            case 'tojros.tk':
                {
                    let url = getUrl(/url=([^]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }
        }
    }
})();

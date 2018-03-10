// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.2.8
// @description  Decrease your wasting time on short links
// @author       Putu Ardi Dharmayasa
// @supportURL   https://github.com/yasawibu/linksbypasser/issues
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
        /^(?:\w+\.)?(ani-share\.com)/,
        /^(?:\w+\.)?(coeg\.in)/,
        /^(?:\w+\.)?(kurosafe\.club)/,
        /^(?:\w+\.)?(kurosafe\.web\.id)/,
        /^(?:\w+\.)?(lifesurance\.info)/,
        /^(?:\w+\.)?(lindung\.in)/,
        /^(?:\w+\.)?(linkshrink\.net)/,
        /^(?:\w+\.)?(siherp\.com)/,
        /^(?:\w+\.)?(siotong\.com)/,
        /^(?:\w+\.)?(telondasmu\.com)/,
        /^(?:\w+\.)?(tojros\.tk)/,
        /^(?:\w+\.)?(linkpoi.in)/,
        /^(?:\w+\.)?(u\.safelinkview\.com)/,
        /^(?:\w+\.)?(safelinkreviewz\.com)/,
        /^(?:\w+\.)?(getinfos\.net)/,
        /^(?:\w+\.)?(shtme\.co\/(?!get))/,
        /^(?:\w+\.)?(intercelestial\.com)/,
        /^(?:\w+\.)?(spacetica\.com)/,
        /^(?:\w+\.)?(malaysurance\.com)/,
        /^(?:\w+\.)?(v1\.94lauin\.com)/,
        /^(?:\w+\.)?(94lauin\.com)/,
        /^(?:\w+\.)?(dl-protect1\.com)/,
        /^(?:\w+\.)?(kuhaku\.cf)/,
        /^(?:\w+\.)?(fmlawkers\.club)/,
        /^(?:\w+\.)?(businessforyouand\.me)/,
        /^(?:\w+\.)?(bagilagi\.com)/,
        /^(?:\w+\.)?(skinnycat\.net)/,
        /^(?:\w+\.)?(bkshort\.info)/,
        /^(?:\w+\.)?(yametesenpai\.xyz)/,
        /^(?:\w+\.)?(wptech\.ga)/,
        /^(?:\w+\.)?(short\.anidesu\.net)/,
        /^(?:\w+\.)?(indexmovie\.biz\/(?!get))/,
        /^(?:\w+\.)?(ytfire\.host)/,
        /^(?:\w+\.)?(delekke\.com)/,
        /^(?:\w+\.)?(filmku21\.website\/(?=links))/,
        /^(?:\w+\.)?(plantaheim\.web\.id)/,
        /^(?:\w+\.)?(short\.awsubs\.co)/,
        /^(?:\w+\.)?(xydeyou\.com)/,
        /^(?:\w+\.)?(landscapenature\.pw)/,
        /^(?:\w+\.)?(dl\.animeindoku\.net)/,
        /^(?:\w+\.)?(inlink\.co)/,
        /^(?:\w+\.)?(menujulink\.online)/,
        /^(?:\w+\.)?(t4ank\.top)/,
        /^(?:\w+\.)?(healthtod\.com)/,
        /^(?:\w+\.)?(gomentod\.com)/,
        /^(?:\w+\.)?(hunstulovers\.net)/,
        /^(?:\w+\.)?(newterusin\.ga)/,
        /^(?:\w+\.)?(zonawibu\.bid)/,
        /^(?:\w+\.)?(link\.shirogaze\.tk)/,
        /^(?:\w+\.)?(st\.tontonanime\.win)/,
        /^(?:\w+\.)?(nasanimelink\.blogspot\.co\.id)/,
        /^(?:\w+\.)?(dilanjut\.in)/,
        /^(?:\w+\.)?(otololet\.com)/,
        /^(?:\w+\.)?(dcindo\.com)/,
        /^(?:\w+\.)?(verydelicius\.com)/,
        /^(?:\w+\.)?(lewatilink\.us)/,
        /^(?:\w+\.)?(apasih\.pw)/,
        /^(?:\w+\.)?(wibu-san\.com)/,
        /^(?:\w+\.)?(ani-short\.info)/,
        /^(?:\w+\.)?(bagisoft\.net)/,
        /^(?:\w+\.)?(sweetlantern\.com)/,
        /^(?:\w+\.)?(designmyhomee\.com)/,
        /^(?:\w+\.)?(awsubsco\.ga)/,
        /^(?:\w+\.)?(nimekaze\.me)/,
        /^(?:\w+\.)?(losstor\.com)/,
        /^(?:\w+\.)?(karung\.in)/,
        /^(?:\w+\.)?(anjay\.info)/,
        /^(?:\w+\.)?(safelinku\.net)/,
        /^(?:\w+\.)?(autolinkach\.com)/,
        /^(?:\w+\.)?(eigamou\.win)/,
        /^(?:\w+\.)?(linx\.cloud)/,
        /^(?:\w+\.)?(soralink\.sinetronku\.tv)/,
        /^(?:\w+\.)?(sehatlega\.com)/,
        /^(?:\w+\.)?(seputargratis\.com)/,
        /^(?:\w+\.)?(animeindo\.me)/
    ];

    // check the link.
    // is it supported or not.
    let link = window.location.hostname + window.location.pathname;
    let linkCheck = false;
    for (let i = 0; i != linkMatch.length; ++i) {
        linkCheck = link.match(linkMatch[i]);
        if (linkCheck) {
            let host = linkCheck[1];
            bypassLink(host);
            return;
        }
    }
    return;

    /* * * * * * * * * *
     * Bypass Methods *
     * * * * * * * * */

    // form-serialize
    // author: Dimitar Ivanov
    // source: https://code.google.com/archive/p/form-serialize/
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
            case 'sehatlega.com':
                {
                    let url = getUrl(/\lanjut=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'linx.cloud':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let btn = selectElement('button#wtd');
                    btn.click();
                });
                return;

            case 'safelinku.net':
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

            case 'karung.in':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a#makingdifferenttimer.btn');
                    openLink(url);
                });
                return;

            case 'skinnycat.net':
                let url = getUrl(/d=([^#]+)/);
                if (url) {
                    url = b64(url);
                    openLink(url);
                } else {
                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.stop();
                        let url = getScriptValue(/;window\.location="([^"]+)"/);
                        openLink(url);
                    });
                }
                return;

            case 'v1.94lauin.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/="([^"]+)",e=0/);
                    openLink(url);
                });
                return;

            case 'wibu-san.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let form = selectElement('.form-inline');
                    form.submit();
                });
                return;

            case 'verydelicius.com':
                {
                    let url = getUrl(/ref=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'st.tontonanime.win':
            case 'zonawibu.bid':
                {
                    let url = getUrl(/go=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'hunstulovers.net':
            case 'nimekaze.me':
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

            case 'awsubsco.ga':
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
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/;window\.location="([^"]+)"/);
                    openLink(url);
                });
                return;

            case 'delekke.com':
            case 'kuhaku.cf':
            case 'lewatilink.us':
            case 'malaysurance.com':
            case 'seputargratis.com':
            case 'wptech.ga':
                {
                    let url = getUrl(/\?([^#]+)/);
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

            case 'dcindo.com':
            case 'newterusin.ga':
            case 'u.safelinkview.com':
            case 'yametesenpai.xyz':
                {
                    let url = getUrl(/id=([^&]+)/);
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
            case 'apasih.pw':
            case 'autolinkach.com':
            case 'bagilagi.com':
            case 'dilanjut.in':
            case 'getinfos.net':
            case 'intercelestial.com':
            case 'landscapenature.pw':
            case 'lifesurance.info':
            case 'sweetlantern.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/var a='([^']+)'/);
                    openLink(url);
                });
                return;

            case 'ani-short.info':
            case 'animeindo.me':
            case 'bagisoft.net':
            case 'bkshort.info':
            case 'fmlawkers.club':
            case 'kurosafe.club':
            case 'kurosafe.web.id':
            case 'losstor.com':
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
            case 'otololet.com':
            case 'plantaheim.web.id':
            case 'soralink.sinetronku.tv':
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

            case 'anjay.info':
            case 'designmyhomee.com':
            case 'eigamou.win':
            case 'link.shirogaze.tk':
            case 'menujulink.online':
            case 'nasanimelink.blogspot.co.id':
            case 'short.anidesu.net':
            case 'tojros.tk':
                {
                    let url = getUrl(/url=([^&]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }
        }
    }
})();

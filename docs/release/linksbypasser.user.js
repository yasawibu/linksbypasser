// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.5.4
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
        /^(?:\w+\.)?(intercelestial\.com)/,
        /^(?:\w+\.)?(spacetica\.com)/,
        /^(?:\w+\.)?(malaysurance\.com)/,
        /^(?:\w+\.)?(kuhaku\.cf)/,
        /^(?:\w+\.)?(fmlawkers\.club)/,
        /^(?:\w+\.)?(businessforyouand\.me)/,
        /^(?:\w+\.)?(bagilagi\.com)/,
        /^(?:\w+\.)?(skinnycat\.net)/,
        /^(?:\w+\.)?(bkshort\.info)/,
        /^(?:\w+\.)?(yametesenpai\.xyz)/,
        /^(?:\w+\.)?(wptech\.ga)/,
        /^(?:\w+\.)?(short\.anidesu\.net)/,
        /^(?:\w+\.)?(indexmovie\.biz(?!\/get))/,
        /^(?:\w+\.)?(ytfire\.host)/,
        /^(?:\w+\.)?(delekke\.com)/,
        /^(?:\w+\.)?(filmku21\.website(?=\/links))/,
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
        /^(?:\w+\.)?(hunstulovers\.net(?=\/go\/.+))/,
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
        /^(?:\w+\.)?(animeindo\.me)/,
        /^(?:\w+\.)?(autokit\.co)/,
        /^(?:\w+\.)?(mylink\.zone)/,
        /^(?:\w+\.)?(gocoo\.co)/,
        /^(?:\w+\.)?(animeforce\.stream)/,
        /^(?:\w+\.)?(aw-games\.net)/,
        /^(?:\w+\.)?(links\.fiuxy\.bz)/,
        /^(?:\w+\.)?(iiv\.pl)/,
        /^(?:\w+\.)?(shortad\.cf)/,
        /^(?:\w+\.)?(goandroid\.cf)/,
        /^(?:\w+\.)?(gigapurbalinggaa\.ga)/,
        /^(?:\w+\.)?(jili\.in)/,
        /^(?:\w+\.)?(decrypt2\.safelinkconverter\.com)/,
        /^(?:\w+\.)?(sukamovie\.lompat\.in)/,
        /^(?:\w+\.)?(linkk\.bid)/,
        /^(?:\w+\.)?(ngelanjutkeun\.blogspot\.(?:com|co\.id))/,
        /^(?:\w+\.)?(telolet\.in)/,
        /^(?:\w+\.)?(ur\.ly)/,
        /^(?:\w+\.)?(sehatsegar\.net)/,
        /^(?:\w+\.)?(greget\.space)/,
        /^(?:\w+\.)?(davinsurance\.com)/,
        /^(?:\w+\.)?(mirrorace\.com(?=\/m\/(?!embed).+\/.+))/,
        /^(?:\w+\.)?(bluemediafiles\.com)/,
        /^(?:\w+\.)?(swzz\.xyz)/,
        /^(?:\w+\.)?(link4\.me)/,
        /^(?:\w+\.)?(urly\.mobi)/,
        /^(?:\w+\.)?(sukahayu\.xyz)/,
        /^(?:\w+\.)?(masmellow\.com)/,
        /^(?:\w+\.)?(6reeqaa\.ga)/,
        /^(?:\w+\.)?(gameinfo\.pw)/,
        /^(?:\w+\.)?(forexbrokers\.download)/,
        /^(?:\w+\.)?(kurosafe\.website)/,
        /^(?:\w+\.)?(1ink\.cc)/,
        /^(?:\w+\.)?(tetew\.info)/,
        /^(?:\w+\.)?(hexafile\.net)/,
        /^(?:\w+\.)?(binerfile\.info)/,
        /^(?:\w+\.)?(pafpaf\.info)/,
        /^(?:\w+\.)?(insurance-info\.us)/,
        /^(?:\w+\.)?(gosavelink\.com)/,
        /^(?:\w+\.)?(onepiece-ex\.com\.br(?=\/download\/.+))/,
        /^(?:\w+\.)?(hightech\.web\.id)/,
        /^(?:\w+\.)?(menantisenja\.com)/,
        /^(?:\w+\.)?(daunshorte\.teknologilink\.com)/,
        /^(?:\w+\.)?(teknosafe\.teknologilink\.com)/,
        /^(?:\w+\.)?(idsly\.bid)/,
        /^(?:\w+\.)?(dawnstation\.com)/,
        /^(?:\w+\.)?(autech\.xyz)/,
        /^(?:\w+\.)?(lanjutkeun\.blogspot\.(?:com|co\.id))/,
        /^(?:\w+\.)?(lanjutinaja\.net)/,
        /^(?:\w+\.)?(animanganews\.com)/,
        /^(?:\w+\.)?(urlku\.gq)/,
        /^(?:\w+\.)?(skips\.link)/,
        /^(?:\w+\.)?(clearload\.bid)/,
        /^(?:\w+\.)?(tr\.link)/,
        /^(?:\w+\.)?(linkach\.com)/,
        /^(?:\w+\.)?(1tiny\.net(?=\/[^\?].+))/,
        /^(?:\w+\.)?(j-safelink\.blogspot\.(?:com|co\.id))/,
        /^(?:\w+\.)?(giga74\.com)/,
        /^(?:\w+\.)?(awcar\.icu)/,
        /^(?:\w+\.)?(wikitrade\.me)/,
        /^(?:\w+\.)?(bolaoke\.club)/
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
    function serialize(form) {
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

    function makeVariableAccessible(variable) {
        let code = `Object.defineProperty(window, '`+ variable +`', {configurable: true,set: function(value) {Object.defineProperty(window, '`+ variable +`', {value: value});}});`;
        injectScript(code);
    }

    function injectScript(code) {
        let script = document.createElement('script');
        script.textContent = code;
        document.documentElement.appendChild(script);
    }

    // not yet implement error handling
    function POST(url, data, header) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(this.responseText);
            };
            xhr.open('POST', url, true);
            if (arguments.length === 3) {
                for (let i = 0; i !== header.length; ++i) {
                    xhr.setRequestHeader(header[i][0], header[i][1]);
                }
            }
            xhr.send(data);
        });
    }

    // not yet implement error handling
    function GET(url, header) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(this.responseText);
            };
            xhr.open('GET', url, true);
            if (arguments.length === 2) {
                for (let i = 0; i !== header.length; ++i) {
                    xhr.setRequestHeader(header[i][0], header[i][1]);
                }
            }
            xhr.send();
        });
    }

    function newDocument(content) {
        let doc = document.implementation.createHTMLDocument();
        doc.open();
        doc.write(content);
        doc.close();
        return doc;
    }

    function linkNotFound() {
        let message = 'LinksBypasser - Link not found!';
        window.document.title = message;
        alert(message);
    }

    function openLink(url) {
        if (url) {
            window.document.title = 'LinksBypasser - ' + url;
            window.location.href = url;
        } else {
            linkNotFound();
        }
    }

    function selectElement(document, selector) {
        if (arguments.length === 1 && typeof document === 'string') {
            selector = document;
            return window.document.querySelector(selector);
        } else if (arguments.length === 2) {
            return document.querySelector(selector);
        } else {
            return null;
        }
    }

    function getUrlFromScript(document, pattern) {
        let element = null;
        if (arguments.length === 1 && document instanceof RegExp) {
            pattern = document;
            element = window.document.getElementsByTagName('script');
        } else if (arguments.length === 2) {
            element = document.getElementsByTagName('script');
        } else {
            return null;
        }
        if (element.length > 0) {
            for (let i = 0; i !== element.length; ++i) {
                const url = element[i].textContent.match(pattern);
                if (url) {
                    return url[1];
                }
            }
        }
        return null;
    }

    function getUrl(location, property, pattern) {
        if (arguments.length === 1) {
            if (typeof location === 'string') {
                location = selectElement(location);
                if (location) {
                    const url = location.href;
                    return url;
                } else {
                    return null;
                }
            } else if (location instanceof RegExp) {
                pattern = location;
                const url = window.location.href.match(pattern);
                if (url) {
                    return url[1];
                } else {
                    return null;
                }
            }
        } else if (arguments.length === 2) {
            location = selectElement(location);
            if (location) {
                if (typeof property === 'string') {
                    let url = location[property];
                    return url;
                } else if (property instanceof RegExp) {
                    pattern = property;
                    const url = location.href.match(pattern);
                    if (url) {
                        return url[1];
                    } else {
                        return null;
                    }
                }
            } else {
                return null;
            }
        } else if (arguments.length === 3) {
            location = selectElement(location);
            if (location) {
                const url = location[property].match(pattern);
                if (url) {
                    return url[1];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    function getUrlFromDocument(document, location, property, pattern) {
        if (arguments.length === 2) {
            location = selectElement(document, location);
            if (location) {
                const url = location.href;
                return url;
            } else {
                return null;
            }
        } else if (arguments.length === 3) {
            location = selectElement(document, location);
            if (location) {
                if (typeof property === 'string') {
                    let url = location[property];
                    return url;
                } else if (property instanceof RegExp) {
                    pattern = property;
                    const url = location.href.match(pattern);
                    if (url) {
                        return url[1];
                    } else {
                        return null;
                    }
                }
            } else {
                return null;
            }
        } else if (arguments.length === 4) {
            location = selectElement(document, location);
            if (location) {
                const url = location[property].match(pattern);
                if (url) {
                    return url[1];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    function b64(url, string) {
        string = string || 0;

        if (url) {
            url = atob(url);
            if (string === 0) {
                return url;
            } else {
                return (string + url);
            }
        } else {
            return null;
        }
    }

    function bypassLink(host) {
        window.document.title = 'LinksBypasser - Wait a moment...';
        switch (host) {
            case '1tiny.net':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let password = selectElement(doc, '.error');
                        if (password) {
                            const url = window.location.href;
                            password = prompt("LinksBypasser - Please input a valid password:", "");
                            const data = 'pass=' + password;
                            const header = [
                                ['Content-Type', 'application/x-www-form-urlencoded']
                            ];
                            POST(url, data, header).then((respone) => {
                                let content = respone;
                                let doc = newDocument(content);
                                let password = selectElement(doc, '.error');
                                if (password) {
                                    alert('Linksbypasser - Wrong password!');
                                    window.location.reload();
                                } else {
                                    let url = getUrlFromScript(doc, /window.location='([^']+)'/);
                                    openLink(url);
                                }
                            });
                        } else {
                            let url = getUrlFromScript(doc, /window.location='([^']+)'/);
                            openLink(url);
                        }
                    });
                    return;
                }

            case 'autolinkach.com':
            case 'awcar.icu':
            case 'bagilagi.com':
            case 'gameinfo.pw':
            case 'getinfos.net':
            case 'intercelestial.com':
            case 'landscapenature.pw':
            case 'lifesurance.info':
            case 'linkach.com':
            case 'sweetlantern.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let form = selectElement(doc, '#srl.humancheck form');
                        if (form) {
                            const url = form.action;
                            const data = serialize(form);
                            const header = [
                                ['Content-Type', 'application/x-www-form-urlencoded']
                            ];
                            POST(url, data, header).then((respone) => {
                                let content = respone;
                                let doc = newDocument(content);
                                let url = getUrlFromScript(doc, /var a='([^']+)'/);
                                openLink(url);
                            });
                        } else {
                            linkNotFound();
                        }
                    });
                    return;
                }

            case 'animanganews.com':
            case 'j-safelink.blogspot.com':
            case 'j-safelink.blogspot.co.id':
            case 'urlku.gq':
                {
                    makeVariableAccessible('safelink');

                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.safelink.counter = 0;
                        window.safelink.click2xratio = 999999;

                        const checkUrl = setInterval(() => {
                            let url = document.querySelector('.result a').href;
                            if (url !== 'javascript:;') {
                                window.stop();
                                clearInterval(checkUrl);
                                openLink(url);
                            }
                        },100);
                    });
                    return;
                }

            case 'lanjutinaja.net':
                {
                    window.stop();
                    const data = getUrl(/wp_safelink_data=([^#]+)/);
                    const url = 'http://lanjutinaja.net/wp-admin/admin-ajax.php?action=wp_safelink&request=decrypt&data=' + data;
                    const header = [
                        ['X-Requested-With', 'XMLHttpRequest']
                    ];
                    GET(url, header).then((respone) => {
                        respone = JSON.parse(respone);
                        let url = respone.url;
                        openLink(url);
                    });
                    return;
                }

            case 'dawnstation.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '#tidakakanselamanya a');
                        openLink(url);
                    });
                    return;
                }

            case 'teknosafe.teknologilink.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '#templatemo_content div a');
                        openLink(url);
                    });
                    return;
                }

            case 'daunshorte.teknologilink.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '.article div center a');
                        openLink(url);
                    });
                    return;
                }

            case 'onepiece-ex.com.br':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'noscript', 'textContent');
                        openLink(url);
                    });
                    return;
                }

            case '1ink.cc':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '[name=keywords]', 'content');
                        if (url) {
                            const containHttp = url.includes('http');
                            if (!containHttp) {
                                url = '//' + url;
                            }
                            openLink(url);
                        } else {
                            linkNotFound();
                        }
                    });
                    return;
                }

            case 'businessforyouand.me':
            case 'davinsurance.com':
            case 'forexbrokers.download':
            case 'gomentod.com':
            case 'insurance-info.us':
            case 'lindung.in':
            case 'menantisenja.com':
            case 'otololet.com':
            case 'plantaheim.web.id':
            case 'skinnycat.net':
            case 'soralink.sinetronku.tv':
            case 't4ank.top':
                {
                    window.stop();
                    let url = getUrl(/(?:d|r)=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'autech.xyz':
            case 'designmyhomee.com':
            case 'eigamou.win':
            case 'lanjutkeun.blogspot.com':
            case 'lanjutkeun.blogspot.co.id':
            case 'link.shirogaze.tk':
            case 'masmellow.com':
            case 'menujulink.online':
            case 'nasanimelink.blogspot.co.id':
            case 'short.anidesu.net':
            case 'sukahayu.xyz':
            case 'tojros.tk':
            case 'wikitrade.me':
                {
                    window.stop();
                    let url = getUrl(/url=([^&]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'animeforce.stream':
                {
                    window.stop();
                    let url = getUrl(/l=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'swzz.xyz':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'a.link');
                        openLink(url);
                    });
                    return;
                }

            case 'bluemediafiles.com':
                {
                    window.stop();
                    let url = getUrl(/xurl=([^&]+)/);
                    url = 'http' + decodeURIComponent(url);
                    openLink(url);
                    return;
                }

            case 'indexmovie.biz':
                {
                    window.stop();
                    let url = '/get' + window.location.pathname;
                    openLink(url);
                    return;
                }

            case 'mirrorace.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'a.uk-button');
                        openLink(url);
                    });
                    return;
                }

            case 'clearload.bid':
                {
                    function decodeToken(token) {
                        let a = '';
                        let b = '';
                        for (let i = 0; i < token.length; ++i) {
                            if (i % 2 == 0) {
                                a += token.charAt(i);
                            } else {
                                b = token.charAt(i) + b;
                            }
                        }
                        token = a + b;
                        a = token.split('');
                        for (let i = 0; i < a.length; ++i) {
                            if (!isNaN(a[i])) {
                                for (let j = i + 1; j < a.length; ++j) {
                                    if (!isNaN(a[j])) {
                                        b = a[i] ^ a[j];
                                        if (b < 10) {
                                            a[i] = b;
                                        }
                                        i = j;
                                        j = a.length;
                                    }
                                }
                            }
                        }
                        token = a.join('');
                        token = b64(token);
                        token = token.substring(16);
                        token = token.substring(0, token.length - 16);
                        return token;
                    }

                    makeVariableAccessible('ysmm');

                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.stop();
                        let token = window.ysmm;
                        let url = decodeToken(token);
                        openLink(url);
                    });
                    return;
                }

            case 'ur.ly':
            case 'urly.mobi':
                {
                    window.stop();
                    let path = window.location.pathname;
                    path = path.substring(2);
                    let url = '/goii/' + path;
                    openLink(url);
                    return;
                }

            case 'ngelanjutkeun.blogspot.co.id':
            case 'ngelanjutkeun.blogspot.com':
                {
                    window.stop();
                    let url = getUrl(/url=([^&]+)/);
                    url = url.slice(0, -1);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'decrypt2.safelinkconverter.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '.redirect_url div', 'outerHTML', /window.open\('([^']+)/);
                        openLink(url);
                    });
                    return;
                }


            case 'u.safelinkview.com':
                {
                    window.stop();
                    let url = '//decrypt2.safelinkconverter.com/index.php?id=' + getUrl(/id=(.+)/);
                    openLink(url);
                    return;
                }

            case 'jili.in':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'a.btn-primary');
                        openLink(url);
                    });
                    return;
                }

            case 'iiv.pl':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        const salt = selectElement(doc, '#counting').getAttribute('data-salt');
                        const data = '&salt=' + salt + '&blocker=0';
                        const header = [
                            ['Content-Type', 'application/x-www-form-urlencoded'],
                            ['X-OCTOBER-REQUEST-HANDLER', 'onAfterShortcutView'],
                            ['X-OCTOBER-REQUEST-PARTIALS', 'shortcut/link_show'],
                            ['X-Requested-With', 'XMLHttpRequest']
                        ];
                        POST(url, data, header).then((respone) => {
                            let url = respone.replace(/\\/g, '');
                            url = url.match(/<a href="([^"]+)/);
                            openLink(url[1]);
                        });
                    });
                    return;
                }

            case 'gocoo.co':
                {
                    window.stop();
                    let cookie = decodeURIComponent(window.document.cookie);
                    let url = cookie.match(/"route":"([^"]+)/);
                    url = url[1].replace(/\\/g, '');
                    openLink(url);
                    return;
                }

            case 'mylink.zone':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromScript(doc, /txt = '<b><a href="([^"]+)/);
                        url = decodeURIComponent(url);
                        url = url.match(/url=([^&]+)/);
                        openLink(url[1]);
                    });
                    return;
                }

            case 'sehatlega.com':
                {
                    window.stop();
                    let url = getUrl(/(?:lanjut|r)=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'linx.cloud':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let btn = selectElement('button#wtd');
                    if (btn) {
                        btn.click();
                    }
                });
                return;

            case 'idsly.bid':
            case 'linkk.bid': // site can't be reached - last checked 14 july 2018
            case 'safelinku.net':
            case 'skips.link':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    // step 1
                    let form = selectElement('#link-view');
                    if (form) {
                        let captcha = selectElement('#captchaShortlink');
                        if (captcha) {
                            window.document.title = 'Please input the recaptcha';
                        } else {
                            form.submit();
                        }
                        return;
                    }

                    // step 2
                    form = selectElement('#go-link');
                    if (form) {
                        const url = form.action;
                        const data = serialize(form);
                        const header = [
                            ['Content-Type', 'application/x-www-form-urlencoded;'],
                            ['X-Requested-With', 'XMLHttpRequest']
                        ];
                        POST(url, data, header).then((respone) => {
                            respone = JSON.parse(respone);
                            let url = respone.url;
                            openLink(url);
                        });
                    }
                });
                return;

            case 'karung.in':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'a#makingdifferenttimer.btn');
                        url = url.match(/\?r=(.+)/);
                        url = b64(url[1]);
                        openLink(url);
                    });
                    return;
                }

            case 'verydelicius.com':
                {
                    window.stop();
                    let url = getUrl(/ref=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'ytfire.host': // don't have link for testing
                {
                    window.stop();
                    let url = getUrl(/\?get=([^]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'delekke.com':
            case 'goandroid.cf':
            case 'kuhaku.cf':
            case 'lewatilink.us':
            case 'links.fiuxy.bz':
            case 'malaysurance.com':
            case 'seputargratis.com':
            case 'wptech.ga':
                {
                    window.stop();
                    let url = getUrl(/\?([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'st.tontonanime.win': // don't have link for testing, homepage can't be reached - last checked 14 july 2018
            case 'sukamovie.lompat.in':
            case 'telolet.in':
            case 'zonawibu.bid': // don't have link for testing
                {
                    window.stop();
                    let url = getUrl(/go=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'dcindo.com':
            case 'newterusin.ga':
            case 'yametesenpai.xyz':
                {
                    window.stop();
                    let url = getUrl(/id=([^&]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'ani-short.info':
            case 'animeindo.me':
            case 'bagisoft.net':
            case 'binerfile.info':
            case 'bkshort.info':
            case 'fmlawkers.club':
            case 'gosavelink.com':
            case 'hightech.web.id':
            case 'kurosafe.club':
            case 'kurosafe.web.id':
            case 'kurosafe.website':
            case 'losstor.com':
            case 'pafpaf.info':
            case 'xydeyou.com':
                {
                    window.stop();
                    let url = getUrl(/site=([^&#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'inlink.co': // don't have link for testing, homepage can't be reached - last checked 14 july 2018
            case 'link4.me':
            case 'shortad.cf':
            case 'tr.link':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let form = selectElement(doc, '#go-link');
                        if (form) {
                            const url = form.action;
                            const data = serialize(form);
                            const header = [
                                ['Content-Type', 'application/x-www-form-urlencoded'],
                                ['X-Requested-With', 'XMLHttpRequest']
                            ];
                            POST(url, data, header).then((respone) => {
                                respone = JSON.parse(respone);
                                let url = respone.url;
                                if (host === 'tr.link') {
                                    url = url.match(/f\/(.+)/);
                                    if (url) {
                                        url = b64(url[1]);
                                    }
                                }
                                openLink(url);
                            });
                        } else {
                            linkNotFound();
                        }
                    });
                    return;
                }

            case 'short.awsubs.co':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'div.kiri center a');
                        openLink(url);
                    });
                    return;
                }

            case 'aw-games.net': // site can't be reached - last checked 14 july 2018
            case 'hexafile.net':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromScript(doc, /;window\.location="([^"]+)"/);
                        openLink(url);
                    });
                    return;
                }

            case 'spacetica.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, 'div p b a');
                        openLink(url);
                    });
                    return;
                }

            case 'anjay.info':
            case 'coeg.in':
            case 'greget.space':
            case 'siherp.com':
            case 'siotong.com':
            case 'telondasmu.com':
            case 'tetew.info':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromDocument(doc, '.download-link a', /r=([^]+)/);
                        url = b64(url);
                        openLink(url);
                    });
                    return;
                }

            case 'linkpoi.in':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a.btn');
                    openLink(url);
                });
                return;

            case 'ani-share.com': // don't have link for testing
            case 'apasih.pw': // don't have link for testing
            case 'bolaoke.club':
            case 'dilanjut.in': // don't have link for testing
            case 'sehatsegar.net':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromScript(doc, /var a='([^']+)'/);
                        openLink(url);
                    });
                    return;
                }

            case 'linkshrink.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrlFromScript(/revC\("([^"]+)"\)/);
                    url = b64(url, '/');
                    openLink(url);
                });
                return;

            case 'healthtod.com': // don't have link for testing
                {
                    // case 1
                    let url = getUrl(/d=([^#]+)/);
                    if (url) {
                        url = b64(url);
                        openLink(url);
                        return;
                    }

                    // case 2
                    window.document.addEventListener('DOMContentLoaded', function() {
                        url = getUrlFromScript(/var a='([^']+)'/);
                        if (url) {
                            window.stop();
                            openLink(url);
                        }
                    });
                    return;
                }

            case '6reeqaa.ga':
            case 'awsubsco.ga': // site can't be reached - last checked 14 july 2018
            case 'giga74.com':
            case 'gigapurbalinggaa.ga': // site can't be reached - last checked 14 july 2018
            case 'safelinkreviewz.com':
                {
                    window.stop();
                    const url = window.location.href;
                    GET(url).then((respone) => {
                        let content = respone;
                        let doc = newDocument(content);
                        let url = getUrlFromScript(doc, /var d_link = '([^]+)'/);
                        url = decodeURIComponent(url);
                        openLink(url);
                    });
                    return;
                }

            case 'hunstulovers.net':
            case 'nimekaze.me': // site can't be reached - last checked 14 july 2018
                {
                    window.stop();
                    let url = getUrl(/go\/([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'filmku21.website': // site can't be reached - last checked 14 july 2018
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrlFromScript(/window\.location\.href='([^']+)'/);
                    openLink(url);
                });
                return;

            case 'autokit.co': // site can't be reached - last checked 14 july 2018
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a#linko.golink');
                    openLink(url);
                });
                return;

            case 'dl.animeindoku.net': // don't have link for testing, homepage can't be reached - last checked 14 july 2018
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a#download');
                    openLink(url);
                });
                return;
        }
    }
})();

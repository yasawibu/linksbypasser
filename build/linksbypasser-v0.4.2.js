// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.4.2
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
        /^(?:\w+\.)?(animeindo\.me)/,
        /^(?:\w+\.)?(autokit\.co)/,
        /^(?:\w+\.)?(mylink\.zone)/,
        /^(?:\w+\.)?(catcut\.net)/,
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
        /^(?:\w+\.)?(ngelanjutkeun\.blogspot\.(com|co\.id))/,
        /^(?:\w+\.)?(telolet\.in)/,
        /^(?:\w+\.)?(ur\.ly)/,
        /^(?:\w+\.)?(sehatsegar\.net)/,
        /^(?:\w+\.)?(threadsphere\.bid)/,
        /^(?:\w+\.)?(greget\.space)/,
        /^(?:\w+\.)?(davinsurance\.com)/,
        /^(?:\w+\.)?(mirrorace\.com(?=\/m\/\w+\/\w+))/,
        /^(?:\w+\.)?(bluemediafiles\.com)/,
        /^(?:\w+\.)?(swzz\.xyz)/,
        /^(?:\w+\.)?(link4\.me)/,
        /^(?:\w+\.)?(urly\.mobi)/,
        /^(?:\w+\.)?(sukahayu\.xyz)/,
        /^(?:\w+\.)?(masmellow\.com)/,
        /^(?:\w+\.)?(6reeqaa\.ga)/,
        /^(?:\w+\.)?(gameinfo\.pw)/,
        /^(?:\w+\.)?(restorecosm\.bid)/,
        /^(?:\w+\.)?(forexbrokers\.download)/,
        /^(?:\w+\.)?(kurosafe\.website)/,
        /^(?:\w+\.)?(1ink\.cc)/,
        /^(?:\w+\.)?(tetew\.info)/,
        /^(?:\w+\.)?(hexafile\.net)/,
        /^(?:\w+\.)?(binerfile\.info)/,
        /^(?:\w+\.)?(pafpaf\.info)/,
        /^(?:\w+\.)?(insurance-info\.us)/,
        /^(?:\w+\.)?(gosavelink\.com)/,
        /^(?:\w+\.)?(onepiece-ex\.com\.br(?=\/download\/))/,
        /^(?:\w+\.)?(hightech\.web\.id)/,
        /^(?:\w+\.)?(menantisenja\.com)/,
        /^(?:\w+\.)?(daunshorte\.teknologilink\.com)/,
        /^(?:\w+\.)?(teknosafe\.teknologilink\.com)/
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
            if (arguments.length === 4 && withXHR === true) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
            xhr.onload = function () {
                resolve(this.responseText);
            };
            xhr.send(data);
        });
    }

    function openLink(url) {
        window.document.title = 'LinksBypasser - ' + url;
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
                if (u) {
                    return u[1];
                }
            }
        } else if (arguments.length === 2) {
            location = selectElement(location);
            const a = location.href;
            const u = a.match(pattern);
            if (u) {
                return u[1];
            }
        } else {
            return;
        }
    }

    function b64(url, string) {
        string = string || 0;

        url = atob(url);
        if (string === 0) {
            return url;
        } else {
            return (string + url);
        }
    }

    function bypassLink(host) {
        window.document.title = 'LinksBypasser - Wait a moment...';
        switch (host) {
            case 'teknosafe.teknologilink.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('#templatemo_content div a');
                    openLink(url);
                });
                return;

            case 'daunshorte.teknologilink.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('.article div center a');
                    openLink(url);
                });
                return;

            case 'onepiece-ex.com.br':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = selectElement('noscript').textContent;
                    openLink(url);
                });
                return;

            case '1ink.cc':
                {
                    let url = window.document.head.querySelector('[name=keywords]').content;
                    const urlCheck = url.includes('http');
                    if (urlCheck != true) {
                        url = 'http://' + url;
                    }
                    openLink(url);
                    return;
                }

            case 'businessforyouand.me':
            case 'davinsurance.com':
            case 'insurance-info.us':
            case 'menantisenja.com':
                {
                    let url = getUrl(/(?:d|r)=([^#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'bagilagi.com':
            case 'gameinfo.pw':
            case 'intercelestial.com':
            case 'lifesurance.info':
            case 'sweetlantern.com':
                {
                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.stop();
                        // First step
                        let humanCheck = selectElement('#srl.humancheck form');
                        if (humanCheck) {
                            humanCheck.submit();
                        }

                        // Second step
                        let url = getScriptValue(/var a='([^']+)'/);
                        if (url) {
                            openLink(url);
                        }
                    });
                    return;
                }

            case 'swzz.xyz':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a.link');
                    openLink(url);
                });
                return;

            case 'bluemediafiles.com':
                {
                    let url = getUrl(/xurl=([^&]+)/);
                    url = 'http' + decodeURIComponent(url);
                    openLink(url);
                    return;
                }

            case 'indexmovie.biz':
                {
                    let url = '/get' + window.location.pathname;
                    openLink(url);
                    return;
                }

            case 'mirrorace.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a.uk-button');
                    openLink(url);
                });
                return;

            case 'restorecosm.bid':
            case 'threadsphere.bid':
                {
                    // Make token accessible
                    var code = `Object.defineProperty(window, 'ysmm', {configurable: true,set: function(value) {Object.defineProperty(window, 'ysmm', {value: value});}});`;
                    var script = document.createElement('script');
                    script.textContent = code;
                    document.documentElement.appendChild(script);

                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.stop();
                        let token = window.ysmm;
                        let url = decodeToken(token);
                        openLink(url);

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
                    });
                    return;
                }

            case 'ur.ly':
            case 'urly.mobi':
                {
                    let path = window.location.pathname;
                    path = path.substring(2);
                    let url = '/goii/' + path;
                    openLink(url);
                    return;
                }

            case 'ngelanjutkeun.blogspot.co.id':
            case 'ngelanjutkeun.blogspot.com':
                {
                    let url = getUrl(/url=([^&]+)/);
                    url = url.slice(0, -1);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'decrypt2.safelinkconverter.com':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = selectElement('.redirect_url div').getAttribute('onclick').match(/window.open\('([^']+)/)[1];
                    openLink(url);
                });
                return;


            case 'u.safelinkview.com':
                {
                    let url = 'https://decrypt2.safelinkconverter.com/index.php?id=' + getUrl(/id=(.+)/);
                    openLink(url);
                    return;
                }

            case 'jili.in':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a.btn-primary');
                    openLink(url);
                });
                return;

            case 'iiv.pl':
                {
                    let customPOST = function(url, data) {
                        return new Promise((resolve, reject) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('POST', url, true);
                            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                            xhr.setRequestHeader('X-OCTOBER-REQUEST-HANDLER', 'onAfterShortcutView');
                            xhr.setRequestHeader('X-OCTOBER-REQUEST-PARTIALS', 'shortcut/link_show');
                            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                            xhr.onload = function () {
                                resolve(this.responseText);
                            };
                            xhr.send(data);
                        });
                    };

                    window.document.addEventListener('DOMContentLoaded', function() {
                        window.stop();
                        const url = window.location.pathname;
                        const salt = selectElement('#counting').getAttribute('data-salt');
                        const data = '&salt=' + salt + '&blocker=0';
                        customPOST(url, data).then((respone) => {
                            respone = JSON.stringify(respone);
                            let url = respone.replace(/\\/g, '');
                            url = url.match(/<a href="([^"]+)/);
                            openLink(url[1]);
                        });
                    });
                    return;
                }

            case 'links.fiuxy.bz':
                {
                    let url = getUrl(/\?([^#]+)/);
                    openLink(url);
                    return;
                }

            case 'animeforce.stream':
                {
                    let url = getUrl(/l=([^#]+)/);
                    if (url) {
                        url = b64(url);
                        openLink(url);
                    } else {
                        window.document.addEventListener('DOMContentLoaded', function() {
                            window.stop();
                            url = getScriptValue(/\("skip"\).innerHTML = '<a href="([^"]+)/);
                            openLink(url);
                        });
                    }
                    return;
                }


            case 'gocoo.co':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let cookie = decodeURIComponent(window.document.cookie);
                    let url = cookie.match(/"route":"([^"]+)/);
                    url = url[1].replace(/\\/g, '');
                    openLink(url);
                });
                return;

            case 'catcut.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/var go_url = decodeURIComponent\('([^']+)/);
                    url = decodeURIComponent(url);
                    url = url.match(/a=([^&]+)/);
                    url = b64(url[1]);
                    openLink(url);
                });
                return;

            case 'mylink.zone':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/txt = '<b><a href="([^"]+)/);
                    url = decodeURIComponent(url);
                    url = url.match(/url=([^&]+)/);
                    openLink(url[1]);
                });
                return;

            case 'autokit.co':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('a#linko.golink');
                    openLink(url);
                });
                return;

            case 'sehatlega.com':
                {
                    let url = getUrl(/(?:lanjut|r)=([^#]+)/);
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

            case 'linkk.bid':
            case 'safelinku.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    // first step
                    let form = selectElement('#link-view');
                    if (form) {
                        let captcha = selectElement('#captchaShortlink');
                        if (captcha) {
                            window.document.title = 'Please input the recaptcha';
                        } else {
                            form.submit();
                        }
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
                {
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
                }

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
            case 'sukamovie.lompat.in':
            case 'telolet.in':
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
            case 'link4.me':
            case 'shortad.cf':
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

            case '6reeqaa.ga':
            case 'awsubsco.ga':
            case 'gigapurbalinggaa.ga':
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
            case 'aw-games.net':
            case 'hexafile.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/;window\.location="([^"]+)"/);
                    openLink(url);
                });
                return;

            case 'delekke.com':
            case 'goandroid.cf':
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

            case 'dcindo.com':
            case 'newterusin.ga':
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
            case 'dilanjut.in':
            case 'getinfos.net':
            case 'landscapenature.pw':
            case 'sehatsegar.net':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getScriptValue(/var a='([^']+)'/);
                    openLink(url);
                });
                return;

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
                    let url = getUrl(/site=([^&#]+)/);
                    url = b64(url);
                    openLink(url);
                    return;
                }

            case 'forexbrokers.download':
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

            case 'anjay.info':
            case 'coeg.in':
            case 'greget.space':
            case 'siherp.com':
            case 'siotong.com':
            case 'telondasmu.com':
            case 'tetew.info':
                window.document.addEventListener('DOMContentLoaded', function() {
                    window.stop();
                    let url = getUrl('.download-link a', /r=([^]+)/);
                    url = b64(url);
                    openLink(url);
                });
                return;

            case 'designmyhomee.com':
            case 'eigamou.win':
            case 'link.shirogaze.tk':
            case 'masmellow.com':
            case 'menujulink.online':
            case 'nasanimelink.blogspot.co.id':
            case 'short.anidesu.net':
            case 'sukahayu.xyz':
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

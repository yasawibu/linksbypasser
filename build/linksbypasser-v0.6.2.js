// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.6.2
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

    const supportedLinks = [
        {
            host: /^(?:\w+\.)?(1ink\.cc)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(1tiny\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(6reeqaa\.ga)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(anjay\.info)$/,
            path: /^\/short\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(animanganews\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(apasih\.pw)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(autech\.xyz)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(autolinkach\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(awcar\.icu)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(bagilagi\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(blogjepang\.com)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(bolaoke\.club)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(businessforyouand\.me)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(coeg\.in)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(converthinks\.xyz)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(daunshorte\.teknologilink\.com)$/,
            path: /^\/linkshortelink\/safelink\.php\?.+/
        }, {
            host: /^(?:\w+\.)?(davinsurance\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(dawnstation\.com)$/,
            path: /^\/shortlink\/.+/
        }, {
            host: /^(?:\w+\.)?(decrypt2\.safelinkconverter\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(fmlawkers\.club)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(forexbrokers\.download)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(gameinfo\.pw)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(getinfos\.net)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(giga74\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(gocoo\.co)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(gosavelink\.com)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(greget\.space)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(hexafile\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(hunstulovers\.net)$/,
            path: /^\/go\/.+/
        }, {
            host: /^(?:\w+\.)?(idsly\.bid)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(indexmovie\.biz)$/,
            path: /^\/(?!get\/)/
        }, {
            host: /^(?:\w+\.)?(insurance-info\.us)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(insurance-waifu\.cf)$/,
            path: /^\/\?u=.+/
        }, {
            host: /^(?:\w+\.)?(intercelestial\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(jheberg\.net)$/,
            path: /^\/(?:captcha|redirect)\/.+/
        }, {
            host: /^(?:\w+\.)?(jili\.in)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(karung\.in)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(landscapenature\.pw)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(lanjutkeun\.blogspot\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(lifesurance\.info)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(lindung\.in)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(link4\.me)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(linkach\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(linkshrink\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(losstor\.com)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(masmellow\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(menantisenja\.com)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(mirrorace\.com)$/,
            path: /^\/m\/(?!embed).+\/.+/
        }, {
            host: /^(?:\w+\.)?(mirrored\.to)$/,
            path: /^\/(?:files|downlink)\/.+/
        }, {
            host: /^(?:\w+\.)?(mylink\.zone)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(onepiece-ex\.com\.br)$/,
            path: /^\/download\/.+/
        }, {
            host: /^(?:\w+\.)?(pengaman-link\.indonesia-komunitas\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(plantaheim\.web\.id)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(punchsubs\.net)$/,
            path: /^\/download-(?!vip).+/
        }, {
            host: /^(?:\w+\.)?(safelinkreviewx\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(safelinku\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(sehatlega\.com)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(sfl\.ink)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(short\.awsubs\.co)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(shortad\.cf)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(shtlink\.co)$/,
            path: /^\/short-url\/.+/
        }, {
            host: /^(?:\w+\.)?(shtme\.co)$/,
            path: /^\/short-url\/.+/
        }, {
            host: /^(?:\w+\.)?(siherp\.com)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(siotong\.com)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(skinnycat\.net)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(skips\.link)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(soralink\.sinetronku\.tv)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(spacetica\.com)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(sweetlantern\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(swzz\.xyz)$/,
            path: /^\/link\/.+/
        }, {
            host: /^(?:\w+\.)?(teknosafe\.teknologilink\.com)$/,
            path: /^\/linkteknolink\/safelinkscript\.php.+/
        }, {
            host: /^(?:\w+\.)?(telolet\.in)$/,
            path: /^\/.+go=.+/
        }, {
            host: /^(?:\w+\.)?(telondasmu\.com)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(tetew\.info)$/,
            path: /^\/njir\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(tr\.link)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(u\.safelinkview\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(urlku\.gq)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(verydelicius\.com)$/,
            path: /^\/.+ref=.+/
        }, {
            host: /^(?:\w+\.)?(wikitrade\.me)$/,
            path: /^\/.+url=.+/
        }
    ];

    const host = window.location.hostname;
    const path = window.location.pathname + window.location.search;
    for (let i = 0; i !== supportedLinks.length; ++i) {
        let checkedHost = matchStringPattern(host, supportedLinks[i].host);
        if (checkedHost) {
            let checkedPath = matchPathPattern(path, supportedLinks[i].path);
            if (checkedPath) {
                bypassLink(checkedHost);
            }
            break;
        }
    }

    /* * * * * * * * * * *
     * Others Functions *
     * * * * * * * * * */

    // serialize-0.2.js
    // author: Dimitar Ivanov
    // source: https://code.google.com/archive/p/form-serialize/
    function serialize(form) {
        if (!form || form.nodeName !== "FORM") {
            return;
        }
        var i, j, q = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "") {
                continue;
            }
            switch (form.elements[i].nodeName) {
                case 'INPUT':
                    switch (form.elements[i].type) {
                        case 'text':
                        case 'hidden':
                        case 'password':
                        case 'button':
                        case 'reset':
                        case 'submit':
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case 'checkbox':
                        case 'radio':
                            if (form.elements[i].checked) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            }
                            break;
                        case 'file':
                            break;
                    }
                    break;
                case 'TEXTAREA':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                case 'SELECT':
                    switch (form.elements[i].type) {
                        case 'select-one':
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case 'select-multiple':
                            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                if (form.elements[i].options[j].selected) {
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                                }
                            }
                            break;
                    }
                    break;
                case 'BUTTON':
                    switch (form.elements[i].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                    }
                    break;
            }
        }
        return q.join("&");
    }

    /* * * * * * * *
     * Functions *
     * * * * * */

    function domReady(callback) {
        if (typeof callback === 'function') {
            window.document.addEventListener('DOMContentLoaded', callback);
        }
    }

    function linkNotFound() {
        const message = 'LinksBypasser - Link not found!';
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

    function selectElement(selector) {
        return window.document.querySelector(selector);
    }

    function selectElementFromDocument(document, selector) {
        return document.querySelector(selector);
    }

    function getUrlFromElement(selector, attribute) {
        const element = selectElement(selector);
        if (element) {
            return element[attribute];
        } else {
            return null;
        }
    }

    function getUrlFromElementDocument(document, selector, attribute) {
        const element = selectElementFromDocument(document, selector);
        if (element) {
            return element[attribute];
        } else {
            return null;
        }
    }

    function matchPathPattern(path, pattern) {
        path = path.match(pattern);
        if (path) {
            return path[0];
        } else {
            return null;
        }
    }

    function matchStringPattern(string, pattern) {
        string = string.match(pattern);
        if (string) {
            return string[1];
        } else {
            return null;
        }
    }

    function getUrlFromScript(pattern) {
        const scripts = window.document.querySelectorAll('script');
        if (scripts.length > 0) {
            for (let i = 0; i !== scripts.length; ++i) {
                const url = scripts[i].textContent.match(pattern);
                if (url) {
                    return url[1];
                }
            }
        } else {
            return null;
        }
    }

    function getUrlFromScriptDocument(document, pattern) {
        const scripts = document.querySelectorAll('script');
        if (scripts.length > 0) {
            for (let i = 0; i !== scripts.length; ++i) {
                const url = scripts[i].textContent.match(pattern);
                if (url) {
                    return url[1];
                }
            }
        } else {
            return null;
        }
    }

    function getUrlFromAddressBar(pattern) {
        const url = window.location.href.match(pattern);
        if (url) {
            return url[1];
        } else {
            return null;
        }
    }

    function decodeBase64(string) {
        if (string) {
            return atob(string);
        } else {
            return null;
        }
    }

    function POST(url, data, headers) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
            xhr.open('POST', url, true);
            if (headers) {
                for (let i = 0; i !== headers.length; ++i) {
                    xhr.setRequestHeader(headers[i][0], headers[i][1]);
                }
            }
            xhr.send(data);
        });
    }

    function GET(url, headers) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            };
            xhr.open('GET', url, true);
            if (headers) {
                for (let i = 0; i !== headers.length; ++i) {
                    xhr.setRequestHeader(headers[i][0], headers[i][1]);
                }
            }
            xhr.send();
        });
    }

    function newDocument(content) {
        let document = window.document.implementation.createHTMLDocument();
        document.open();
        document.write(content);
        document.close();
        return document;
    }

    async function getDocument(url) {
        const content = await GET(url);
        const document = newDocument(content);
        return document;
    }


    /* * * * * * * * * *
     * Bypass Methods *
     * * * * * * * * */

    async function oneink() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '[name=keywords]', 'content');
        if (url && !url.includes('//')) {
            url = '//' + url;
        }
        openLink(url);
    }

    async function onetiny() {
        window.stop();
        const document = await getDocument(window.location.href);
        let password = selectElementFromDocument(document, '.error');
        if (password) {
            const url = window.location.href;
            password = prompt("LinksBypasser - Input a valid password:", "");
            const data = 'pass=' + password;
            const header = [
                ['Content-Type', 'application/x-www-form-urlencoded']
            ];
            POST(url, data, header).then((response) => {
                const content = response;
                const document = newDocument(content);
                let password = selectElementFromDocument(document, '.error');
                if (password) {
                    alert('Linksbypasser - Wrong password!');
                    window.location.reload();
                } else {
                    let url = getUrlFromScriptDocument(document, /window.location='([^']+)'/);
                    openLink(url);
                }
            });
        } else {
            let url = getUrlFromScriptDocument(document, /window.location='([^']+)'/);
            openLink(url);
        }
    }

    async function awsubs() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'div.kiri center a', 'href');
        openLink(url);
    }

    async function bagilagi() {
        window.stop();
        const document = await getDocument(window.location.href);
        const form = selectElementFromDocument(document, '#srl.humancheck form');
        if (form) {
            const url = form.action;
            const data = serialize(form);
            const headers = [
                ['Content-Type', 'application/x-www-form-urlencoded']
            ];
            POST(url, data, headers).then((response) => {
                const document = newDocument(response);
                let url = getUrlFromScriptDocument(document, /var a='([^']+)'/);
                openLink(url);
            });
        } else {
            linkNotFound();
        }
    }

    function converthinks() {
        window.stop();
        let url = getUrlFromAddressBar(/id=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    async function daunshorte() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '.article div center a', 'href');
        openLink(url);
    }

    async function dawnstation() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '#tidakakanselamanya a', 'href');
        openLink(url);
    }

    function gocoo() {
        window.stop();
        const cookie = decodeURIComponent(window.document.cookie);
        let url = matchStringPattern(cookie, /"route":"([^"]+)/);
        url = url.replace(/\\/g, '');
        openLink(url);
    }

    async function hexafile() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromScriptDocument(document, /;window\.location="([^"]+)"/);
        openLink(url);
    }

    function hunstulovers() {
        window.stop();
        let url = getUrlFromAddressBar(/\/go\/([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function indexmovie() {
        window.stop();
        const path = window.location.pathname;
        let url = '/get' + path;
        openLink(url);
    }

    function jheberg() {
        const path = window.location.pathname;

        // Step 1
        if (path.includes('/captcha/')) {
            domReady(() => {
                window.stop();
                const button = selectElement('a.dl-button');
                if (button) {
                    button.click();
                }
            });
        }

        // Step 2
        if (path.includes('/redirect/')) {
            window.stop();
            const slug = getUrlFromAddressBar(/\/redirect\/([^/]+)/);
            const hoster = getUrlFromAddressBar(/\/redirect\/[^/]+\/([^/]+)/);

            const url = '/get/link/';
            const data = 'slug=' + slug + '&hoster=' + hoster;
            const headers = [
                ['Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'],
                ['X-Requested-With', 'XMLHttpRequest']
            ];
            POST(url, data, headers).then((response) => {
                response = JSON.parse(response);
                let url = response.url;
                openLink(url);
            });
        }
    }

    async function jiliin() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'a.btn-primary', 'href');
        openLink(url);
    }

    async function karungin() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'a#makingdifferenttimer.btn', 'href');
        url = matchStringPattern(url, /\?r=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function kurosafe() {
        window.stop();
        let url = getUrlFromAddressBar(/site=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function lindungin() {
        window.stop();
        let url = getUrlFromAddressBar(/(?:r|d)=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    async function linkshrink() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromScriptDocument(document, /revC\("([^"]+)"\)/);
        url = '/' + decodeBase64(url);
        openLink(url);
    }

    async function mirrorace() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'a.uk-button', 'href');
        openLink(url);
    }

    function mirrored() {
        domReady(() => {
            window.stop();
            const path = window.location.pathname;

            // Step 1
            if (path.includes('/files/')) {
                const form = selectElement('form');
                if (form) {
                    form.submit();
                }
            }

            // Step 2
            if (path.includes('/downlink/')) {
                let url = getUrlFromElement('div.col-sm.centered.highlight a', 'href');
                openLink(url);
            }
        });
    }

    async function mylink() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromScriptDocument(document, /txt = '<b><a href="([^"]+)/);
        url = decodeURIComponent(url);
        url = matchStringPattern(url, /url=([^#&]+)/);
        openLink(url);
    }

    async function onepiece() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'noscript', 'textContent');
        openLink(url);
    }

    async function punchsubs() {
        window.stop();
        const path = window.location.pathname;
        if (path.includes('aniteca')) {
            const document = await getDocument(window.location.href);
            let url = getUrlFromScriptDocument(document, /var link = '([^']+)/);
            openLink(url);
        } else {
            const document = await getDocument(window.location.href);
            let url = getUrlFromScriptDocument(document, /\("#download-botao"\)\.attr\("href", "([^"]+)/);
            openLink(url);
        }
    }

    async function safelinkconverter() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '.redirect_url div', 'outerHTML');
        url = matchStringPattern(url, /window.open\('([^']+)/);
        openLink(url);
    }

    function safelinku() {
        domReady(() => {
            window.stop();

            // Step 1
            let form = selectElement('#link-view');
            if (form) {
                const captcha = selectElement('#captchaShortlink');
                if (captcha) {
                    window.document.title = 'LinksBypasser - Input the recaptcha!';
                } else {
                    form.submit();
                }
                return;
            }

            // Step 2
            form = selectElement('#go-link');
            if (form) {
                const url = form.action;
                const data = serialize(form);
                const headers = [
                    ['Content-Type', 'application/x-www-form-urlencoded;'],
                    ['X-Requested-With', 'XMLHttpRequest']
                ];
                POST(url, data, headers).then((response) => {
                    response = JSON.parse(response);
                    let url = response.url;
                    openLink(url);
                });
            }
        });
    }

    function safelinkview() {
        window.stop();
        const query = getUrlFromAddressBar(/id=(.+)/);
        let url = '//decrypt2.safelinkconverter.com/index.php?id=' + query;
        openLink(url);
    }

    async function shortad() {
        window.stop();
        const document = await getDocument(window.location);
        const form = selectElementFromDocument(document, '#go-link');
        if (form) {
            const url = form.action;
            const data = serialize(form);
            const header = [
                ['Content-Type', 'application/x-www-form-urlencoded'],
                ['X-Requested-With', 'XMLHttpRequest']
            ];
            POST(url, data, header).then((response) => {
                response = JSON.parse(response);
                let url = response.url;
                if (window.location.hostname === 'tr.link') {
                    url = matchStringPattern(url, /f\/([^#&]+)/);
                    url = decodeBase64(url);
                }
                openLink(url);
            });
        } else {
            linkNotFound();
        }
    }

    async function shtme() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'div.content div a', 'href');
        GET(url).then((response) => {
            url = matchStringPattern(response, /URL=([^"]+)/);
            openLink(url);
        });
    }

    async function siherp() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '.download-link a', 'href');
        url = matchStringPattern(url, /r=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    async function spacetica() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'div p b a', 'href');
        openLink(url);
    }

    async function swzz() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, 'a.link', 'href');
        openLink(url);
    }

    async function teknosafe() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromElementDocument(document, '#templatemo_content div a', 'href');
        openLink(url);
    }

    function telolet() {
        window.stop();
        let url = getUrlFromAddressBar(/go=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function urlku() {
        domReady(() => {
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
    }

    function verydelicius() {
        window.stop();
        let url = getUrlFromAddressBar(/ref=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function waifu() {
        window.stop();
        let url = getUrlFromAddressBar(/u=.{10}([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function wikitrade() {
        window.stop();
        let url = getUrlFromAddressBar(/url=([^#&]+)/);
        url = decodeBase64(url);
        openLink(url);
    }

    function bypassLink(host) {
        window.document.title = 'LinksBypasser - Wait a moment ...';
        switch (host) {
            case '1ink.cc': return oneink();
            case '1tiny.net': return onetiny();
            case '6reeqaa.ga': return safelinkview();
            case 'anjay.info': return siherp();
            case 'animanganews.com': return urlku();
            case 'apasih.pw': return bagilagi();
            case 'autech.xyz': return wikitrade();
            case 'autolinkach.com': return bagilagi();
            case 'awcar.icu': return bagilagi();
            case 'bagilagi.com': return bagilagi();
            case 'blogjepang.com': return lindungin();
            case 'bolaoke.club': return bagilagi();
            case 'businessforyouand.me': return lindungin();
            case 'coeg.in': return siherp();
            case 'converthinks.xyz': return converthinks();
            case 'daunshorte.teknologilink.com': return daunshorte();
            case 'davinsurance.com': return bagilagi();
            case 'dawnstation.com': return dawnstation();
            case 'decrypt2.safelinkconverter.com': return safelinkconverter();
            case 'fmlawkers.club': return kurosafe();
            case 'forexbrokers.download': return lindungin();
            case 'gameinfo.pw': return bagilagi();
            case 'getinfos.net': return bagilagi();
            case 'giga74.com': return safelinkview();
            case 'gocoo.co': return gocoo();
            case 'gosavelink.com': return kurosafe();
            case 'greget.space': return siherp();
            case 'hexafile.net': return hexafile();
            case 'hunstulovers.net': return hunstulovers();
            case 'idsly.bid': return safelinku();
            case 'indexmovie.biz': return indexmovie();
            case 'insurance-info.us': return lindungin();
            case 'insurance-waifu.cf': return waifu();
            case 'intercelestial.com': return bagilagi();
            case 'jheberg.net': return jheberg();
            case 'jili.in': return jiliin();
            case 'karung.in': return karungin();
            case 'landscapenature.pw': return bagilagi();
            case 'lanjutkeun.blogspot.com': return wikitrade();
            case 'lifesurance.info': return bagilagi();
            case 'lindung.in': return lindungin();
            case 'link4.me': return shortad();
            case 'linkach.com': return bagilagi();
            case 'linkshrink.net': return linkshrink();
            case 'losstor.com': return kurosafe();
            case 'masmellow.com': return wikitrade();
            case 'menantisenja.com': return lindungin();
            case 'mirrorace.com': return mirrorace();
            case 'mirrored.to': return mirrored();
            case 'mylink.zone': return mylink();
            case 'onepiece-ex.com.br': return onepiece();
            case 'pengaman-link.indonesia-komunitas.com': return wikitrade();
            case 'plantaheim.web.id': return lindungin();
            case 'punchsubs.net': return punchsubs();
            case 'safelinkreviewx.com': return safelinkview();
            case 'safelinku.net': return safelinku();
            case 'sehatlega.com': return lindungin();
            case 'sfl.ink': return safelinku();
            case 'short.awsubs.co': return awsubs();
            case 'shortad.cf': return shortad();
            case 'shtlink.co': return shtme();
            case 'shtme.co': return shtme();
            case 'siherp.com': return siherp();
            case 'siotong.com': return siherp();
            case 'skinnycat.net': return lindungin();
            case 'skips.link': return safelinku();
            case 'soralink.sinetronku.tv': return lindungin();
            case 'spacetica.com': return spacetica();
            case 'sweetlantern.com': return bagilagi();
            case 'swzz.xyz': return swzz();
            case 'teknosafe.teknologilink.com': return teknosafe();
            case 'telolet.in': return telolet();
            case 'telondasmu.com': return siherp();
            case 'tetew.info': return siherp();
            case 'tr.link': return shortad();
            case 'u.safelinkview.com': return safelinkview();
            case 'urlku.gq': return urlku();
            case 'verydelicius.com': return verydelicius();
            case 'wikitrade.me': return wikitrade();
        }
    }
})();

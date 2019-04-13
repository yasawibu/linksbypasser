// ==UserScript==
// @name         LinksBypasser
// @namespace    https://github.com/yasawibu/linksbypasser
// @version      0.7.2
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
            host: /^(?:\w+\.)?(adskipme\.com)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(arubedo\.blogspot\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(autolinkach\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(autoride\.pw)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(awcar\.icu)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(bagilagi\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(bagisoft\.net)$/,
            path: /^\/.+site=.+/
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
            host: /^(?:\w+\.)?(cashat\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(cll\.press)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(coeg\.in)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(converthinks\.xyz)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(cutsouf\.com)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(drive\.jepitkertas\.com)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(drivefiles\.bid)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(dwindly\.io)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(flylink\.io)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(healthtod\.com)$/,
            path: /^\/.+(?:r|d)=.+/
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
            host: /^(?:\w+\.)?(indexmovie\.club)$/,
            path: /^\/.+url=.+/
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
            host: /^(?:\w+\.)?(irisvera\.com)$/,
            path: /^\/.+(?:r|d)=.+/
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
            host: /^(?:\w+\.)?(kurosafety\.menantisenja\.com)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(landscapenature\.pw)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(lanjutkeun\.blogspot\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(licklink\.net)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(link4win\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(linkach\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(linkrex\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(linksad\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(linkshrink\.net)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(lonelymoon\.net)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(losstor\.com)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(lyon\.kim)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(naturalhealthy\.xyz)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(onepiece-ex\.com\.br)$/,
            path: /^\/download\/.+/
        }, {
            host: /^(?:\w+\.)?(onlinefreecourse\.net)$/,
            path: /^\/download\/\?file=.+/
        }, {
            host: /^(?:\w+\.)?(pafpaf\.info)$/,
            path: /^\/.+site=.+/
        }, {
            host: /^(?:\w+\.)?(pengaman-link\.indonesia-komunitas\.com)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(plantaheim\.com)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(plantaheim\.web\.id)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(psl\.pw)$/,
            path: /^\/[^-/]+$/
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
            host: /^(?:\w+\.)?(sehatsegar\.net)$/,
            path: /^\/.+id=.+/
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
            host: /^(?:\w+\.)?(shrtfly\.net)$/,
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
            host: /^(?:\w+\.)?(skyinsurance\.ml)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(soralink\.sinetronku\.tv)$/,
            path: /^\/.+(?:r|d)=.+/
        }, {
            host: /^(?:\w+\.)?(spacetica\.com)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(speedcar\.club)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(suarankri\.me)$/,
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
            host: /^(?:\w+\.)?(tetewlink\.me)$/,
            path: /./
        }, {
            host: /^(?:\w+\.)?(tr\.link)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(travelwithtricks\.me)$/,
            path: /^\/.+r=.+/
        }, {
            host: /^(?:\w+\.)?(u\.safelinkview\.com)$/,
            path: /^\/.+id=.+/
        }, {
            host: /^(?:\w+\.)?(ujv\.al)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(ujv\.me)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(updatetribun\.org)$/,
            path: /^\/[^-/]+$/
        }, {
            host: /^(?:\w+\.)?(urlku\.gq)$/,
            path: /^\/.+url=.+/
        }, {
            host: /^(?:\w+\.)?(vehicle-techno\.cf)$/,
            path: /./
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

    async function dwindly() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromScriptDocument(document, /window\.open\(encD\("([^"]+)/);
        if (url) {
            url = '/' + decodeBase64(url);
        } else {
            url = getUrlFromScriptDocument(document, /document\.location\.href = "([^"]+)/)
        }
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
        let url;
        if (window.location.hostname.includes('v1.')) {
            url = getUrlFromScriptDocument(document, /="([^"]+)",e=/);
        } else {
            url = getUrlFromScriptDocument(document, /;window\.location="([^"]+)"/);
        }
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

    function onlinefreecourse() {
        window.stop();
        let url = getUrlFromAddressBar(/\?file=([^#&]+)/);
        url = decodeBase64(url);
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
        let url = getUrlFromElementDocument(document, 'div p a', 'href');
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

    function ujv() {
        domReady(() => {
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
                window.stop();
                let loop = setInterval(async () => {
                    const url = form.action;
                    const data = serialize(form);
                    const headers = [
                        ['Content-Type', 'application/x-www-form-urlencoded;'],
                        ['X-Requested-With', 'XMLHttpRequest']
                    ];
                    await POST(url, data, headers).then((response) => {
                        response = JSON.parse(response);
                        let url = response.url;
                        if (url) {
                            clearInterval(loop);
                            openLink(url);
                        }
                    });
                }, 1000);
            }
        });
    }

    async function ujval() {
        window.stop();
        const document = await getDocument(window.location.href);
        let url = getUrlFromScriptDocument(document, /;\$\("a\.redirect"\)\.attr\("href","([^"]+)/);
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

    function vehicletechno() {
        window.stop();
        let chippertext = getUrlFromAddressBar(/o=([^#&]+)/);
        let url = decrypt(chippertext, 'root');
        openLink(url);

        function decrypt(chippertext, key) {
            var CryptoJS = function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(var o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},c=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,a=4*s,c=i/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var f=c*s,u=t.min(4*f,i);if(f){for(var h=0;f>h;h+=s)this._doProcessBlock(n,h);var p=n.splice(0,f);r.sigBytes-=u}return new o.init(p,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=u.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new h.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(){{var t=CryptoJS,e=t.lib,r=e.WordArray,n=t.enc;n.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,f=s<<16|a<<8|c,u=0;4>u&&r>o+.75*u;u++)i.push(n.charAt(f>>>6*(3-u)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var e=t.length,n=this._map,i=n.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(e=o)}for(var s=[],a=0,c=0;e>c;c++)if(c%4){var f=n.indexOf(t.charAt(c-1))<<c%4*2,u=n.indexOf(t.charAt(c))>>>6-c%4*2;s[a>>>2]|=(f|u)<<24-a%4*8,a++}return r.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}}(),function(t){function e(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+i+s;return(a<<o|a>>>32-o)+e}function r(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+i+s;return(a<<o|a>>>32-o)+e}function n(t,e,r,n,i,o,s){var a=t+(e^r^n)+i+s;return(a<<o|a>>>32-o)+e}function i(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+i+s;return(a<<o|a>>>32-o)+e}var o=CryptoJS,s=o.lib,a=s.WordArray,c=s.Hasher,f=o.algo,u=[];!function(){for(var e=0;64>e;e++)u[e]=4294967296*t.abs(t.sin(e+1))|0}();var h=f.MD5=c.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var s=0;16>s;s++){var a=o+s,c=t[a];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f=this._hash.words,h=t[o+0],p=t[o+1],l=t[o+2],d=t[o+3],v=t[o+4],y=t[o+5],g=t[o+6],_=t[o+7],m=t[o+8],S=t[o+9],B=t[o+10],x=t[o+11],k=t[o+12],C=t[o+13],z=t[o+14],w=t[o+15],E=f[0],D=f[1],M=f[2],b=f[3];E=e(E,D,M,b,h,7,u[0]),b=e(b,E,D,M,p,12,u[1]),M=e(M,b,E,D,l,17,u[2]),D=e(D,M,b,E,d,22,u[3]),E=e(E,D,M,b,v,7,u[4]),b=e(b,E,D,M,y,12,u[5]),M=e(M,b,E,D,g,17,u[6]),D=e(D,M,b,E,_,22,u[7]),E=e(E,D,M,b,m,7,u[8]),b=e(b,E,D,M,S,12,u[9]),M=e(M,b,E,D,B,17,u[10]),D=e(D,M,b,E,x,22,u[11]),E=e(E,D,M,b,k,7,u[12]),b=e(b,E,D,M,C,12,u[13]),M=e(M,b,E,D,z,17,u[14]),D=e(D,M,b,E,w,22,u[15]),E=r(E,D,M,b,p,5,u[16]),b=r(b,E,D,M,g,9,u[17]),M=r(M,b,E,D,x,14,u[18]),D=r(D,M,b,E,h,20,u[19]),E=r(E,D,M,b,y,5,u[20]),b=r(b,E,D,M,B,9,u[21]),M=r(M,b,E,D,w,14,u[22]),D=r(D,M,b,E,v,20,u[23]),E=r(E,D,M,b,S,5,u[24]),b=r(b,E,D,M,z,9,u[25]),M=r(M,b,E,D,d,14,u[26]),D=r(D,M,b,E,m,20,u[27]),E=r(E,D,M,b,C,5,u[28]),b=r(b,E,D,M,l,9,u[29]),M=r(M,b,E,D,_,14,u[30]),D=r(D,M,b,E,k,20,u[31]),E=n(E,D,M,b,y,4,u[32]),b=n(b,E,D,M,m,11,u[33]),M=n(M,b,E,D,x,16,u[34]),D=n(D,M,b,E,z,23,u[35]),E=n(E,D,M,b,p,4,u[36]),b=n(b,E,D,M,v,11,u[37]),M=n(M,b,E,D,_,16,u[38]),D=n(D,M,b,E,B,23,u[39]),E=n(E,D,M,b,C,4,u[40]),b=n(b,E,D,M,h,11,u[41]),M=n(M,b,E,D,d,16,u[42]),D=n(D,M,b,E,g,23,u[43]),E=n(E,D,M,b,S,4,u[44]),b=n(b,E,D,M,k,11,u[45]),M=n(M,b,E,D,w,16,u[46]),D=n(D,M,b,E,l,23,u[47]),E=i(E,D,M,b,h,6,u[48]),b=i(b,E,D,M,_,10,u[49]),M=i(M,b,E,D,z,15,u[50]),D=i(D,M,b,E,y,21,u[51]),E=i(E,D,M,b,k,6,u[52]),b=i(b,E,D,M,d,10,u[53]),M=i(M,b,E,D,B,15,u[54]),D=i(D,M,b,E,p,21,u[55]),E=i(E,D,M,b,m,6,u[56]),b=i(b,E,D,M,w,10,u[57]),M=i(M,b,E,D,g,15,u[58]),D=i(D,M,b,E,C,21,u[59]),E=i(E,D,M,b,v,6,u[60]),b=i(b,E,D,M,x,10,u[61]),M=i(M,b,E,D,l,15,u[62]),D=i(D,M,b,E,S,21,u[63]),f[0]=f[0]+E|0,f[1]=f[1]+D|0,f[2]=f[2]+M|0,f[3]=f[3]+b|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),s=n;r[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[(i+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,f=0;4>f;f++){var u=c[f];c[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var t=c.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=c._createHelper(h),o.HmacMD5=c._createHmacHelper(h)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,i=t.algo,o=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),o=n.create(),s=o.words,a=r.keySize,c=r.iterations;s.length<a;){f&&i.update(f);var f=i.update(t).finalize(e);i.reset();for(var u=1;c>u;u++)f=i.finalize(f),i.reset();o.concat(f)}return o.sigBytes=4*a,o}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,a=(s.Utf8,s.Base64),c=e.algo,f=c.EvpKDF,u=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?x:m}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),h=(r.StreamCipher=u.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),e.mode={}),p=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),l=h.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var o=i;this._iv=t}else var o=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=o[s]}var r=p.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=o}}),r}(),d=e.pad={},v=d.Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],a=0;n>a;a+=4)s.push(o);var c=i.create(s,n);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:l,padding:v}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,r=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode=n.call(r,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),g=e.format={},_=g.OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(r)var n=i.create([1398893684,1701076831]).concat(r).concat(e);else var n=e;return n.toString(a)},parse:function(t){var e=a.parse(t),r=e.words;if(1398893684==r[0]&&1701076831==r[1]){var n=i.create(r.slice(2,4));r.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:n})}},m=r.SerializableCipher=n.extend({cfg:n.extend({format:_}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return y.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=t.createDecryptor(r,n).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=e.kdf={},B=S.OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=f.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,y.create({key:o,iv:s,salt:n})}},x=r.PasswordBasedCipher=m.extend({cfg:m.cfg.extend({kdf:B}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=m.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);n.iv=i.iv;var o=m.decrypt.call(this,t,e,i.key,n);return o}})}(),function(){var t=CryptoJS,e=t.lib,r=e.BlockCipher,n=t.algo,i=[],o=[],s=[],a=[],c=[],f=[],u=[],h=[],p=[],l=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;for(var r=0,n=0,e=0;256>e;e++){var d=n^n<<1^n<<2^n<<3^n<<4;d=d>>>8^255&d^99,i[r]=d,o[d]=r;var v=t[r],y=t[v],g=t[y],_=257*t[d]^16843008*d;s[r]=_<<24|_>>>8,a[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,f[r]=_;var _=16843009*g^65537*y^257*v^16843008*r;u[d]=_<<24|_>>>8,h[d]=_<<16|_>>>16,p[d]=_<<8|_>>>24,l[d]=_,r?(r=v^t[t[t[g^v]]],n^=t[t[n]]):r=n=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],v=n.AES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,n=this._nRounds=r+6,o=4*(n+1),s=this._keySchedule=[],a=0;o>a;a++)if(r>a)s[a]=e[a];else{var c=s[a-1];a%r?r>6&&a%r==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=c<<8|c>>>24,c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=d[a/r|0]<<24),s[a]=s[a-r]^c}for(var f=this._invKeySchedule=[],v=0;o>v;v++){var a=o-v;if(v%4)var c=s[a];else var c=s[a-4];f[v]=4>v||4>=a?c:u[i[c>>>24]]^h[i[c>>>16&255]]^p[i[c>>>8&255]]^l[i[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,a,c,f,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,u,h,p,l,o);var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,a){for(var c=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],l=4,d=1;c>d;d++){var v=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[l++],y=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[l++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[l++],_=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[l++];f=v,u=y,h=g,p=_}var v=(a[f>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&p])^r[l++],y=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[p>>>8&255]<<8|a[255&f])^r[l++],g=(a[h>>>24]<<24|a[p>>>16&255]<<16|a[f>>>8&255]<<8|a[255&u])^r[l++],_=(a[p>>>24]<<24|a[f>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^r[l++];t[e]=v,t[e+1]=y,t[e+2]=g,t[e+3]=_},keySize:8});t.AES=r._createHelper(v)}();var aesCrypto={};!function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var r=this.prefix;return r+=t.salt.toString(),r+=t.ciphertext.toString()},parse:function(t){var r=CryptoJS.lib.CipherParams.create({}),e=this.prefix.length;return 0!==t.indexOf(this.prefix)?r:(r.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+e)),r.salt=CryptoJS.enc.Hex.parse(t.substring(e,16+e)),r)}},t.encrypt=function(r,e){try{return CryptoJS.AES.encrypt(r,e,{format:t.formatter}).toString()}catch(n){return""}},t.decrypt=function(r,e){try{var n=CryptoJS.AES.decrypt(r,e,{format:t.formatter});return n.toString(CryptoJS.enc.Utf8)}catch(i){return""}}}(aesCrypto);
            return aesCrypto.decrypt(chippertext, key);
        }
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
            case 'adskipme.com': return ujv();
            case 'anjay.info': return siherp();
            case 'animanganews.com': return urlku();
            case 'apasih.pw': return bagilagi();
            case 'arubedo.blogspot.com': return wikitrade();
            case 'autech.xyz': return wikitrade();
            case 'autolinkach.com': return bagilagi();
            case 'autoride.pw': return bagilagi();
            case 'awcar.icu': return bagilagi();
            case 'bagilagi.com': return bagilagi();
            case 'bagisoft.net': return kurosafe();
            case 'blogjepang.com': return lindungin();
            case 'bolaoke.club': return bagilagi();
            case 'businessforyouand.me': return lindungin();
            case 'cashat.net': return ujv();
            case 'cll.press': return ujv();
            case 'coeg.in': return siherp();
            case 'converthinks.xyz': return converthinks();
            case 'cutsouf.com': return ujv();
            case 'daunshorte.teknologilink.com': return daunshorte();
            case 'davinsurance.com': return bagilagi();
            case 'dawnstation.com': return dawnstation();
            case 'decrypt2.safelinkconverter.com': return safelinkconverter();
            case 'drive.jepitkertas.com': return kurosafe();
            case 'drivefiles.bid': return kurosafe();
            case 'dwindly.io': return dwindly();
            case 'flylink.io': return ujv();
            case 'fmlawkers.club': return kurosafe();
            case 'forexbrokers.download': return lindungin();
            case 'gameinfo.pw': return bagilagi();
            case 'getinfos.net': return bagilagi();
            case 'giga74.com': return safelinkview();
            case 'gocoo.co': return gocoo();
            case 'gosavelink.com': return kurosafe();
            case 'greget.space': return siherp();
            case 'healthtod.com': return lindungin();
            case 'hexafile.net': return hexafile();
            case 'hunstulovers.net': return hunstulovers();
            case 'idsly.bid': return safelinku();
            case 'indexmovie.biz': return indexmovie();
            case 'indexmovie.club': return wikitrade();
            case 'insurance-info.us': return lindungin();
            case 'insurance-waifu.cf': return waifu();
            case 'intercelestial.com': return bagilagi();
            case 'irisvera.com': return lindungin();
            case 'jheberg.net': return jheberg();
            case 'jili.in': return jiliin();
            case 'karung.in': return karungin();
            case 'kurosafety.menantisenja.com': return kurosafe();
            case 'landscapenature.pw': return bagilagi();
            case 'lanjutkeun.blogspot.com': return wikitrade();
            case 'licklink.net': return ujv();
            case 'lifesurance.info': return bagilagi();
            case 'lindung.in': return lindungin();
            case 'link4.me': return shortad();
            case 'link4win.net': return ujv();
            case 'linkach.com': return bagilagi();
            case 'linkrex.net': return ujv();
            case 'linksad.net': return ujv();
            case 'linkshrink.net': return linkshrink();
            case 'lonelymoon.net': return bagilagi();
            case 'losstor.com': return kurosafe();
            case 'lyon.kim': return ujv();
            case 'masmellow.com': return wikitrade();
            case 'menantisenja.com': return lindungin();
            case 'mirrorace.com': return mirrorace();
            case 'mirrored.to': return mirrored();
            case 'mylink.zone': return mylink();
            case 'naturalhealthy.xyz': return lindungin();
            case 'onepiece-ex.com.br': return onepiece();
            case 'onlinefreecourse.net': return onlinefreecourse();
            case 'pafpaf.info': return kurosafe();
            case 'pengaman-link.indonesia-komunitas.com': return wikitrade();
            case 'plantaheim.com': return lindungin();
            case 'plantaheim.web.id': return lindungin();
            case 'psl.pw': return ujv();
            case 'punchsubs.net': return punchsubs();
            case 'safelinkreviewx.com': return safelinkview();
            case 'safelinku.net': return safelinku();
            case 'sehatlega.com': return lindungin();
            case 'sehatsegar.net': return bagilagi();
            case 'sfl.ink': return safelinku();
            case 'short.awsubs.co': return awsubs();
            case 'shortad.cf': return shortad();
            case 'shrtfly.net': return ujv();
            case 'shtlink.co': return shtme();
            case 'shtme.co': return shtme();
            case 'siherp.com': return siherp();
            case 'siotong.com': return siherp();
            case 'skinnycat.net': return lindungin();
            case 'skips.link': return safelinku();
            case 'skyinsurance.ml': return bagilagi();
            case 'soralink.sinetronku.tv': return lindungin();
            case 'spacetica.com': return spacetica();
            case 'speedcar.club': return bagilagi();
            case 'suarankri.me': return safelinku();
            case 'sweetlantern.com': return bagilagi();
            case 'swzz.xyz': return swzz();
            case 'teknosafe.teknologilink.com': return teknosafe();
            case 'telolet.in': return telolet();
            case 'telondasmu.com': return siherp();
            case 'tetew.info': return siherp();
            case 'tetewlink.me': return vehicletechno();
            case 'tr.link': return shortad();
            case 'travelwithtricks.me': return lindungin();
            case 'u.safelinkview.com': return safelinkview();
            case 'ujv.al': return ujval();
            case 'ujv.me': return ujv();
            case 'updatetribun.org': return safelinku();
            case 'urlku.gq': return urlku();
            case 'vehicle-techno.cf': return vehicletechno();
            case 'verydelicius.com': return verydelicius();
            case 'wikitrade.me': return wikitrade();
        }
    }
})();

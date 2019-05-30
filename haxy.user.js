// ==UserScript==
// @name         [IusiSkript] Krunker Aimbot/ESP/Auto Reload 28 May 2019 | UNDETECED AS IT RUNS THROUGH A BYPASS SCRIPT |
// @version      4.2
// @author       IusiSkript
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(game|server|party)=.+)$/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @namespace IusiSkript
// ==/UserScript==

window.stop();
document.innerHTML = "";

// * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * *

const version = '1.2';

// * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * *

GM_xmlhttpRequest({
    method: "GET",
    url: document.location.origin,
    onload: res => {
        let html = res.responseText;
        html = html.replace(/game\.[^\.]+\.js/, '____.js');
        html = html.replace(/<script data-cfasync(.|\s)*?<\/script>/, `<meta name="gpy_version" content="${version}">`);
        GM_xmlhttpRequest({
            method: "GET",
            url: document.location.origin + '/libs/zip.js',
            onload: res => {
                let zip = res.responseText;
                zip = zip.replace(/document\..+<\/div>"\)/, '');
                html = html.replace(/<script src="libs\/zip\.js.+"><\/script>/, `<script>${zip}</script>`);
                html += '<script src="https://raw.githack.com/IusiSkript/KrunkerSkript/master/bypass.js"></script>';
                html += '<script src="https://raw.githack.com/IusiSkript/KrunkerSkript/master/haxy.js"></script>';
                html += '<script src="https://raw.githack.com/IusiSkript/KrunkerSkript/master/game.js></script>';

                document.open();
                document.write(html);
                document.close();
            }
        })
    }
})

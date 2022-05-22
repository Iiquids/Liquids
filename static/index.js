var form = document.getElementById('srchbutton');
var input = document.getElementById('srchinput');

form.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        if ((localStorage.getItem('aboutBlankCloaking')) === 'true') {
            var urle = "https://" + document.domain + __uv$config.prefix + __uv$config.encodeUrl(url);
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = urle;
            console.log(iframe.src)
            win.document.body.appendChild(iframe)

        } else {
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    });
});

function openUrl(url) {
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        if (url == "pornhub.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        if (url == "xvideo.com") url =
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        if (url == "canary.giggl.app") url =
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        if (url == "wattpad.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        if ((localStorage.getItem('aboutBlankCloaking')) === 'true') {
            var urle = "https://" + document.domain + __uv$config.prefix + __uv$config.encodeUrl(url);
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = urle;
            console.log(iframe.src)
            win.document.body.appendChild(iframe)

        } else {
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    });
}

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function onLoad() {
    let inFrame

    try {
        inFrame = window !== top
    } catch (e) {
        inFrame = true
    }

    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = open("about:blank", "_blank")
        if (!popup || popup.closed) {
            alert("Popups are disabled!")
        } else {
            const doc = popup.document
            const iframe = doc.createElement("iframe")
            const style = iframe.style
            const img = doc.createElement("link")

            img.rel = "icon"
            img.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"
            doc.title = "Google Drive"

            iframe.src = location.href
            style.position = "fixed"
            style.top = style.bottom = style.left = style.right = 0
            style.border = style.outline = "none"
            style.width = style.height = "100%"

            doc.body.appendChild(iframe)
            location.replace("https://google.com")
        }
    }
}

// Games ~~

function discord() {
    openUrl("https://www.nvidia.com/en-us/geforce-now/")
}

function spotify() {
    openUrl("https://open.spotify.com/")
}

function robloxLink() {
    openUrl("https://now.gg/play/roblox-corporation/5349/roblox")
}
function retroBowl() {
    openUrl('https://retrobowlgame.com/')
}
function poki() {
    openUrl("https://poki.com/")
}
function minecraft() {
    openUrl("https://blockcraft.victorwei.com/")
}
function geforceNow() {
    openUrl("https://play.geforcenow.com")
}

function v1lol() {
    openUrl("https://1v1.lol/")
}

function amoungUs() {
    openUrl("https://now.gg/play/innersloth-llc/4047/among-us")
}

function youtube() {
    openUrl("https://youtube.com")
}

function twitch() {
    openUrl("https://twitch.tv")
}

function tiktok() {
    openUrl("https://tiktok.com")
}

function animixPlay() {
    openUrl("https://animixplay.to")
}
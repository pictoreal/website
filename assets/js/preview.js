function getUrlVars() {
    let url = window.location.href;
    let vars = {};
    let hashes = url.split("?")[1];
    let hash = hashes.split('&');

    for (let i = 0; i < hash.length; i++) {
        const params=hash[i].split("=");
        vars[params[0]] = params[1];
    }
    return vars;
}

volumes = {
    19: {url: "https://www.yumpu.com/en/embed/view/mi1wtA6cOuJpjSFY", name: "Pictoreal Volume 19"},
    20: {url: "https://www.yumpu.com/en/embed/view/ZQWHTJI3yPDF8M1m", name: "Pictoreal Volume 20"},
}

function start() {
    if(document.readyState === 'complete'){
        const params = getUrlVars();
        if(params.vol && volumes[params.vol]) {
            let vol = params.vol;
            document.title = `${volumes[vol].name} - Read Online`;
            document.getElementById("frame").src = volumes[vol].url;
            document.getElementById("page-title").innerText = volumes[vol].name
        } else {
            window.location.replace('../');
        }
    }
}

document.onreadystatechange = start;
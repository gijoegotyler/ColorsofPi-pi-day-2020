function encode() {
    let r = document.getElementById("r").value < 256 ? document.getElementById("r").value : 255;
    let g = document.getElementById("g").value < 256 ? document.getElementById("g").value : 255;
    let b = document.getElementById("b").value < 256 ? document.getElementById("b").value : 255;
    if (parseInt(r) + parseInt(g) + parseInt(b) > 382) {
        document.body.style.color = 'black';
        document.querySelectorAll('input').forEach(element => {
            element.style.color = 'black';
            element.style.borderColor = 'black';
        })
    } else {
        document.body.style.color = "white";
        document.querySelectorAll('input').forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'white';
        })
    }
    document.getElementById('r').value = r;
    document.getElementById('g').value = g;
    document.getElementById('b').value = b;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    let rgbstring = r + "-" + g + "-" + b;
    const url = `http://localhost:3000/encode/${rgbstring}`;
    loadJSON(url, finishEncode);
}

function decode() {
    let pistring = document.getElementById("pinum").value;
    const url = `http://localhost:3000/decode/${pistring}`;
    loadJSON(url, finishDecode);
}

function finishEncode(data) {
    document.getElementById("pinum").value = data.picolor;
    if (data.picolor.indexOf("-2") != -1) {
        document.getElementById("err").innerHTML = "Color Unavailable in 1st billion digits of pi"
    } else {
        document.getElementById("err").innerHTML = "";
    }
}

function finishDecode(data) {
    let rgb = data.rgbValues;
    let r = rgb[0] < 256 ? rgb[0] : 255;
    let g = rgb[1] < 256 ? rgb[1] : 255;
    let b = rgb[2] < 256 ? rgb[2] : 255;
    if (parseInt(r) + parseInt(g) + parseInt(b) > 382) {
        document.body.style.color = 'black';
        document.querySelectorAll('input').forEach(element => {
            element.style.color = 'black';
            element.style.borderColor = 'black';
        })
    } else {
        document.body.style.color = "white";
        document.querySelectorAll('input').forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'white';
        })
    }
    document.getElementById('r').value = r;
    document.getElementById('g').value = g;
    document.getElementById('b').value = b;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById("err").innerHTML = "";
}

function setup() {
    noCanvas();
    document.getElementById('r').value = Math.floor(Math.random() * 255);
    document.getElementById('g').value = Math.floor(Math.random() * 255);
    document.getElementById('b').value = Math.floor(Math.random() * 255);
    encode();
}

document.getElementById('r').addEventListener('change', encode)
document.getElementById('g').addEventListener('change', encode)
document.getElementById('b').addEventListener('change', encode)
document.getElementById('pinum').addEventListener('change', decode)
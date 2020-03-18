const fs = require('fs')
const express = require('express')
const app = express()

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

let digits = '';

app.get('/encode/:nums', (request, response) => {
    let search = request.params.nums.split('-');

    let lengths = search.map(element => element.length)

    let fullString = "";
    search.forEach(element => fullString += element)

    let startDigit = digits.indexOf(fullString) - 1;

    let returnString = "";
    lengths.forEach(element => returnString += element);
    returnString += startDigit;


    response.send({
        picolor: returnString,
        search: search,
    });
});

app.get('/decode/:num', (request, response) => {
    let search = request.params.num;

    let lengths = [search.charAt(0), search.charAt(1), search.charAt(2)];

    let startDigit = parseInt(search.substring(3));

    let rgb = [];
    let c = 1;
    lengths.forEach(element => {
        let n = parseInt(element)
        rgb.push(digits.substring(startDigit + c, startDigit + c + n));
        c += n;
    })


    response.send({
        rgbValues: rgb,
        search: search,
    });
});

const stream = fs.createReadStream('pi.txt');

stream.on('data', chunk => {
    digits += chunk;
});

stream.on('end', () => {
    console.log('digits loaded');
});
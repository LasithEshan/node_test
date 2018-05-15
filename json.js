var fs = require('fs');


var obj = {
    title: 'lasith',
    body: 'titleeee'
};

var objToString = JSON.stringify(obj);

fs.writeFileSync('notes.json', objToString);

// var string = JSON.stringify(obj);

console.log(typeof objToString);
console.log(objToString);


var str = fs.readFileSync('notes.json');
console.log(str);
var strToObj = JSON.parse(str);

console.log(typeof strToObj);
console.log(strToObj);


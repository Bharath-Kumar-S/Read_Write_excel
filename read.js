var parser = require('simple-excel-to-json');
var doc = parser.parseXls2Json(`Sample.xlsx`);
//print the data of the first sheet
// console.log(doc[0]);

doc[0].forEach((data, i) => {
    console.log(`${i} ${data.name} ${data.age}`)
})


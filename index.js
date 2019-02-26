const excel = require('exceljs');
const workbook = new excel.Workbook();
let sheetName = 'Sheet1';
let sheet = workbook.addWorksheet(sheetName);
sheet.columns = [{ key: `name`, header: `name` }, { key: `age`, header: `age` }];
let data = [{ name: `Kalai`, age: 24 }, { name: `Vignesh`, age: 24 }];
for (i in data) {
    sheet.addRow(data[i]);
}
let fileName = `Sample.xlsx`;
workbook.xlsx.writeFile(fileName)
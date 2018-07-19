const XLSX = require('xlsx');

console.time('xlsx');
const workbook = XLSX.readFile('DummyExcelWith100000rows40cols.xlsx');

var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

xlData.map((rows, index) => {
    for (const value of Object.values(rows)) {
      //value
     }  
})
console.timeEnd('xlsx');
console.log(xlData.length);


const Excel = require('exceljs');
console.time('Exceljs');
const workbook = new Excel.Workbook();
workbook.xlsx.readFile('DummyExcelWith100000rows40cols.xlsx')
    .then(function () {
        workbook.eachSheet(function(worksheet, sheetId) {
            worksheet.eachRow(function(row, rowNumber) {
                row.eachCell(function(cell, colNumber) {
                    // console.log('Cell ' + colNumber + ' = ' + cell.value);
                });
                
            });
            
        })
        console.timeEnd('Exceljs');
    });


import time

start = time.time()


from openpyxl import load_workbook
wb = load_workbook(filename='DummyExcelWith100000rows40cols.xlsx', read_only=True)


for sheet_names in wb.get_sheet_names():
  ws = wb[sheet_names]
  for row in ws.rows:
    for cell in row:
      pass
end = time.time()
print(end - start)


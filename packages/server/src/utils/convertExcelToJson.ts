import excelToJson from 'convert-excel-to-json';
import fs from 'fs';
import path from 'path';

import SheetOptions from '../types/SheetOptions';

const source = fs.readFileSync(
  path.join(__dirname, '..', 'data/2020-06-26_COVID-19_Data.xlsx')
);

const convertExcelToJson = (sheetCollection: Array<SheetOptions>) => {
  const sheets = sheetCollection
    .filter(({ required }) => required)
    .map(({ sheetName, skipRowsFromTop, columnToKey }) => ({
      name: sheetName,
      header: {
        rows: skipRowsFromTop,
      },
      columnToKey,
    }));

  const options = {
    source,
    sheets,
  };

  return excelToJson(options);
};

export default convertExcelToJson;

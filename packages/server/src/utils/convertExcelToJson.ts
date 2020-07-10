import excelToJson from 'convert-excel-to-json';
import fs from 'fs';

// @ts-ignore
import sourceFile from '../data/2020-06-26_COVID-19_Data.xlsx';
import SheetOptions from '../types/SheetOptions';

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
    source: fs.readFileSync(sourceFile),
    sheets,
  };

  return excelToJson(options);
};

export default convertExcelToJson;

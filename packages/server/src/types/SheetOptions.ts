type SheetOptions = {
  sheetName: string;
  skipRowsFromTop: number;
  columnToKey: { [key: string]: string };
  required: boolean;
  name: string;
};

export default SheetOptions;

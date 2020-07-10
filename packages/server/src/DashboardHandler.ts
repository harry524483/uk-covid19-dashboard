import moment from 'moment';

import SheetOptions from './types/SheetOptions';
import SheetCollection from './constants/SheetCollection';
import IHttpServiceClient from './types/IHttpServiceClient';

class DashboardHandler {
  constructor(
    private convertExcelToJson: (sheetCollection: Array<SheetOptions>) => any,
    private sheetCollection: Array<SheetOptions>,
    private httpServiceClient: IHttpServiceClient
  ) {}

  async handle() {
    const jsonResult = this.convertExcelToJson(this.sheetCollection);
    const sheetNames = SheetCollection.filter(({ required }) => required).map(
      ({ sheetName, name }) => ({
        name,
        sheetName,
      })
    );

    const dashboard = {};

    sheetNames.forEach(({ sheetName, name }) => {
      const records = jsonResult[sheetName];

      const filteredRecords = records
        .filter(({ date }) => moment(date).isValid())
        .map((value) => ({
          ...value,
          date: moment(value.date).format('YYYY-MM-DD'),
        }));

      dashboard[name] = filteredRecords;
    });

    const [overview, totalRegionalCases] = await Promise.all([
      this.httpServiceClient.getOverview(),
      this.httpServiceClient.getTotalRegionalCases(),
    ]);

    dashboard['overview'] = overview;
    dashboard['regional_total_cases'] = totalRegionalCases;

    return dashboard;
  }
}

export default DashboardHandler;

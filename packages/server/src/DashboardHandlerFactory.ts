import axios from 'axios';

import DashboardHandler from './DashboardHandler';
import convertExcelToJson from './utils/convertExcelToJson';
import SheetCollection from './constants/SheetCollection';
import IHttpServiceClient from './types/IHttpServiceClient';
import HttpServiceClient from './HttpServiceClient';
import IHttpClient from './types/IHttpClient';

class DashboardHandlerFactory {
  public static build() {
    const httpClient: IHttpClient = axios;
    const httpServiceClient: IHttpServiceClient = new HttpServiceClient(
      httpClient
    );

    return new DashboardHandler(
      convertExcelToJson,
      SheetCollection,
      httpServiceClient
    );
  }
}

export default DashboardHandlerFactory;

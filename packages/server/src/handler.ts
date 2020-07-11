import Endpoint from './constants/Endpoint';
import Event from './types/Event';
import DashboardHandlerFactory from './DashboardHandlerFactory';
import GeoDataHandlerFactory from './GeoDataHandlerFactory';

const handler = async (event: Event) => {
  let result;

  if (event.path === Endpoint.Dashboard) {
    const dashboardHandler = DashboardHandlerFactory.build();

    result = await dashboardHandler.handle();
  }

  if (event.path === Endpoint.GeoData) {
    const geoDataHandler = GeoDataHandlerFactory.build();

    result = geoDataHandler.handle();
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin':
        'http://uk-covid19-web-bucket.s3-website-us-east-1.amazonaws.com',
    },
    body: JSON.stringify(result),
  };
};

export default handler;

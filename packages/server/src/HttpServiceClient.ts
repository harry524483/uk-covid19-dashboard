import IHttpClient from './types/IHttpClient';

class HttpServiceClient {
  constructor(private httpClient: IHttpClient) {}

  async getTotalRegionalCases() {
    const urls = [
      'https://c19downloads.azureedge.net/downloads/data/regions_latest.json',
      'https://c19downloads.azureedge.net/downloads/data/countries_latest.json',
    ];

    const [firstResponse, secondResponse] = await Promise.all([
      this.httpClient.get(urls[0]),
      this.httpClient.get(urls[1]),
    ]);

    const response = Object.entries({
      ...firstResponse.data,
      ...secondResponse.data,
    }) as any;

    const result = {};
    const data: Array<any> = [];
    for (const [key, value] of response) {
      if (key === 'metadata') {
        result['metadata'] = value;
      } else {
        data.push({
          name: value.name.value,
          totalCases: value.totalCases.value,
        });
      }
    }

    result['data'] = data;
    return result;
  }

  async getOverview() {
    const url =
      'https://c19downloads.azureedge.net/downloads/data/landing.json';

    const { data } = await this.httpClient.get(url);

    const [overview] = Object.values(data.overview);

    return { data: overview, metadata: data.metadata };
  }
}

export default HttpServiceClient;

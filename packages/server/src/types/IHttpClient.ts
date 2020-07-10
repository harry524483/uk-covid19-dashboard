interface IHttpClient {
  get(url: string): Promise<any>;
}

export default IHttpClient;

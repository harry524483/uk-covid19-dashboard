interface IHttpServiceClient {
  getTotalRegionalCases(): Promise<any>;
  getOverview(): Promise<any>;
}

export default IHttpServiceClient;

import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const fetcher = async (url: string) => {
  const response = await httpClient.get(url);

  return response.data;
};

export default fetcher;

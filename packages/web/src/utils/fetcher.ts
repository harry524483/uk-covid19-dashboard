const fetcher = async (url: string) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

export default fetcher;

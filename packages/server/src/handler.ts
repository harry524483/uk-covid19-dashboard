const handler = async (event: Event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
};

export default handler;

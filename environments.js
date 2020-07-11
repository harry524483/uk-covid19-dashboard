module.exports.environments = () => {
  const prodSettings = {
    allowedOrigin:
      'http://uk-covid19-web-bucket.s3-website-us-east-1.amazonaws.com',
    webBucketName: 'uk-covid19-web-bucket',
  };

  const devSettings = {
    allowedOrigin: 'http://localhost:3000',
  };

  return {
    prod: prodSettings,
    dev: devSettings,
  };
};

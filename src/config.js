const dev = {
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1f5mpfyv86.execute-api.us-east-1.amazonaws.com/dev"
  }
};

const prod = dev;

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

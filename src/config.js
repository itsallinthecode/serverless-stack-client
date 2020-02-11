const dev = {
  STRIPE_KEY: "pk_test_og1bOvotlGKVmAylHC9NkQcD00ZQVD8Etq",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1js9bv0t7kq7p"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://xn0k124tve.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_upRffkQRk",
    APP_CLIENT_ID: "2k9hte6pvi10cv9d82a8rfk7c5",
    IDENTITY_POOL_ID: "eu-west-2:a27de262-d9af-4add-a23b-9f3b2c3a2883"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_og1bOvotlGKVmAylHC9NkQcD00ZQVD8Etq",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-gzz2uniu6spv"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://51vysso8cf.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_UhqERRfX1",
    APP_CLIENT_ID: "377f2vddnpfgp0qdpsr3ticfm1",
    IDENTITY_POOL_ID: "eu-west-2:01f8cb02-a90e-4038-8942-842f2e6b34bc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

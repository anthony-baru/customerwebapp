var app = require("./app");

var server = app.listen(process.env.port || 3000, function () {
  console.log("Server is running on port 3000");
});

// const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
// const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
// const AWS = require("aws-sdk");
// const request = require("request");
// const jwkToPem = require("jwk-to-pem");
// const jwt = require("jsonwebtoken");
// global.fetch = require("node-fetch");

// const poolData = {
//   UserPoolId: "", // Your user pool id here
//   ClientId: "", // Your client id here
// };
// const pool_region = "us-east-1";

// const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

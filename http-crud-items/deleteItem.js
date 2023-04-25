'use strict'

const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  
  const params = {
    TableName: process.env.DB_TABLE,
    Key: {
      id,
    },
  };

  await dynamoDb.delete(params).promise();

  return {
    statusCode: 204,
  };
};
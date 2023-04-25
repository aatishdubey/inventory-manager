'use strict'

const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DB_TABLE,
  };

  const result = await dynamoDb.scan(params).promise();

  if(result.Count === 0) {
    return {
      statusCode: 404
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: result.Items
    })
  }
};
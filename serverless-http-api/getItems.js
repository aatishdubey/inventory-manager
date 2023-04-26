'use strict'

const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DB_TABLE,
  };

  const result = await dynamoDb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: result.Items.sort((a, b) => a.createdAt - b.createdAt)
    })
  }
};
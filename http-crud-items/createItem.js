'use strict'

const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString('utf-8'));
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DB_TABLE,
    Item: {
      id: body.id,
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    },
  };

  try {
    await dynamoDb.put({
      ...params,
      ConditionExpression: 'attribute_not_exists(id)',  
    }).promise();
  
    return {
      statusCode: 201,
    }
  } catch (err) {
    return {
      body: JSON.stringify({
        error: err.message,
      }),
      statusCode: 500,
    }
  }
};
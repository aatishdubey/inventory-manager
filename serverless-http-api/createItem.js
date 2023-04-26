'use strict'

const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const data = Buffer.from(event.body, 'base64').toString('utf-8');  
  const formData = new URLSearchParams(data);
  const parsedData = {};
  for (const [key, value] of formData.entries()) {
    parsedData[key] = value;
  }

  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DB_TABLE,
    Item: {
      id: parsedData.id,
      name: parsedData.name,
      description: parsedData.description,
      price: parsedData.price,
      image: parsedData.image,
      createdAt: timestamp,
    },
  };

  try {
    await dynamoDb.put({
      ...params,
      ConditionExpression: 'attribute_not_exists(id)',  
    }).promise();
  
    return {
      body: JSON.stringify({
        message: 'Item created successfully!',
      }),
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
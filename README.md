# Inventory Manager (React + Serverless)


# Sample Requests

### Create an item
curl -X POST --data '{"name":"Test","description":"Test Product","price":"1200","image":"https://test.com/test.jpg"}' --url https://eibn5s9583.execute-api.ap-south-1.amazonaws.com/

### Delete an item
curl -X DELETE --url https://eibn5s9583.execute-api.ap-south-1.amazonaws.com/1

### Get all items
curl --url https://eibn5s9583.execute-api.ap-south-1.amazonaws.com/
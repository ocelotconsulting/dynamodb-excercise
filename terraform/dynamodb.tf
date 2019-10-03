/*
In this file we're going to work to create a dynamodb table together in the POC account

Requirements:
- Create a dynamo db table
  - Include the username variable in your table name
  - Enable encryption at rest using kms
  - Use on-demand provisioning
- Create attributes of the following
  - name: String,
  - identityStatus: String,
  - alive: String,
  - alignment: String,
  - appearenceCount: Number,
  - firstMonth: String,
  - firstYear: Number
- Create a primary key using name as the partition key
- Create global secondary indexes with the following partition key:sort key combinations. Include only keys in the response
  - firstYear: name
  - appearenceCount: name
  - firstMonth: name
  - alive: name
  - alignment: name
  - identityStatus: name

Start from here:  https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html
*/
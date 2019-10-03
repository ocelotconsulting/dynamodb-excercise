const AWS = require('aws-sdk')
const moment = require('moment')
const _ = require('lodash')
AWS.config = new AWS.Config({
  region: 'us-east-1'
})
const dynamodb = new AWS.DynamoDB()
const { marshall } = require('./schema')
const dataset = require('./character-data.json')
const { tableName } = require('./config')

const start = moment()

const buildItem = character => ({
  PutRequest: {
    Item : marshall(character)
  }
})

const run = async () => {
  const chunks = _.chunk(dataset, 25)
  for(let chunk of chunks) {
    try {
      const params = {
        RequestItems: {
          [tableName]: chunk.map(buildItem)
        }
      }
      console.info('writting...')
      await dynamodb.batchWriteItem(params).promise()
    } catch (e) {
      console.error(e)
    }
  }
}

run().then(_ => {
  console.log('Completed in ', moment().diff(start, 'minutes', true), ' minutes')
})
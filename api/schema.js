const { marshallItem, unmarshallItem } = require('@aws/dynamodb-data-marshaller')

const schema = {
  name: {
    type: 'String',
    keyType: 'HASH',
    indexKeyConfigurations: {
      'year-name-index': 'RANGE',
      'alive-name-index': 'RANGE',
      'alignment-name-index': 'RANGE',
      'firstMonth-name-index': 'RANGE',
      'appearenceCount-name-index': 'RANGE',
      'identityStatus-name-index': 'RANGE'
    }
  },
  alive: {
    type: 'String',
    indexKeyConfigurations: {
      'alive-name-index': 'HASH'
    }
  },
  alignment: {
    type: 'String',
    indexKeyConfigurations: {
      'alignment-name-index': 'HASH'
    }
  },
  appearenceCount: {
    type: 'Number',
    indexKeyConfigurations: {
      'appearenceCount-name-index': 'HASH'
    }
  },
  firstMonth: {
    type: 'String',
    indexKeyConfigurations: {
      'firstMonth-name-index': 'HASH'
    }
  },
  firstYear: {
    type: 'Number',
    indexKeyConfigurations: {
      'firstYear-name-index': 'HASH'
    }
  },
  identityStatus: {
    type: 'String',
    indexKeyConfigurations: {
      'identityStatus-name-index': 'HASH'
    }
  }
}

const marshall = _ => marshallItem(schema, _)
const unmarshall = _ => unmarshallItem(schema, _)

module.exports = {
  schema,
  marshall,
  unmarshall
}
module.exports = {
  defaultUserId: '11',
  users: {
    '11': require('./users/11.json'),
    '21': require('./users/21.json'),
    '31': require('./users/31.json'),
    '41': require('./users/41.json')
  },
  tokens: require('./tokens.json'),
  groups: {
    '11': require('./groups/11.json'),
    '21': require('./groups/21.json'),
    '31': require('./groups/31.json')
  },
  patientdata: {
    '11': require('./patientdata/11.json')
  },
  messagethread: {
    tbd: require('./messagethread/tbd.json')
  },
  messagenotes: {
    '11': require('./messagenotes/11.json')
  }
};

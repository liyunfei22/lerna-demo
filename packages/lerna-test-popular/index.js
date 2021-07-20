const { API } = require('lerna-test-core');
const asios = require('axios');
const getInfo = () => axios.get(API)
module.exports = getInfo;
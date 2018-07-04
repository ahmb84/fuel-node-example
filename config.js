module.exports = {
  name: 'fuel-node-example',
  version: '1.0.0',
  ethreum_node_uri: process.env.NODE_URI || 'wss://rinkeby.infura.io/ws',
  privateKey: process.env.PRIVATE_KEY || '',
  address: process.env.ADDRESS || '',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000
}

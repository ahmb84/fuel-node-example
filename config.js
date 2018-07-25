module.exports = {
  name: 'fuel-node-example',
  version: '1.0.0',
  node_uri: process.env.NODE_URI || 'wss://rinkeby.infura.io/ws',
  privateKey:
    process.env.PRIVATE_KEY ||
    'd750a72ca804653f68f1e147ff6c06041e0828ce41a9dc4f5683e3c54362ef4e',
  address: process.env.ADDRESS || '0xea8a7b6c03dfd9209f678a90e43b9bf040f21c1f',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000
}

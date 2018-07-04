module.exports = {
  name: 'fuel-node-example',
  version: '1.0.0',
  node_uri: process.env.NODE_URI || 'wss://rinkeby.infura.io/ws',
  privateKey:
    process.env.PRIVATE_KEY ||
    '03a690c3b1aa83c81d1ee9f421a480856e64997a46866a4ca8c0d4da791dc2f4',
  address: process.env.ADDRESS || '7eA59207d90d6fc10A4EfF5A48D6Ec89Ce455658',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000
}

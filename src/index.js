const Web3 = require('web3')
const FuelProvider = require('fuel-web3-provider')
const targetContractAbi = require('./services/targetContract')
const config = require('../config')

const fuelProvider = new FuelProvider(config.privateKey)
const web3 = new Web3(fuelProvider.start())
const targetContract = new web3.eth.Contract(
  targetContractAbi,
  '0xaaf1bbc703a6f9ebe8f8c171f4dc0d60c8b4b1b8'
)
console.log('Fuel test server send a transaction')
targetContract.methods
  .register('0x' + config.address, 1)
  .send({
    from: '0x' + config.address
  })
  .on('error', (error) => {
    console.log(error)
  })
  .on('transactionHash', (transactionHash) => {
    console.log('This the transactionHash', transactionHash)
  })

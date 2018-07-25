const Web3 = require("web3")
const FuelProvider = require("fuel-web3-provider")
const TargetContract = require("./targetContract.json")
const config = require("../config")

const fuelProvider = new FuelProvider({ privateKey: config.privateKey })
const web3 = new Web3(fuelProvider.start())

const targetContract = new web3.eth.Contract(
  TargetContract.abi,
  "0xaaf1bbc703a6f9ebe8f8c171f4dc0d60c8b4b1b8"
)

targetContract.methods
  .register(config.address, 1)
  .send({
    from: config.address
  })
  .on("error", (error) => {
    console.log(error)
  })
  .on("transactionHash", (transactionHash) => {
    console.log("This the transactionHash", transactionHash)
  })

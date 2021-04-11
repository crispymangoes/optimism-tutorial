// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const initialSupply = 1000000
  const name = 'My Optimistic Token'
  /*
  await deploy('ERC20', {
    from: deployer,
    args: [initialSupply, name],
    gasPrice: hre.ethers.BigNumber.from('0'),
    gasLimit: 8999999,
    log: true
  })
}
*/

/************************************Deploy Ethereum Contracts************************************/
/*
const L1Messenger = await deploy('OVM_L1CrossDomainMessenger', {
  from: deployer,
  gasPrice: hre.ethers.BigNumber.from('0'),
  gasLimit: 8999999,
  log: true
})

await deploy('L1AssetManager', {
  from: deployer,
  args: [L1Messenger.address],
  gasPrice: hre.ethers.BigNumber.from('0'),
  gasLimit: 8999999,
  log: true
})
*/


/************************************Deploy Optimism Contracts************************************/

const resolver = await deploy('Lib_AddressResolver', {
  from: deployer,
  //args: [addressManager],
  gasPrice: hre.ethers.BigNumber.from('0'),
  gasLimit: 8999999,
  log: true
})

const L2Messenger = await deploy('OVM_L2CrossDomainMessenger', {
  from: deployer,
  args: [resolver.address],
  gasPrice: hre.ethers.BigNumber.from('0'),
  gasLimit: 8999999,
  log: true
})

await deploy('L2LedgerManager', {
  from: deployer,
  args: [L2Messenger.address],
  gasPrice: hre.ethers.BigNumber.from('0'),
  gasLimit: 8999999,
  log: true
})

}
func.tags = ['ERC20']
module.exports = func

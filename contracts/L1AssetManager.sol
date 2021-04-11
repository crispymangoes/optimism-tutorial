// SPDX-License-Identifier: MIT
pragma solidity >0.6.0 <0.8.0;

import { iOVM_L1CrossDomainMessenger } from "@eth-optimism/contracts/build/contracts/iOVM/bridge/messaging/iOVM_L1CrossDomainMessenger.sol";

contract L1AssetManager {
    iOVM_L1CrossDomainMessenger private messenger;

    constructor(address _L1_MESSENGER_ADDRESS) {
        messenger = iOVM_L1CrossDomainMessenger(_L1_MESSENGER_ADDRESS);
    }
    
    //function sendMessage()
}
// SPDX-License-Identifier: MIT
pragma solidity >0.6.0 <0.8.0;

import { iOVM_L2CrossDomainMessenger } from "@eth-optimism/contracts/build/contracts/iOVM/bridge/messaging/iOVM_L2CrossDomainMessenger.sol";

contract L2LedgerManager {
    iOVM_L2CrossDomainMessenger private messenger;
    constructor(address _L2_MESSENGER_ADDRESS) {
        messenger = iOVM_L2CrossDomainMessenger(_L2_MESSENGER_ADDRESS);
    }
    //function sendMessage
}
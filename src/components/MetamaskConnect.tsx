import Button from "@mui/material/Button";
import React from "react";
import {useEtherBalance, useEthers} from "@usedapp/core";
import {formatEther} from '@ethersproject/units'

export const MetamaskConnect = () => {
    const {account, deactivate, activateBrowserWallet} = useEthers();
    const isConnected = account !== undefined;
    const etherBalance = useEtherBalance(account)

    return (
        <div>
            {isConnected ?
                <div>
                    <p>✔️</p>
                    <Button variant="outlined" onClick={() => deactivate()}> Deconnect from Metamask </Button>
                </div>
                : <Button onClick={() => {
                    console.log('activating browser wallet', account)
                    activateBrowserWallet()
                }} variant="outlined"> Connect to Metamask</Button>
            }
            <br/><br/>

            <hr/>

            {account && etherBalance ?
                <div>
                    <h1 style={{color: 'white'}}>Account Balance: <span style={{color: '#55eca5'}}>{formatEther(etherBalance)} ETH</span></h1>
                </div>
                : null
            }
        </div>
    )
}

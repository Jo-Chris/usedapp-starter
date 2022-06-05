import React from 'react'
import ReactDOM from 'react-dom'
import {formatEther} from '@ethersproject/units'
import {Mainnet, DAppProvider, useEtherBalance, useEthers, Config} from '@usedapp/core'
import {getDefaultProvider} from 'ethers'
import {MetamaskConnect} from "./components/MetamaskConnect";

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
}

function App() {
    return (
        <DAppProvider config={config}>
            <div className="centered">
                <MetamaskConnect/>
            </div>
        </DAppProvider>
    );
}

export default App;

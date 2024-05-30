
import { init } from '@subwallet-connect/react';
import walletConnectPolkadotModule from '@subwallet-connect/walletconnect-polkadot';
import ledgerPolkadot from "@subwallet-connect/ledger-polkadot";
import metamaskSDK from '@subwallet-connect/metamask';
import talismanModule from '@subwallet-connect/talisman';
import polkadot_jsModule from '@subwallet-connect/polkadot-js';
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot';
import polkadotVaultModule from '@subwallet-connect/polkadot-vault';
import walletConnectModule from '@subwallet-connect/walletconnect';
import OpenBitModule from '@subwallet-connect/openbit';
import {TransactionHandlerReturn} from "@subwallet-connect/core/dist/types";


// Example key • Replace with your infura key
const INFURA_KEY = '302750fdd8644da3b50aa6daa0b89336'


const ledgerPolkadot_ = ledgerPolkadot();




const walletConnectPolkadot = walletConnectPolkadotModule({
  projectId: '59b5826141a56b204e9e0a3f7e46641d',
  dappUrl: 'https://w3o-demo.subwallet.app/'
})
const metamaskSDKWallet = metamaskSDK({
  options: {
    extensionOnly: false,
    i18nOptions: {
      enabled: true
    },
    infuraAPIKey : INFURA_KEY,
    dappMetadata: {
      name: 'SubConnect'
    }
  }
})
const polkadotWallet = polkadot_jsModule();
const subwalletPolkadotWalet = subwalletPolkadotModule();
const talismanWallet = talismanModule();
const polkadotVaultWallet = polkadotVaultModule();
const openBitWallet = OpenBitModule();
const walletConnect = walletConnectModule({
  projectId: '59b5826141a56b204e9e0a3f7e46641d',
  dappUrl: 'https://w3o-demo.subwallet.app/'
})
const subwalletWCIds = '9ce87712b99b3eb57396cc8621db8900ac983c712236f48fb70ad28760be3f6a';
const coinbaseWCIds = 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa';
const metamaskWCIds = 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'

export default init({
  theme: "dark",
  connect : {
    autoConnectLastWallet : true,
    autoConnectAllPreviousWallet : true
  },

  wcConfigOption: {
    projectId: '59b5826141a56b204e9e0a3f7e46641d',
    explorerRecommendedWalletIds: [subwalletWCIds, coinbaseWCIds, metamaskWCIds]
  },

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    subwalletPolkadotWalet,
    walletConnectPolkadot,
    walletConnect,
    metamaskSDKWallet,
    ledgerPolkadot_,
    talismanWallet,
    polkadotWallet,
    openBitWallet,
    polkadotVaultWallet
  ],
  // An array of Chains that your app supports
  chains: [
    {
      id: '0x507',
      rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
      label: 'Moonbase Alpha',
      token:  'DEV',
      namespace : 'evm',
      decimal: 18
    },
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: '0x1',
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: 'evm',
      // the native token symbol, eg ETH, BNB, MATIC
      token: 'ETH',
      // used for display, eg Ethereum Mainnet
      label: 'Ethereum',
      // used for network requests
      rpcUrl: `https://ethereum.publicnode.com`,
      decimal: 18
    },
    {
      id: '0x504',
      rpcUrl: 'https://rpc.api.moonbeam.network',
      label: 'Moonbeam',
      token: 'GLMR',
      namespace : 'evm',
      decimal: 18
    },
    {
      id: '0x505',
      rpcUrl: 'https://rpc.api.moonriver.moonbeam.network',
      label: 'Moonriver',
      namespace: 'evm',
      token : 'MOVR',
      decimal: 18
    },
    {
      id: '0x250',
      rpcUrl: 'https://astar.api.onfinality.io/public',
      label: 'Astar - EVM',
      namespace : 'evm',
      token:  'ASTR',
      decimal: 18
    },
    {
      id: '0x150', // 336
      rpcUrl: 'https://shiden.public.blastapi.io',
      label: 'Shiden',
      token: 'SDN',
      namespace : 'evm',
      decimal: 18
    }
  ],


  chainsPolkadot:[
    {
      id: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e' ,
      token: 'WND',
      decimal : 12,
      label: 'Westend',
      blockExplorerUrl: 'westend.subscan.io',
      namespace: 'substrate'
    },
    {
      id: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
      namespace: 'substrate',
      token: 'DOT',
      label: 'Polkadot',
      blockExplorerUrl: `polkadot.api.subscan.io`,
      decimal: 10
    },
    {
      id: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
      label: 'Polkadot Asset Hub',
      namespace: 'substrate',
      decimal: 10,
      token: 'DOT',
      blockExplorerUrl: 'assethub-polkadot.subscan.io',
    },

    {
      id: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
      label: 'Kusama',
      decimal: 12,
      namespace: 'substrate',
      token: 'KSM',
      blockExplorerUrl: 'kusama.api.subscan.io'
    },

    {
      id: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
      label: 'Kusama Asset Hub',
      decimal: 12,
      namespace: 'substrate',
      token: 'KSM',
      blockExplorerUrl: 'assethub-kusama.subscan.io'
    }
  ],

  appMetadata: {
    // The name of your dApp
    name: 'SubConnect',


    description: 'Demo app for SubWalletConnect V2',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // url that points to more information about app
    explore: 'http://mydapp.io/about',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: 'MetaMask',
        // link to download wallet
        url: 'https://metamask.io'
      },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://docs.subwallet.app/main/privacy-and-security/terms-of-use',
    }
  },
  notify: {
    desktop: {
      enabled: true,
      transactionHandler: (transaction) :TransactionHandlerReturn => {
        if (transaction.eventCode === 'txConfirmed') {
          return {
            autoDismiss: 0
          }
        }
        // if (transaction.eventCode === 'txPool') {
        //   return {
        //     type: 'hint',
        //     message: 'Your in the pool, hope you brought a towel!',
        //     autoDismiss: 0,
        //     link: `https://goerli.etherscan.io/tx/${transaction.hash}`
        //   }
        // }
      },
      position: 'topCenter'
    }
  }
})

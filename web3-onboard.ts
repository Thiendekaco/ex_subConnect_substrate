
import { init } from '@subwallet-connect/react'
import walletConnectPolkadotModule from '@subwallet-connect/walletconnect-polkadot';
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot';
import polkadotVaultModule from '@subwallet-connect/polkadot-vault';
import talismanModule from '@subwallet-connect/talisman';
import polkadot_jsModule from '@subwallet-connect/polkadot-js';
import ledgerPolkadot from "@subwallet-connect/ledger-polkadot";


const walletConnectPolkadot = walletConnectPolkadotModule({
  projectId: 'd4a987cb0d1a746dbffd38890458e65c',
})
const subwalletPolkadotWalet = subwalletPolkadotModule();
const polkadotVaultWallet = polkadotVaultModule();
const talismanWallet = talismanModule();
const polkadotWallet = polkadot_jsModule();
const ledgerPolkadot_ = ledgerPolkadot();

export default init({
  theme: "dark",
  connect : {
    autoConnectLastWallet : true,
    autoConnectAllPreviousWallet : true
  },
  accountCenter: {
    desktop : {
      enabled: true,
      minimal : true
    },
    mobile: {
      enabled: true
    }
  },
  projectId : 'd4a987cb0d1a746dbffd38890458e65c',


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

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    walletConnectPolkadot,
    subwalletPolkadotWalet,
    polkadotVaultWallet,
    ledgerPolkadot_,
    talismanWallet,
    polkadotWallet,
  ],
  // An array of Chains that your app supports
  chains: [],
  appMetadata: {
    // The name of your dApp
    name: 'SubWallet Connect',

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
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    }
  }
})

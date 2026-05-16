import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { defineChain} from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://dashboard.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID || "b0f795960959cde8d76422ce52747df7" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
    name: 'Test-Dapp',
    description: 'This is a dapp for SAFE chain',
    url: 'https://test-dapp.anwang.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }


const safe = defineChain({
  id: 6666665,
  caipNetworkId: 'eip155:6666665',
  chainNamspace: 'eip155',
  name: 'Safe(AnWang) Mainnet',
  nativeCurrency: { name: 'SAFE(AnWang)', symbol: 'SAFE', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://safe4.anwang.com/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Safe(AnWang) Explorer',
      url: 'https://safe4.anwang.com',
    },
  },
})

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [safe] as [AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig
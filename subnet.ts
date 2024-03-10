
import { type Chain } from 'viem'
 
export const connorSubnet = {
  id: 112266,
  name: 'connorSubnet',
  nativeCurrency: { name: '112266', symbol: '112266', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:9650/ext/bc/2Dz8pzrg75KqBXX6bejYACkD2N7SnZHjXCK53YB6YDDanRLRFD/rpc'] },
  },
} as const satisfies Chain
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import styles from "../styles/body.module.css"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { connorSubnet } from "../subnet"

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '0016bc074264a75bba3016948fe4eb2c',
  chains: [connorSubnet],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  console.log({mainnet})
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;

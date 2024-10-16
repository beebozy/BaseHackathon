import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
  liskSepolia,
  lisk,
  baseSepolia,

} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
 
    sepolia,
    lisk,
    liskSepolia,
    baseSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

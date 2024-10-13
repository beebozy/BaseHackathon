// /** @type {import('next').NextConfig} */
import { http, createConfig } from 'wagmi'
import { sepolia, lisk, liskSepolia, baseSepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [ sepolia, lisk, liskSepolia, baseSepolia],
    transports: {
        [sepolia.id]: http(),
        [liskSepolia.id]: http(),
        [lisk.id]: http(),
    
        [baseSepolia.id]: http(),
    },
});

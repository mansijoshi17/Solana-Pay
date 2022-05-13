import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const MAX_CONFIRMATIONS = 32;

export const NON_BREAKING_SPACE = '\u00a0';

// GenesysGo's devnet endpoint doesn't retain historical transactions

// solana config set --url https://api.devnet.solana.com
export const DEVNET_ENDPOINT = 'https://api.devnet.solana.com ';

// solana config set --url https://api.testnet.solana.com
export const TESTNET_ENDPOINT = 'https://api.testnet.solana.com';

// Use Phantom's mainnet endpoint instead of GenesysGo (auth issue) or default (ratelimits)
export const MAINNET_ENDPOINT = 'https://solana-mainnet.phantom.tech';

// Mint DUMMY tokens on devnet @ https://spl-token-faucet.com
export const DEVNET_DUMMY_MINT = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');

export const MAINNET_USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

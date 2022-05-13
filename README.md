# Point of Sale

This is an example of how you can use the `@solana/pay` JavaScript library to create a simple point of sale system.

You can [check out the app](https://app.solanapay.com?recipient=GvHeR432g7MjN9uKyX3Dzg66TqwrEWgANLnnFZXMeyyj&label=Solana+Pay), use the code as a reference, or run it yourself to start accepting decentralized payments in-person.

## Prerequisites

To build and run this app locally, you'll need:

-   Node.js v14.17.0 or above
-   Yarn
-   <details>
        <summary> Setup two wallets on <a href="https://phantom.app">Phantom</a> (Merchant and Customer) </summary>

    #### 1. Create merchant wallet

    Follow the [guide][1] on how to create a wallet. This wallet will provide the recipient address.

    #### 2. Create customer wallet

    Follow the [guide][1] on how to create another wallet. This wallet will be paying for the goods/services.

    #### 3. Set Phantom to connect to devnet

    1. Click the settings icon in the Phantom window
    2. Select the "Change network" option and select "Devnet"

    #### 4. Airdrop SOL to customer wallet

    Use [solfaucet][3] to airdrop SOL to the customer wallet.

    > You'll need SOL in the customer wallet to pay for the goods/services + transaction fees

 </details>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Clone the repository

#### With Git

```shell
git clone https://github.com/solana-labs/solana-pay.git
```

#### With Github CLI

```shell
gh repo clone solana-labs/solana-pay
```

### Install dependencies

```shell
cd solana-pay/point-of-sale
yarn install
```

### Start the local dev server

```shell
yarn dev
```

### In a separate terminal, run a local SSL proxy

```shell
yarn proxy
```

### Open the point of sale app

```shell
open "https://localhost:3001?recipient=Your+Merchant+Address&label=Your+Store+Name"
```

<!-- Links -->

[1]: https://help.phantom.app/hc/en-us/articles/4406388623251-How-to-create-a-new-wallet
[3]: https://solfaucet.com/

<a href="https://www.buymeacoffee.com/maxwellfortney" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


# next-candy-machine

![image](https://user-images.githubusercontent.com/29241388/136246410-7deb9afd-4809-4b75-848f-d9a99b7d1ff7.png)
![image](https://user-images.githubusercontent.com/29241388/136248758-2b06398f-1774-486d-a685-3fb6c1ebb11c.png)

The Candy-Machine-Mint project is designed to let users fork, customize, and deploy their own candy machine mint app to a custom domain, ultra fast.

This Candy Machine takes heavily from [Exiled Apes](https://github.com/exiled-apes/candy-machine-mint) and [kevinfaveri](https://github.com/kevinfaveri/solana-candy-factory), and would not be possible without them, but attempts to simplify and provide an easy-to-follow and complete guide.

This guide will not cover topics such as XXX.

**I recommend using Linux to make this process as easy as possible.**

## Getting Set Up

### Prerequisites

- Ensure you have recent versions of both `node` and `yarn` installed.

- Follow the instructions [here](https://docs.solana.com/cli/install-solana-cli-tools) to install the Solana Command Line Toolkit.

- Follow the instructions [here](https://hackmd.io/@levicook/HJcDneEWF) to install the Metaplex Command Line Utility.
  - Installing the Command Line Package is currently an advanced task that will be simplified eventually.

### Installation

1. Clone the project

```
git clone https://github.com/maxwellfortney/next-candy-machine
```

2. Install yarn dependencies

```
cd next-candy-machine
yarn install
```

3. rename the `.env.template` file at the root directory to `.env.local`.

### Initialize treasury SOL keypair

1. Set URL to devnet

```
solana config set --url https://api.devnet.solana.com
```

2. Generate a new keypair

```
solana-keygen new --outfile ~/.config/solana/devnet.json
```

2. Set the keypair in your Solana config

```
solana config set --keypair ~/.config/solana/devnet.json
```


#### This will output our 1st required environment variable into the terminal as `pubkey`, and will be our treasury SOL address. Set `NEXT_PUBLIC_TREASURY_ADDRESS` in our `.env.local` to this address.

3. Airdrop SOL to wallet (repeat command if desired)

```
solana airdrop 1
```

### Create, upload, and verify images and metadata

This guide will not cover creating images and metadata. For more info see [Token Metadata Standard](https://docs.metaplex.com/nft-standard) as well as [Prepare NFT Assets](https://docs.metaplex.com/create-candy/prepare-assets).

The following commands assume your images and metadata are located at the home directory under nft-assets `~/nft-assets/`.

1. Upload assets

```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ~/nft-assets --env devnet --keypair ~/.config/solana/devnet.json
```

#### This will output our 2nd required environment variable into the terminal as `initialized config for a candy machine with publickey`, and will be a SOL address. Set `NEXT_PUBLIC_CANDY_MACHINE_CONFIG` in our `.env.local` to this address.

#### If `initialized config for a candy machine with publickey` if not output into the terminal, delete the file located at `./cache/devnet-temp.json` and re-run the command in step 1 above.

2. (Optional, but recommended) Verify your assets. If all is well, this command will finish with output `ready to deploy!`

```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts verify -k ~/.config/solana/devnet.json
```

### Create a candy machine

1. Run the following command to create a candy machine

```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine -k ~/.config/solana/devnet.json
```

#### This will output our 3rd required environment variable into the terminal as `candy machine pubkey`, and will be a SOL address. Set `NEXT_PUBLIC_CANDY_MACHINE_ID` in our `.env.local` to this address.

### Update our new candy machine

We need to set a price in SOL, as well as a mint start date for our candy machine.

1. This command will set the price to 1 SOL, and the mint start date to the current time in epoch time.

```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine -k ~/.config/solana/devnet.json -p 1 -d now
```

#### This will output our 4th required environment variable into the terminal as `updated startDate timestamp`, and will be a epoch time. Set `NEXT_PUBLIC_CANDY_START_DATE` in our `.env.local` to this time.

### We are done!!

You can now start the NextJs app by running `yarn dev` and navigating to `http://localhost:3000/`, connect your desired wallet and begin minting your devnet new NFTs.



# Deployment to Vercel and migration to mainnet-beta
## Changing your `.env.local` variables
1. Change `NEXT_PUBLIC_SOLANA_NETWORK` to `mainnet-beta`
2. Change `NEXT_PUBLIC_SOLANA_RPC_HOST` to `https://api.mainnet-beta.solana.com` your preffered [RPC URL](https://docs.solana.com/cluster/rpc-endpoints) such as [QuickNode](https://www.quicknode.com/)

## Deploying to Vercel
1. Connect your Github account to Vercel
2. Create a new project from your repo
3. Before clicking `Deploy`, add all of your environment variables
4. Click `Deploy`

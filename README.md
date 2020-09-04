# Shopify App Node

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Build Status](https://travis-ci.com/Shopify/shopify-app-node.svg?branch=master)](https://travis-ci.com/Shopify/shopify-app-node)

Shopify app connector for the Humine Video app. Allows syncing of products and videos to and from an S3 bucket.

## Installation

Follow the [instructions](https://shopify.github.io/shopify-app-cli/getting-started/install/) to install the Shopify App CLI.

Install [Node.js](https://nodejs.org/en/) which also includes NPM.

Clone this repository and within the local repository, run:

```sh
~/ $ npm install
```

## Usage

To run a local development server, run:

```sh
~/ $ shopify serve
```

and run:

```sh
~/ $ shopify open
```

in another terminal tab.

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## References

[Shopify Partner Dashboard](https://partners.shopify.com/current/resources)

[Shopify-App-CLI](https://github.com/Shopify/shopify-app-cli)

[Polaris](https://github.com/Shopify/polaris-react)

[App Bridge React](https://github.com/Shopify/app-bridge/tree/master/packages/app-bridge-react)

## License

This respository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

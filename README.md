## About

This the reference implementation of the [fuel-web3-provider](https://github.com/ahmb84/fuel-web3-provider)

## Dependencies

It requires a running instance of [fuel-server](https://github.com/ahmb84/fuel-server) service to run.

## Config

There's a config file on `./config` that can be configured for your own needs with the following params:

- `privateKey`: The private key only known by the user. Keep it safe
- `address`: Address of the private key
- `port`: Port where the API will be served

## Install

To install it, just run:

```javascript
  npm install
```

## Run

You can run it via npm

```javascript
   npm start
```

## Dev

You can run it in watch mode.

```javascript
    npm run watch
```

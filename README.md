## About

-- Step 1 => Send signed tx
-- Step 2 => Fund the account
-- Step 3 => Send the tx on infura

Gives access to auth-based web services by recovering an Ethereum signature, checking the role on an Ethereum Registry, and giving as a result a JWT. More in detail, the following processes are done:

1.  An Ethereum signature is received into this service through `/signin` via `POST` request
2.  Signer account is recovered from the services
3.  Recovered account is sent to [ethEventsListener](https://github.com/Frontier-project/ethEventsListner) endpoint, which tracks all whitelist events on different roles
4.  Role is received from [ethEventsListener](https://github.com/Frontier-project/ethEventsListner)
5.  Role is encoded in a `JWT` and sent as a `POST` response.

## Dependencies

It requires a running instance of [ethEventsListener](https://github.com/Frontier-project/ethEventsListner) service to run, and a running `MongoDB` Database.

## Config

There's a config file on `./config` that can be configured for your own needs with the following params:

* `secret`: The secret only known by the token provider. Keep it safe
* `events_uri`: URI pointing to your ethEvents deployed service
* `port`: Port where the API will be served
* `db.uri`: URI pointing to a mongoDB intermediate database

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

If you want to run it along with the rest of services, there's a `docker-composer` created for this purpose [here](https://github.com/Frontier-project/InternalScripts)

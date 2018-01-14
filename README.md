# Debiaser Service

**Note: This is very basic and potentially unstable.  You probably don't want to actually use it for anything other than perhaps a reference for deploying simple ZEIT services.**

This is the API for [a protoype](https://codepen.io/jeremyckahn/pen/JMbbmw) of [an app I want to build](https://twitter.com/jeremyckahn/status/950515535183335432) called Debiaser.

## Developing

1. Clone out this repo, `cd` into it
2. Create a https://zeit.co/ account and configure your local dev environment to use it
3. Put a [News API](https://newsapi.org/) key in `news-api-key.txt` with no newlines

## Running locally

```
npm run start:local
```

## Deploying

```
npm run deploy
```

You can also update https://debiaser-service.now.sh with `now alias`, like so:

```
now alias set debiaser-service-[DEPLOYMENT_ID].now.sh debiaser-service.now.sh
```

## Tail logs

After deploying, run:

```
npm run view:logs
```

## License

MIT.

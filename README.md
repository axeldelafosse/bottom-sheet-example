# Bottom Sheet Example

This example features a bug with React Native Bottom Sheet when used inside a React Native Modal on Android and Web.
It's working correctly on iOS.

## App

> Code shared between iOS, Android and Web

`cd packages/app`

## Expo

> Native

Expo entrypoint: `packages/expo/App.tsx`

`cd packages/expo`

`yarn start:expo` to start iOS and Android app with Expo

Try it here: https://expo.dev/@poolpoolpool/bottomsheet?release-channel=production

## Next.js

> Web

Next.js entrypoint: `packages/next/src/pages/_app.tsx`

`cd packages/next`

`yarn dev` to start web app

Try it here: https://bottom-sheet-example.vercel.app

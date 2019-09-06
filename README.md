## React Native Spotify

> React Native app demo using Spotify API

[![CircleCI](https://circleci.com/gh/audiolion/react-native-spotify.svg?style=svg&circle-token=445a785dc31261c902b2c03bb95bf6ce9339dfee)](https://circleci.com/gh/audiolion/react-native-spotify)
[![codecov](https://codecov.io/gh/audiolion/react-native-spotify/branch/master/graph/badge.svg?token=bWDPDDZnHG)](https://codecov.io/gh/audiolion/react-native-spotify)

![RN Spotify Login](https://i.imgur.com/0dSQMl1m.png)
![RN Spotify Deep Link](https://i.imgur.com/TWCy0lFm.png)
![RN Spotify Album List](https://i.imgur.com/jw37Ks6m.png)
![RN Spotify Album Notes](https://i.imgur.com/YfkGScGm.png)

### Highlights

##### Github Flow and git process
I care a lot about commit history and keeping things clean and concise as possible. Even in PRs I logically group commits and will rebase if I feel things get too messy. I utilize commit history often to understand the motivations behind why older code was written.

#####  Testing & CI
Early on in the project I integrated Circle CI with code coverage reporting. Testing and linting my PRs caught numerous bugs before things landed into the main trunk branch. I utilized Callstack's react-native-testing-library to write integration and snapshot tests for the parts of the app. While I didn't get to one of the screens for tests I think I showed how I go about building confidence with these types of tests. I also would see the value in detox, though I felt it was too much for this assignment.

##### Apollo / GraphQL
Apollo and GraphQL can be found in [3937660f](3937660fb55bda6a9b328e8a3a1455988c1b4c99). This code was removed because the public api for Spotify did not allow a client-side only authentication token. I showcased utilizing graphql codegen to create typescript typings for queries, proper fragment usage to leverage the power of apollo's cache, and how a modified Query component can save boilerplate in showing loading states and handling errors.

##### Hooks
I wrote the app entirely with functional components and hooks, utilizing some hooks from my own personal library [@ryanar/hooks](https://www.npmjs.com/package/@ryanar/hooks). That being said, I am entirely willing to write Class components for older apps and willing to work with the team to stick with a style that works best for everyone. I wrote Class components for a long time before hooks came to be!

##### TypeScript
The whole app is written in TypeScript, the benefits at this point are spoken enough about. I do want to point out my [declarations](https://github.com/audiolion/react-native-spotify/blob/43062dd3d2b8e8f714f234488a6948e95fd3f979/src/typings/index.d.ts) file which is a handy way to provide ambient, namespaced types across an app so you don't clutter up imports.

### Setup

1. Ensure your node version matches the `.node-version` file, I recommend [nodenv](https://github.com/nodenv/nodenv)
2. Install JS dependencies by running `yarn` [yarn](https://yarnpkg.com/lang/en/docs/install)
3. Install iOS dependencies `cd ios/ && pod install` [cocoapods]()
3. In terminal run metro bundler with `yarn start`
4. In another terminal window start the iOS simulator with `yarn dev`

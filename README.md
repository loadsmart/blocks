# :european_castle: Blocks
Loadsmart's React Native Components

[![Build Status](https://circleci.com/gh/loadsmart/blocks.svg?style=shield)](https://circleci.com/gh/loadsmart/blocks/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/loadsmart/blocks/badge.svg?branch=master)](https://coveralls.io/github/loadsmart/blocks?branch=master)
[![npm (scoped)](https://img.shields.io/npm/v/@loadsmart/blocks.svg)](https://www.npmjs.com/package/@loadsmart/blocks)

## Installation

```
$ yarn add @loadsmart/blocks
$ react-native link @loadsmart/blocks
```

## Usage

### Basic

```tsx
import { Text, View } from 'react-native'
import { PrimaryButton } from '@loadsmart/blocks'

const MyComponent = () => (
  <View>
    <Text>Are you sure?</Text>
    <PrimaryButton title='Confirm' />
  </View>
)
```

### Theming

```tsx
import { Text, View } from 'react-native'
import { PrimaryButton, Theme, ThemeContext } from '@loadsmart/blocks'

const customTheme: Theme = {
  primaryColor: '#18515E'
}

const MyComponent = () => (
  <ThemeContext.Provider value={customTheme}>
    <View>
      <Text>Are you sure?</Text>
      <PrimaryButton title='Confirm' />
    </View>
  </ThemeContext.Provider>
)
```

## Testing

```
yarn test
```

## Storybook

If you want to take a look and play with the components in this repo, we have a [showcase app](https://github.com/loadsmart/blocks-storybook-app) made with React Native.

## License

[MIT](./LICENSE)

## Contributing

### RFCs

If you want to submit a "Request for comments" proposal, branch out from `master` (i.e.: `rfc/my-feature`) copy `0000-template.md` to `rfc/0000-my-feature.md` (where 'my-feature' is descriptive. don't assign an RFC number yet), fill in the RFC and submit a PR.

If your RFC gets approved, you can then merge the PR to `master`.

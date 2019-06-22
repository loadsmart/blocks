import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { EmailSignInScreen } from '@loadsmart/blocks'

storiesOf('Screens', module).add('Sign In via email', () => {
  return <EmailSignInScreen />
})

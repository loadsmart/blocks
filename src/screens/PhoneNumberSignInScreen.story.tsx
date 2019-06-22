import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PhoneNumberSignInScreen } from '@loadsmart/blocks'

storiesOf('Screens', module).add('Sign In via phone number', () => {
  return <PhoneNumberSignInScreen />
})

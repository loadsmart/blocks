import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { EmailSignInScreen } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Screens', module).add('Sign In via email', () => {
  const onPressSignIn = (email: string, password: string) => {
    Alert.alert(`email: ${email}\n pass: ${password}`)
  }
  const onPressForgotPassword = () => {
    Alert.alert('onPressForgotPassword')
  }

  const props = { onPressSignIn, onPressForgotPassword }

  return <EmailSignInScreen {...props} />
})

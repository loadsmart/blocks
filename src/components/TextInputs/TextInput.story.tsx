import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { CenterPaddedDecorator } from '../../decorators'
import { TextInput } from '@loadsmart/blocks'

storiesOf('Text Inputs', module)
  .addDecorator(CenterPaddedDecorator)
  .add('Default', () => {
    return <TextInput>Loadsmart Inc.</TextInput>
  })
  .add('Email', () => {
    return <TextInput keyboardType={'email-address'}>mobile@loadsmart.com</TextInput>
  })
  .add('Password', () => {
    return <TextInput secureTextEntry={true}>s3cr3tp4ss</TextInput>
  })

import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { CenterPaddedDecorator } from '../../decorators'
import { ButtonDisplayState, SecondaryButton, ButtonHeight } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Secondary', () => {
    const title = text('Title', 'Add Driver')

    const buttonHeight = select(
      'Height',
      {
        Normal: ButtonHeight.Regular,
        Short: ButtonHeight.Regular,
      },
      ButtonHeight.Regular
    )

    const displayState = select(
      'State',
      {
        Enabled: ButtonDisplayState.Normal,
        Loading: ButtonDisplayState.Loading,
        Disabled: ButtonDisplayState.Disabled,
      },
      ButtonDisplayState.Normal
    )

    const onPress = () => Alert.alert('onPress')

    const props = { title, displayState, buttonHeight, onPress }
    return <SecondaryButton {...props} />
  })

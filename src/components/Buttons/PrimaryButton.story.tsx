import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs'
import { CenterPaddedDecorator } from '../../decorators'
import { PrimaryButton, ButtonDisplayState, Images } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Primary', () => {
    const title = text('Title', 'Accept Offer')

    const hasIcon = boolean('Icon?', false)
    const icon = hasIcon ? Images.Warning : undefined

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

    const props = { icon, title, displayState, onPress }
    return <PrimaryButton {...props} />
  })

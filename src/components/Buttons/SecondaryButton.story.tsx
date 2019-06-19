import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { CenterPaddedDecorator } from '../../decorators'
import { ButtonDisplayState, SecondaryButton, ButtonHeight, Images } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Secondary', () => {
    const title = text('Title', 'Add Driver')

    const hasIcon = boolean('Icon?', false)
    const icon = hasIcon ? Images.PlusSign : undefined

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

    const props = { icon, title, displayState, buttonHeight, onPress }
    return <SecondaryButton {...props} />
  })

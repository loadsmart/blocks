import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { CenterPaddedDecorator } from '../../decorators'
import { TertiaryButton, TertiaryButtonDisplayStyle } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Tertiary', () => {
    const title = text('Title', 'Skip for now')

    const displayStyle = select(
      'Style',
      {
        Dark: TertiaryButtonDisplayStyle.Dark,
        Light: TertiaryButtonDisplayStyle.Light,
      },
      TertiaryButtonDisplayStyle.Dark
    )

    const onPress = () => Alert.alert('onPress')

    const props = { title, displayStyle, onPress }
    return <TertiaryButton {...props} />
  })

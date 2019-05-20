import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text, withKnobs, select } from '@storybook/addon-knobs'
import { StretchDecorator } from '../../decorators'
import { AlertBanner, BannerDisplayStyle } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Banners', module)
  .addDecorator(withKnobs)
  .addDecorator(StretchDecorator)
  .add('Alert', () => {
    const message = text('Message', 'No internet connection')
    const displayStyle = select(
      'Style',
      {
        Warning: BannerDisplayStyle.Warning,
        Error: BannerDisplayStyle.Error,
      },
      BannerDisplayStyle.Warning
    )
    const onPress = () => Alert.alert('onPress')

    const props = { message, displayStyle, onPress }
    return <AlertBanner {...props} />
  })

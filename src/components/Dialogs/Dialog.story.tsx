import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Dialog, SecondaryButton, PrimaryButton } from '@loadsmart/blocks'
import { withKnobs, text } from '@storybook/addon-knobs'
import { View } from 'react-native'

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const title = text('Title', 'Are you ready to start driving to the port?')
    const buttons = (
      <>
        <PrimaryButton title={'Start'} />
        <View style={{ height: 12 }} />
        <SecondaryButton title={'Cancel'} />
      </>
    )

    const props = { title, buttons }

    return <Dialog {...props} />
  })

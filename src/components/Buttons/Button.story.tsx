import { text, withKnobs } from '@storybook/addon-knobs'
import { Button } from '@loadsmart/blocks'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { CenterPaddedDecorator } from '../../decorators'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Primary Button', () => {
    const title = text('Title', 'Accept')
    return <Button title={title} />
  })

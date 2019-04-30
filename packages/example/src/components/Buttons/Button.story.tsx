import { text, withKnobs } from '@storybook/addon-knobs'
import { Button } from '@loadsmart/blocks'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Regular Button', () => {
    const title = text('Title', 'Accept')
    return <Button title={title} />
  })

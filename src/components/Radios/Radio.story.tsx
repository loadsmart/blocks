import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { CenterDecorator } from '../../decorators'
import { Radio } from '@loadsmart/blocks'

storiesOf('Radios', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterDecorator)
  .add('Default', () => {
    const selected = boolean('Selected', false)
    const props = { selected }
    return <Radio {...props} />
  })

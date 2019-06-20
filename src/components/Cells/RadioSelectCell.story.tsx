import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { StretchDecorator } from '../../decorators'
import { RadioSelectCell } from '@loadsmart/blocks'

storiesOf('Cells', module)
  .addDecorator(withKnobs)
  .addDecorator(StretchDecorator)
  .add('Radio Select', () => {
    const title = text('Title', 'James McGill')
    const selected = boolean('Selected?', false)

    const props = { selected, title }
    return <RadioSelectCell {...props} />
  })

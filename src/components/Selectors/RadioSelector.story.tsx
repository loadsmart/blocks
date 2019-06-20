import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { StretchDecorator } from '../../decorators'
import { RadioSelector } from '@loadsmart/blocks'

storiesOf('Selectors', module)
  .addDecorator(withKnobs)
  .addDecorator(StretchDecorator)
  .add('Radio Selector', () => {
    const drivers = ['Walter White', 'Jesse Pinkman', 'Gus Fring', 'Mike Ehrmantraut']
    return <RadioSelector items={drivers} initialSelectionIndex={0} />
  })

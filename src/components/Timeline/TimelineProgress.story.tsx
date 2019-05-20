import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { TimelineProgress } from '@loadsmart/blocks'
import { CenterDecorator } from '../../decorators'

storiesOf('Timeline', module)
  .addDecorator(CenterDecorator)
  .add('Progress', () => {
    return <TimelineProgress />
  })

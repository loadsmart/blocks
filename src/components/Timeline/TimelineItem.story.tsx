import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { CenterDecorator } from '../../decorators'
import { TimelineItem, PrimaryButton } from '@loadsmart/blocks'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterDecorator)
  .add('Item', () => {
    const title = text('Title', 'Delivery Check In')
    const instructions = text('Instructions', 'Make sure you have signed all papers needed')
    const body = <PrimaryButton title={'Check In'} />
    const isActive = boolean('Active?', true)
    const isCompleted = boolean('Completed?', false)
    const isFirst = boolean('First?', false)
    const isLast = boolean('Last?', false)

    const props = { title, instructions, body, isActive, isCompleted, isFirst, isLast }
    return <TimelineItem {...props} />
  })

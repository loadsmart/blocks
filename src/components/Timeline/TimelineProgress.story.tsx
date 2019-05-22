import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { TimelineProgress } from '@loadsmart/blocks'
import { CenterDecorator } from '../../decorators'
import { boolean } from '@storybook/addon-knobs'
import { LineStyle } from '@loadsmart/blocks/src/components/Timeline/TimelineProgress'

storiesOf('Timeline', module)
  .addDecorator(CenterDecorator)
  .add('Progress', () => {
    const topFilled = boolean('Top Filled', true)
    const topPartStyle = topFilled ? LineStyle.Filled : LineStyle.Empty

    const topPartVisible = boolean('Top Visible', true)

    const markerFilled = boolean('Marker Filled', true)
    const markerStyle = markerFilled ? LineStyle.Filled : LineStyle.Empty

    const bottomFilled = boolean('Bottom Filled', false)
    const bottomPartStyle = bottomFilled ? LineStyle.Filled : LineStyle.Empty

    const bottomPartVisible = boolean('Bottom Visible', true)

    const props = {
      topPartStyle,
      topPartVisible,
      markerStyle,
      bottomPartStyle,
      bottomPartVisible,
    }

    return <TimelineProgress {...props} />
  })

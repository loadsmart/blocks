import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { StretchDecorator } from '../../decorators'
import { TitleValueCell, Images } from '@loadsmart/blocks'

storiesOf('Cells', module)
  .addDecorator(withKnobs)
  .addDecorator(StretchDecorator)
  .add('Title & Value', () => {
    const hasIcon = boolean('Icon?', false)
    const icon = hasIcon ? Images.Warning : undefined

    const title = text('Title', 'LS Shipment #')
    const value = text('Value', '94885284')
    const hasChevron = boolean('Chevron?', true)

    const props = { icon, title, value, hasChevron }
    return <TitleValueCell {...props} />
  })

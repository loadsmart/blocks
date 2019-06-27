import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import DialogBox from '../DialogBox'

describe('DialogBox', () => {
  it('renders content that is passed to it', () => {
    const HeyYall = () => <Text>HeyYall</Text>
    const testRenderer = renderer.create(
      <DialogBox>
        <HeyYall />
      </DialogBox>
    )

    const text = testRenderer.root.findByType(Text)
    expect(text.props.children).toBe('HeyYall')
  })
})

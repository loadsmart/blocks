import React from 'react'
import renderer from 'react-test-renderer'
import TertiaryButton, { TertiaryButtonDisplayStyle } from '../TertiaryButton'
import { Text, TouchableOpacity } from 'react-native'

describe('TertiaryButton', () => {
  it('renders title', () => {
    const testRenderer = renderer.create(<TertiaryButton title={'Skip'} />)

    const title = testRenderer.root.findByType(Text)
    expect(title.props.children).toBe('Skip')
  })

  it('executes onPress callback', () => {
    const onPress = jest.fn()
    const testRenderer = renderer.create(<TertiaryButton title={'Skip'} onPress={onPress} />)

    const touchable = testRenderer.root.findByType(TouchableOpacity)
    touchable.props.onPress()

    expect(onPress).toHaveBeenCalled()
  })

  it('renders for style dark', () => {
    const testRenderer = renderer.create(
      <TertiaryButton title={'Skip'} displayStyle={TertiaryButtonDisplayStyle.Dark} />
    )

    expect(testRenderer.toJSON).toMatchSnapshot()
  })

  it('renders for style light', () => {
    const testRenderer = renderer.create(
      <TertiaryButton title={'Skip'} displayStyle={TertiaryButtonDisplayStyle.Light} />
    )

    expect(testRenderer.toJSON).toMatchSnapshot()
  })
})

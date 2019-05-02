import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import renderer from 'react-test-renderer'
import BorderedButton, { BorderedButtonProps } from '../BorderedButton'
import { Images } from '../../../res/'

describe('BorderedButton', () => {
  let testRenderer: renderer.ReactTestRenderer
  const onPressCallback = jest.fn()

  it('executes onPress callback', () => {
    const props: BorderedButtonProps = {
      title: 'Call Loadsmart',
      onPress: onPressCallback,
    }
    testRenderer = renderer.create(<BorderedButton {...props} />)

    const touchable = testRenderer.root.findByType(TouchableOpacity)
    touchable.props.onPress()
    expect(onPressCallback).toHaveBeenCalledTimes(1)
  })

  describe('when icon is undefined', () => {
    beforeEach(() => {
      const props: BorderedButtonProps = {
        title: 'Call Loadsmart',
      }
      testRenderer = renderer.create(<BorderedButton {...props} />)
    })

    it('renders title but not icon', () => {
      expect(testRenderer.root.findAllByType(Text)).toHaveLength(1)
      expect(testRenderer.root.findAllByType(Image)).toHaveLength(0)
    })

    it('has a valid snapshot', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when icon is set', () => {
    beforeEach(() => {
      const props: BorderedButtonProps = {
        icon: Images.PlusSign,
        title: 'Call Loadsmart',
      }
      testRenderer = renderer.create(<BorderedButton {...props} />)
    })

    it('renders both icon and title', () => {
      expect(testRenderer.root.findAllByType(Text)).toHaveLength(1)
      expect(testRenderer.root.findAllByType(Image)).toHaveLength(1)
    })

    it('has a valid snapshot', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

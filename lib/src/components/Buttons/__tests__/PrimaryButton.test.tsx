import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, Image } from 'react-native'
import renderer from 'react-test-renderer'
import PrimaryButton from '../PrimaryButton'
import { ButtonDisplayState, ButtonProps } from '../ButtonProps'
import { Images } from '../../../res'

describe('PrimaryButton', () => {
  describe('when state is normal', () => {
    let testRenderer: renderer.ReactTestRenderer
    const onPressCallback = jest.fn()

    beforeEach(() => {
      const props: ButtonProps = {
        icon: Images.Warning,
        title: 'accept',
        displayState: ButtonDisplayState.Normal,
        onPress: onPressCallback,
      }
      testRenderer = renderer.create(<PrimaryButton {...props} />)
    })

    it('renders an icon', () => {
      const icon = testRenderer.root.findByType(Image)
      expect(icon.props.source).toBe(Images.Warning)
    })

    it('renders title', () => {
      const title = testRenderer.root.findByType(Text)
      expect(title.props.children).toBe('ACCEPT')
    })

    it('does not render spinner', () => {
      expect(testRenderer.root.findAllByType(ActivityIndicator)).toHaveLength(0)
    })

    it('will execute onPress callback', () => {
      const touchable = testRenderer.root.findByType(TouchableOpacity)
      touchable.props.onPress()
      expect(onPressCallback).toHaveBeenCalledTimes(1)
    })

    it('has a valid snapshot', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when state is loading', () => {
    let testRenderer: renderer.ReactTestRenderer
    const onPressCallback = jest.fn()

    beforeEach(() => {
      const props: ButtonProps = {
        title: 'accept',
        displayState: ButtonDisplayState.Loading,
        onPress: onPressCallback,
      }
      testRenderer = renderer.create(<PrimaryButton {...props} />)
    })

    it('does not render icon', () => {
      expect(testRenderer.root.findAllByType(Image)).toHaveLength(0)
    })

    it('does not render title', () => {
      expect(testRenderer.root.findAllByType(Text)).toHaveLength(0)
    })

    it('renders spinner', () => {
      expect(testRenderer.root.findAllByType(ActivityIndicator)).toHaveLength(1)
    })

    it("won't execute onPress callback", () => {
      const touchable = testRenderer.root.findByType(TouchableOpacity)
      touchable.props.onPress()
      expect(onPressCallback).not.toHaveBeenCalled()
    })

    it('has a valid snapshot', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when state is disabled', () => {
    let testRenderer: renderer.ReactTestRenderer
    const onPressCallback = jest.fn()

    beforeEach(() => {
      const props: ButtonProps = {
        title: 'accept',
        displayState: ButtonDisplayState.Disabled,
        onPress: onPressCallback,
      }
      testRenderer = renderer.create(<PrimaryButton {...props} />)
    })

    it('renders title', () => {
      const title = testRenderer.root.findByType(Text)
      expect(title.props.children).toBe('ACCEPT')
    })

    it('does not render spinner', () => {
      expect(testRenderer.root.findAllByType(ActivityIndicator)).toHaveLength(0)
    })

    it("won't execute onPress callback", () => {
      const touchable = testRenderer.root.findByType(TouchableOpacity)
      touchable.props.onPress()
      expect(onPressCallback).not.toHaveBeenCalled()
    })

    it('has a valid snapshot', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

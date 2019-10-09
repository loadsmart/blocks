import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, Image, ViewStyle } from 'react-native'
import renderer from 'react-test-renderer'
import PrimaryButton from '../PrimaryButton'
import { ButtonDisplayState, ButtonProps } from '../ButtonProps'
import { Images, Colors } from '../../../res'

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
        style: undefined,
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

    it('renders button text with custom style', () => {
      const style = {
        color: Colors.White,
        fontSize: 12,
        fontWeight: 'bold',
      }
      const props = {
        icon: Images.Warning,
        title: 'accept',
        displayState: ButtonDisplayState.Normal,
        onPress: onPressCallback,
        style: style,
      } as ButtonProps

      testRenderer = renderer.create(<PrimaryButton {...props} />)
      const text = testRenderer.root.findByType(Text)

      expect(text.props.style.color).toBe(style.color)
      expect(text.props.style.fontSize).toBe(style.fontSize)
      expect(text.props.style.fontWeight).toBe(style.fontWeight)
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

    it('renders activity indicator with custom spinner color', () => {
      const style = {
        color: Colors.DarkGrey,
      }
      const props = {
        title: 'accept',
        displayState: ButtonDisplayState.Loading,
        onPress: onPressCallback,
        style: style,
      } as ButtonProps

      testRenderer = renderer.create(<PrimaryButton {...props} />)
      const activityIndicator = testRenderer.root.findByType(ActivityIndicator)

      expect(activityIndicator.props.style.color).toBe(style.color)
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

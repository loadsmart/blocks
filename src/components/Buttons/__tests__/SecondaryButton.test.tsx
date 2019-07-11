import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, Image } from 'react-native'
import renderer from 'react-test-renderer'
import SecondaryButton from '../SecondaryButton'
import { ButtonDisplayState, ButtonProps, ButtonHeight, ButtonDisplayStyle } from '../ButtonProps'
import { Images } from '../../../res/'

describe('SecondaryButton', () => {
  let testRenderer: renderer.ReactTestRenderer
  let onPressCallback: jest.Mock

  beforeEach(() => {
    onPressCallback = jest.fn()
  })

  describe('when state is normal', () => {
    beforeEach(() => {
      const props: ButtonProps = {
        icon: Images.PlusSign,
        title: 'accept',
        displayState: ButtonDisplayState.Normal,
        onPress: onPressCallback,
        buttonHeight: ButtonHeight.Regular,
      }

      testRenderer = renderer.create(<SecondaryButton {...props} />)
    })

    it('renders icon', () => {
      const image = testRenderer.root.findByType(Image)
      expect(image.props.source).toBe(Images.PlusSign)
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
    beforeEach(() => {
      const props: ButtonProps = {
        icon: Images.PlusSign,
        title: 'accept',
        displayState: ButtonDisplayState.Loading,
        onPress: onPressCallback,
        buttonHeight: ButtonHeight.Regular,
      }
      testRenderer = renderer.create(<SecondaryButton {...props} />)
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
    beforeEach(() => {
      const props: ButtonProps = {
        title: 'accept',
        displayState: ButtonDisplayState.Disabled,
        onPress: onPressCallback,
        buttonHeight: ButtonHeight.Regular,
      }
      testRenderer = renderer.create(<SecondaryButton {...props} />)
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

  describe('height', () => {
    it('has snapshot for type normal', () => {
      testRenderer = renderer.create(
        <SecondaryButton title={'test'} buttonHeight={ButtonHeight.Regular} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('has snapshot for type short', () => {
      testRenderer = renderer.create(
        <SecondaryButton title={'test'} buttonHeight={ButtonHeight.Short} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('has snapshot for type undefined', () => {
      testRenderer = renderer.create(<SecondaryButton title={'test'} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  it('renders for style dark', () => {
    testRenderer = renderer.create(
      <SecondaryButton title={'Cancel'} displayStyle={ButtonDisplayStyle.Dark} />
    )

    expect(testRenderer.toJSON).toMatchSnapshot()
  })

  it('renders for style light', () => {
    testRenderer = renderer.create(
      <SecondaryButton title={'Cancel'} displayStyle={ButtonDisplayStyle.Light} />
    )

    expect(testRenderer.toJSON).toMatchSnapshot()
  })
})

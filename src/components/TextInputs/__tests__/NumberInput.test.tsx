import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import NumberInput from '../NumberInput'

const mockPlatform = (OS: string, version: number) => {
  jest.resetModules()
  const selectedOS = [OS]
  jest.doMock('Platform', () => ({
    OS,
    select: selectedOS,
    Version: version || undefined,
  }))
}

describe('NumberInput', () => {
  let testRenderer: ReactTestRenderer

  beforeEach(() => {
    const onChangeText = jest.fn()
    testRenderer = renderer.create(<NumberInput onChangeText={onChangeText} />)
  })

  describe('when changing focus', () => {
    it('renders with gray border when blurred', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders with green border when focused', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when adding or updating text', () => {
    it('renders a valid digit', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onChangeText('5')
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('does not render an invalid digit', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onChangeText('B')
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when key is pressed', () => {
    it('renders a valid digit', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: '5' } })
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('does not render an invalid digit', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: 'B' } })
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders an empty value', () => {
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: 'Backspace' } })
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when manually updating focus', () => {
    it('renders with green border when blurred', () => {
      testRenderer.root.instance.blur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders with green border when focused', () => {
      testRenderer.root.instance.focus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when running on different platforms', () => {
    it('displays default keyboard type on Android', () => {
      mockPlatform('android', 23)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('displays number-pad keyboard type on iOS', () => {
      mockPlatform('ios', 12)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

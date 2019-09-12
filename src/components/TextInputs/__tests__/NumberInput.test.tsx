import React from 'react'
import { TextInput as RNTextInput, TextInput } from 'react-native'
import renderer from 'react-test-renderer'
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
  describe('render', () => {
    it('renders with gray border when blurred', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders with green border when focused', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('onChangeText', () => {
    it('calls the props onChangeText with valid digit', () => {
      const onChangeTextMock = jest.fn()
      const testRenderer = renderer.create(<NumberInput onChangeText={onChangeTextMock} />)
      testRenderer.root.instance.onChangeText('5')
      expect(onChangeTextMock).toHaveBeenCalled()
    })

    it('does not call the props onChangeText with invalid digit', () => {
      const onChangeTextMock = jest.fn()
      const testRenderer = renderer.create(<NumberInput onChangeText={onChangeTextMock} />)
      testRenderer.root.instance.onChangeText('B')
      expect(onChangeTextMock).not.toHaveBeenCalled()
    })
  })

  describe('onKeyPress', () => {
    it('calls the props onChangeText with valid digit', () => {
      const onChangeTextMock = jest.fn()
      const testRenderer = renderer.create(<NumberInput onChangeText={onChangeTextMock} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: '5' } })
      expect(onChangeTextMock).toHaveBeenCalled()
    })

    it('calls the props onChangeText with empty value', () => {
      const onChangeTextMock = jest.fn()
      const testRenderer = renderer.create(<NumberInput onChangeText={onChangeTextMock} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: 'Backspace' } })
      expect(onChangeTextMock).toHaveBeenCalled()
    })

    it('does not call the props onChangeText with invalid text', () => {
      const onChangeTextMock = jest.fn()
      const testRenderer = renderer.create(<NumberInput onChangeText={onChangeTextMock} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onKeyPress({ nativeEvent: { key: 'B' } })
      expect(onChangeTextMock).not.toHaveBeenCalled()
    })
  })

  describe('blur', () => {
    it('calls the text input blur function when called', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const textInput = testRenderer.root.findByType(TextInput)
      textInput.instance.blur = jest.fn()
      testRenderer.root.instance.blur()
      expect(textInput.instance.blur).toHaveBeenCalled()
    })
  })

  describe('focus', () => {
    it('calls the text input focus function when called', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const textInput = testRenderer.root.findByType(TextInput)
      textInput.instance.focus = jest.fn()
      testRenderer.root.instance.focus()
      expect(textInput.instance.focus).toHaveBeenCalled()
    })
  })

  describe('onBlur', () => {
    it('should update the state to have focused value equals to false', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const instance = testRenderer.root.instance
      instance.setState({ focused: true })
      instance.onBlur()
      expect(instance.state.focused).toBeFalsy()
    })
  })

  describe('onFocus', () => {
    it('should update the state to have focused value equals to true', () => {
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const instance = testRenderer.root.instance
      instance.setState({ focused: false })
      instance.onFocus()
      expect(instance.state.focused).toBeTruthy()
    })
  })

  describe('keyboardType', () => {
    it('displays default keyboard type on Android', () => {
      mockPlatform('android', 23)
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const input = testRenderer.root.findByType(RNTextInput)
      expect(input.instance.props.keyboardType).toEqual('default')
    })

    it('displays number-pad keyboard type on iOS', () => {
      mockPlatform('ios', 12)
      const testRenderer = renderer.create(<NumberInput onChangeText={jest.fn()} />)
      const input = testRenderer.root.findByType(RNTextInput)
      expect(input.instance.props.keyboardType).toEqual('number-pad')
    })
  })
})

import React from 'react'
import { TextInput as RNTextInput, TouchableOpacity } from 'react-native'
import renderer from 'react-test-renderer'
import PasswordTextInput from '../PasswordTextInput'

describe('PasswordTextInput', () => {
  describe('when focusable is true', () => {
    it('renders with white border when on blur', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders with green border when on focus', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when focusable is false', () => {
    it('renders with white border when on blur', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable={false} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('also renders with white border when on focus', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable={false} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when password toggle is clicked', () => {
    it('correctly sets passwordVisible state', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable />)
      const instance = testRenderer.root.instance
      const toggle = testRenderer.root.findByType(TouchableOpacity)

      toggle.instance.props.onPress()
      const passwordShow = instance.state.passwordVisible
      toggle.instance.props.onPress()
      const passwordHide = instance.state.passwordVisible

      expect(passwordShow).toBeTruthy()
      expect(passwordHide).toBeFalsy()
    })
  })
})

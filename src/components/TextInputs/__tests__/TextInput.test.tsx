import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import renderer from 'react-test-renderer'
import TextInput from '../TextInput'

describe('TextInput', () => {
  describe('when focusable is true', () => {
    it('renders with white border when on blur', () => {
      const testRenderer = renderer.create(<TextInput focusable />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders with green border when on focus', () => {
      const testRenderer = renderer.create(<TextInput focusable />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when focusable is false', () => {
    it('renders with white border when on blur', () => {
      const testRenderer = renderer.create(<TextInput focusable={false} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onBlur()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('also renders with white border when on focus', () => {
      const testRenderer = renderer.create(<TextInput focusable={false} />)
      const input = testRenderer.root.findByType(RNTextInput)
      input.props.onFocus()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

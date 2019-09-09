import React from 'react'
import { Image, TextInput as RNTextInput, TouchableOpacity } from 'react-native'
import renderer from 'react-test-renderer'
import { Images } from '../../../res'
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
    it('renders password icons', () => {
      const testRenderer = renderer.create(<PasswordTextInput focusable={true} />)
      const toggle = testRenderer.root.findByType(TouchableOpacity)
      const image = testRenderer.root.findByType(Image)

      toggle.instance.props.onPress()
      expect(image.props.source).toBe(Images.PasswordShow)

      toggle.instance.props.onPress()
      expect(image.props.source).toBe(Images.PasswordHide)
    })
  })
})

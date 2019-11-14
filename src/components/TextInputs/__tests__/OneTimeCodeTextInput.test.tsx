import React from 'react'
import { TextInput } from 'react-native'
import renderer from 'react-test-renderer'
import OneTimeCodeTextInput from '../OneTimeCodeTextInput'

describe('OneTimeCodeTextInput', () => {
  describe('render', () => {
    it('has a maxLength of 6', () => {
      const testRenderer = renderer.create(<OneTimeCodeTextInput />)
      const input = testRenderer.root.findByType(TextInput)
      expect(input.props.maxLength).toBe(6)
    })

    it('has textContentType oneTimeCode so we can read from text message on iOS', () => {
      const testRenderer = renderer.create(<OneTimeCodeTextInput />)
      const input = testRenderer.root.findByType(TextInput)
      expect(input.props.textContentType).toBe('oneTimeCode')
    })

    it('uses a keyboard of type numberPad', () => {
      const testRenderer = renderer.create(<OneTimeCodeTextInput />)
      const input = testRenderer.root.findByType(TextInput)
      expect(input.props.keyboardType).toBe('number-pad')
    })
  })
})

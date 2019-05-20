import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import renderer from 'react-test-renderer'
import TextInput from '../TextInput'

describe('TextInput', () => {
  it('renders with white border when on blur', () => {
    const testRenderer = renderer.create(<TextInput />)
    const input = testRenderer.root.findByType(RNTextInput)
    input.props.onBlur()
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('renders with green border when on focus', () => {
    const testRenderer = renderer.create(<TextInput />)
    const input = testRenderer.root.findByType(RNTextInput)
    input.props.onFocus()
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})

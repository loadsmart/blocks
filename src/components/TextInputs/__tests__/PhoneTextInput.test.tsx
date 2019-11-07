import React from 'react'
import renderer from 'react-test-renderer'
import PhoneTextInput from '../PhoneTextInput'
import TextInput from '../TextInput'

const placeholder = 'Phone number'

describe('<PhoneTextInput>', () => {
  describe('snapshot', () => {
    it('renders with placeholder', () => {
      const testRenderer = renderer.create(<TextInput focusable placeholder={placeholder} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders without placeholder', () => {
      const testRenderer = renderer.create(<TextInput focusable />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('render', () => {
    it('renders the placeholder if passed as prop', () => {
      const component = renderer.create(
        <PhoneTextInput onChangeText={jest.fn()} placeholder={placeholder} />
      )
      const textInput = component.root.findByType(TextInput)
      expect(textInput.props.placeholder).toBe(placeholder)
    })
  })

  describe('applyChanges', () => {
    it('call onChangeText callback and sets a new state if phone number is not longer than 10', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const textComponent = component.root.findByType(TextInput)
      const phoneNumber = '(631) 631-6316'
      textComponent.props.onChangeText(phoneNumber)
      expect(component.root.instance.state.phoneNumber).toEqual(phoneNumber)
      expect(onChangeText).toBeCalledWith('6316316316')
    })

    it('does not call onChangeText callback and does not set a new state if phone number is longer than 10', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const textComponent = component.root.findByType(TextInput)
      const invalidPhoneNumber = '(631) 631-631631'
      textComponent.props.onChangeText(invalidPhoneNumber)
      expect(component.root.instance.state.phoneNumber).not.toEqual(invalidPhoneNumber)
      expect(onChangeText).not.toHaveBeenCalled()
    })
  })

  describe('getDigits', () => {
    it('returns an empty phone number if the phone parameter is null', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const instance = component.root.instance
      const val = instance.getDigits('')
      expect(val).toEqual('')
    })
  })

  describe('applyMask', () => {
    it('correctly mask the phone number with less than 3 digits', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const instance = component.root.instance
      const phoneNumber = '631'
      const val = instance.applyMask(phoneNumber)
      expect(val).toEqual(phoneNumber)
    })

    it('correctly mask the phone number with more than 3 digits', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const instance = component.root.instance
      const phoneNumber = '63163'
      const val = instance.applyMask(phoneNumber)
      expect(val).toEqual('(631) 63')
    })

    it('correctly mask the phone number with more than 6 digits', () => {
      const onChangeText = jest.fn()
      const component = renderer.create(<PhoneTextInput onChangeText={onChangeText} />)
      const instance = component.root.instance
      const phoneNumber = '6316316316'
      const val = instance.applyMask(phoneNumber)
      expect(val).toEqual('(631) 631-6316')
    })
  })
})

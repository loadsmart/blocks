import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import NumberInput from '../NumberInput'
import PinCodeTextInput from '../PinCodeTextInput'

describe('PinCodeTextInput', () => {
  let testRenderer: ReactTestRenderer

  const renderPinCodeComponent = (authCode?: string) => {
    testRenderer = renderer.create(
      <PinCodeTextInput authCode={authCode} onChangeInput={jest.fn()} />
    )
  }

  describe('when auth code prop is defined', () => {
    it('renders all number inputs with a digit', () => {
      renderPinCodeComponent('123456')
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when auth code prop is undefined', () => {
    it('renders all number inputs with a empty value', () => {
      renderPinCodeComponent()
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when auth code changes', () => {
    it('renders a number input with a valid digit', () => {
      renderPinCodeComponent('123456')
      testRenderer.root.instance.onChangeDigit(0, '1')
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when adding or updating a digit', () => {
    it('renders the number input with the a new digit', () => {
      renderPinCodeComponent('123456')
      const numberInputs = testRenderer.root.findAllByType(NumberInput)
      numberInputs.forEach(input => input.props.onChangeText('1'))
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('when deleting a digit', () => {
    it('renders the number input with empty value', () => {
      renderPinCodeComponent('123456')
      const numberInputs = testRenderer.root.findAllByType(NumberInput)
      numberInputs.forEach(input => input.props.onChangeText(''))
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

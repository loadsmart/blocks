import React from 'react'
import renderer from 'react-test-renderer'
import NumberInput from '../NumberInput'
import PinCodeTextInput from '../PinCodeTextInput'

const onChangeInput = jest.fn()

describe('PinCodeTextInput', () => {
  describe('render', () => {
    it('renders all number inputs with a digit if auth code prop is defined', () => {
      const testRenderer = renderer.create(
        <PinCodeTextInput authCode={'123456'} onChangeInput={jest.fn()} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders all number inputs with a empty value if auth code prop is undefined', () => {
      const testRenderer = renderer.create(
        <PinCodeTextInput authCode={''} onChangeInput={jest.fn()} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('renders first input with textContentType being oneTimeCode and other as none', () => {
      const testRenderer = renderer.create(
        <PinCodeTextInput authCode={'123456'} onChangeInput={jest.fn()} />
      )

      const inputs = testRenderer.root.findAllByType(NumberInput)
      const firstInput = inputs[0]
      const otherInputs = inputs.slice(1, inputs.length - 1)

      expect(firstInput.props.shouldReadOneTimeCode).toBeTruthy()

      otherInputs.forEach(input => {
        expect(input.props.shouldReadOneTimeCode).toBeFalsy()
      })
    })
  })

  describe('onChangeDigit', () => {
    it('updates the state according to the typed digit', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const instance = testRenderer.root.instance
      instance.setState({ digits: ['', '', '', '', '', ''] })
      instance.onChangeDigit(0, '1')
      expect(instance.state).toEqual({ digits: ['1', '', '', '', '', ''], focused: false })
    })

    it('updates the state accordingly if a digit is deleted', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const instance = testRenderer.root.instance
      instance.setState({ digits: ['1', '', '', '', '', ''] })
      instance.onChangeDigit(0, '')
      expect(instance.state).toEqual({ digits: ['', '', '', '', '', ''], focused: false })
    })

    it('updates the state accordingly if the auth code prop field is not empty', () => {
      const testRenderer = renderer.create(
        <PinCodeTextInput authCode={'345345'} onChangeInput={onChangeInput} />
      )
      const instance = testRenderer.root.instance
      expect(instance.state.digits).toEqual(['3', '4', '5', '3', '4', '5'])
    })

    it('notifies the input change every time a digit is changed', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const instance = testRenderer.root.instance
      instance.setState({ digits: ['', '', '', '', '', ''] })
      instance.onChangeDigit(0, '9')
      expect(onChangeInput).toHaveBeenCalledWith('9')
    })

    it('updates the state accordingly if number input onChangeText is called', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const instance = testRenderer.root.instance
      const inputs = testRenderer.root.findAllByType(NumberInput)
      inputs[0].props.onChangeText('9')
      expect(onChangeInput).toHaveBeenCalledWith('9')
    })
  })

  describe('updatePinCodeInputFocus', () => {
    it('blurs the current number input and focus in the next one if the current is not the last', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const inputRefs = [
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
      ]
      testRenderer.root.instance.updatePinCodeInputFocus(0, inputRefs, '1')
      expect(inputRefs[0].blur).toHaveBeenCalled()
      expect(inputRefs[1].focus).toHaveBeenCalled()
    })

    it('blurs the current number input if it is the last', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const inputRefs = [
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
      ]
      testRenderer.root.instance.updatePinCodeInputFocus(1, inputRefs, '123456')
      expect(inputRefs[1].blur).toHaveBeenCalled()
    })

    it('neither blurs not focus the current number input if it is the first and is deleting', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const inputRefs = [
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
      ]
      testRenderer.root.instance.updatePinCodeInputFocus(0, inputRefs, '')

      expect(inputRefs[0].blur).not.toHaveBeenCalled()
      expect(inputRefs[0].focus).not.toHaveBeenCalled()

      expect(inputRefs[1].blur).not.toHaveBeenCalled()
      expect(inputRefs[1].focus).not.toHaveBeenCalled()
    })

    it('blurs the current number input and focus the previous one if deleting', () => {
      const testRenderer = renderer.create(<PinCodeTextInput onChangeInput={onChangeInput} />)
      const inputRefs = [
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
        {
          blur: jest.fn(),
          focus: jest.fn(),
        },
      ]
      testRenderer.root.instance.updatePinCodeInputFocus(1, inputRefs, '')
      expect(inputRefs[0].focus).toHaveBeenCalled()
      expect(inputRefs[1].blur).toHaveBeenCalled()
    })
  })
})

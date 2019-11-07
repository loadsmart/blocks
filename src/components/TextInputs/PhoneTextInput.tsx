import React, { Component } from 'react'
import TextInput from './TextInput'
import { ViewProps } from 'react-native'

interface Props extends ViewProps {
  onChangeText: (text: string) => void
  placeholder?: string
}

interface State {
  phoneNumber: string
}

export default class PhoneTextInput extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      phoneNumber: '',
    }
  }

  public render() {
    return (
      <TextInput
        placeholder={this.props.placeholder ? this.props.placeholder : ''}
        onChangeText={phone => this.applyChanges(phone)}
        keyboardType={'phone-pad'}
        value={this.state.phoneNumber}
      />
    )
  }

  public applyChanges(phone: string) {
    const digits = this.getDigits(phone)
    if (digits.length > 10) return
    this.setState({ phoneNumber: this.applyMask(digits) })
    this.props.onChangeText(digits)
  }

  public getDigits(phone: string): string {
    const numbers = phone.match(/\d+/g)
    if (numbers === null) return ''
    return numbers.join('')
  }

  public applyMask(phone: string): string {
    const partOne = phone.substr(0, 3)
    const partTwo = phone.substr(3, 3)
    const partThree = phone.substr(6, 4)

    if (partOne.length < 3 || !partTwo.length) return partOne
    if (partTwo.length < 3 || !partThree.length) return `(${partOne}) ${partTwo}`
    return `(${partOne}) ${partTwo}-${partThree}`
  }
}

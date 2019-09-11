import React, { Component } from 'react'
import { StyleSheet, TextInputProps, View } from 'react-native'
import NumberInput from './NumberInput'

interface Props extends TextInputProps {
  onChangeInput: (input: string) => void
  authCode?: string
}

interface State {
  digits: string[]
  focused: boolean
}

export default class PinCodeTextInput extends Component<Props, State> {
  private inputRefs: NumberInput[]

  constructor(props: Props, state: State) {
    super(props, state)
    this.inputRefs = []
    this.state = {
      digits: ['', '', '', '', '', ''],
      focused: false,
    }
  }

  public static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.authCode === prevState.digits.join('') || nextProps.authCode === undefined) {
      return prevState
    }

    return {
      digits: nextProps.authCode!.split(''),
    }
  }

  public render() {
    return (
      <View style={styles.pinNumbersContainer}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <NumberInput
            {...this.props}
            key={i}
            ref={component => (this.inputRefs[i] = component!)}
            onChangeText={text => {
              this.onChangeDigit(i, text)
            }}
            digit={this.state.digits[i]}
          />
        ))}
      </View>
    )
  }

  public onChangeDigit = (index: number, text: string) => {
    this.state.digits[index] = text
    this.props.onChangeInput(this.state.digits.join(''))
    this.updatePinCodeInputFocus(index, this.inputRefs, text)
  }

  public updatePinCodeInputFocus = (index: number, inputRefs: NumberInput[], text: string) => {
    if (text.length === 0) {
      if (index === 0) return
      inputRefs[index - 1].focus()
      inputRefs[index].blur()
    } else {
      inputRefs[index].blur()
      if (index !== inputRefs.length - 1) inputRefs[index + 1].focus()
    }
  }
}

const styles = StyleSheet.create({
  pinNumbersContainer: {
    flexDirection: 'row',
  },
})

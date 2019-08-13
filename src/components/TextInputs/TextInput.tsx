import React, { Component } from 'react'
import { StyleSheet, TextInput as RNTextInput, TextInputProps } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { ThemeContext } from '../Contexts'

interface Props extends TextInputProps {}

interface State {
  focused: boolean
}

export default class TextInput extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      focused: false,
    }
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const borderStyle = this.state.focused
            ? { borderColor: theme.primaryColor }
            : { borderColor: Colors.White }
          return (
            <RNTextInput
              {...this.props}
              style={[styles.textInput, this.props.style, borderStyle]}
              onFocus={this.onFocus.bind(this)}
              onBlur={this.onBlur.bind(this)}
            />
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  public onFocus() {
    this.setState(_ => ({
      focused: true,
    }))
  }

  public onBlur() {
    this.setState(_ => ({
      focused: false,
    }))
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 52,
    backgroundColor: Colors.White,
    borderRadius: 26,
    paddingHorizontal: 28,
    fontFamily: Fonts.SharpSansSemibold,
    fontSize: 16,
    color: Colors.Charcoal,
    borderWidth: 2,
  },
})

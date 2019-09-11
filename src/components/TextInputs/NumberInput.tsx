import React, { PureComponent } from 'react'
import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
} from 'react-native'
import { Colors } from '../../res'
import { ThemeContext } from '../Contexts'

interface Props extends TextInputProps {
  onChangeText: (text: string) => void
  digit?: string
  focus?: boolean
}

interface State {
  focused: boolean
}

const digitRegex = '^\\d$'

export default class NumberInput extends PureComponent<Props, State> {
  private textInput: TextInput | null

  constructor(props: Props, state: State) {
    super(props, state)
    this.textInput = null
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
            : { borderColor: Colors.Ghost }
          return (
            <TextInput
              ref={component => (this.textInput = component)}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'default'}
              maxLength={1}
              selectionColor={Colors.Transparent}
              style={[styles.container, borderStyle]}
              onChangeText={this.onChangeText}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              blurOnSubmit={false}
              value={this.props.digit}
              onKeyPress={this.onKeyPress}
              caretHidden={true}
            />
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  public onChangeText = (text: string) => {
    if (text.match(digitRegex)) {
      this.props.onChangeText(text)
    }
  }

  public blur = () => {
    this.textInput!.blur()
  }

  public focus = () => {
    this.textInput!.focus()
  }

  public onBlur = () => {
    this.setState({ focused: false })
  }

  public onFocus = () => {
    this.setState({ focused: true })
  }

  public onKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const key = event.nativeEvent.key
    if (key.match(digitRegex)) {
      this.props.onChangeText(key)
    } else if (key.match('Backspace')) {
      this.props.onChangeText('')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 63,
    borderWidth: 2,
    backgroundColor: Colors.White,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 4,
  },
})

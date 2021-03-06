import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { Colors, Fonts, Images } from '../../res'
import { ThemeContext } from '../Contexts'

interface Props extends TextInputProps {
  focusable?: boolean
}

interface State {
  focused: boolean
  passwordVisible: boolean
}

export default class PasswordTextInput extends Component<Props, State> {
  public static defaultProps: Props = {
    focusable: true,
  }

  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      focused: false,
      passwordVisible: false,
    }
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const borderStyle =
            this.props.focusable === true && this.state.focused === true
              ? { borderColor: theme.primaryColor }
              : { borderColor: Colors.White }
          return (
            <View style={[this.props, styles.container, this.props.style, borderStyle]}>
              <RNTextInput
                {...this.props}
                style={styles.textInput}
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)}
                secureTextEntry={!this.state.passwordVisible}
              />
              <TouchableOpacity
                onPress={() => this.setState({ passwordVisible: !this.state.passwordVisible })}
              >
                <Image
                  style={styles.icon}
                  source={this.state.passwordVisible ? Images.PasswordShow : Images.PasswordHide}
                />
              </TouchableOpacity>
            </View>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: Colors.White,
    borderRadius: 26,
    paddingHorizontal: 28,
    fontFamily: Fonts.SharpSansSemibold,
    fontSize: 16,
    color: Colors.Charcoal,
    borderWidth: 2,
  },
  textInput: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 5,
    fontFamily: Fonts.SharpSansSemibold,
    fontSize: 16,
  },
  icon: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 16,
    height: 16,
    padding: 10,
    backgroundColor: 'transparent',
  },
})

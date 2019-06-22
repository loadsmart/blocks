import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageSourcePropType } from 'react-native'
import { Colors, Fonts } from '../../res'
import { TextInput, TertiaryButton, PrimaryButton, LogoBig } from '../../components'
import ContentAndActionWrapper from '../ContentAndActionWrapper'

interface Props {
  backgroundImage?: ImageSourcePropType
  onPressSignIn?: (email: string, password: string) => void
  onPressForgotPassword?: () => void
}

interface State {
  email: string
  password: string
  errorMessage?: string
  loading: boolean
}

export default class EmailSignInScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = { email: '', password: '', loading: false }
  }

  public render() {
    const contentComponent = (
      <View style={styles.content}>
        <LogoBig appName={'appname'} />
        <View style={{ height: 50, justifyContent: 'flex-end' }}>
          {this.state.errorMessage && (
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          )}
        </View>
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          placeholder={'Email'}
          autoCorrect={false}
          spellCheck={false}
          style={styles.email}
          onChangeText={val => this._onChangeText('email', val)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder={'Password'}
          style={styles.password}
          onChangeText={val => this._onChangeText('password', val)}
        />
        <TertiaryButton
          title="Forgot your password?"
          style={styles.forgotYourPass}
          onPress={this._onPressForgotPassword.bind(this)}
        />
      </View>
    )

    const actionComponent = (
      <PrimaryButton
        title={'Sign in'}
        style={styles.loginButton}
        onPress={this._onPressSignIn.bind(this)}
      />
    )

    return (
      <ContentAndActionWrapper
        backgroundImage={this.props.backgroundImage}
        contentComponent={contentComponent}
        actionComponent={actionComponent}
      />
    )
  }

  private _onChangeText(input: string, value: string) {
    this.setState({ ...this.state, [input]: value, errorMessage: undefined })
  }

  private _onPressSignIn() {
    const { onPressSignIn } = this.props
    const { email, password } = this.state
    onPressSignIn && onPressSignIn(email, password)
  }

  private _onPressForgotPassword() {
    const { onPressForgotPassword } = this.props
    onPressForgotPassword && onPressForgotPassword()
  }
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 24,
    alignSelf: 'stretch',
  },
  errorMessage: {
    alignSelf: 'center',
    color: Colors.OrangePeel,
    fontFamily: Fonts.SharpSansMedium,
    fontSize: 15,
  },
  email: {
    alignItems: 'stretch',
    marginTop: 8,
  },
  password: {
    alignItems: 'stretch',
    marginTop: 12,
  },
  forgotYourPass: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 10,
  },
  loginButton: {
    marginTop: 40,
    marginHorizontal: 24,
  },
})

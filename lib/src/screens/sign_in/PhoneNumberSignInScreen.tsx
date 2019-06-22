import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import { LogoBig, TextInput, PrimaryButton } from '../../components'
import ContentAndActionWrapper from '../ContentAndActionWrapper'
import { Colors, Fonts } from '../../res'

interface Props {
  backgroundImage?: ImageSourcePropType
  onPressSignIn?: (phone: string) => void
}

interface State {
  phone: string
  errorMessage?: string
  loading: boolean
}

export default class SignInAsDriverScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = { phone: '', loading: false }
  }

  public render() {
    const contentComponent = (
      <View style={styles.content}>
        <LogoBig appName={'app name'} />
        <View style={{ height: 100, justifyContent: 'flex-end' }}>
          {this.state.errorMessage != null && (
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          )}
        </View>
        <TextInput
          keyboardType={'phone-pad'}
          placeholder={'Your mobile number'}
          onChangeText={val => this.onChangeText('phone', val)}
          style={styles.phoneNumber}
        />
      </View>
    )

    const actionComponent = (
      <PrimaryButton
        title={'Sign in'}
        onPress={this._onPressSignIn.bind(this)}
        style={styles.loginButton}
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

  private onChangeText(input: string, value: string) {
    this.setState({ ...this.state, [input]: value, errorMessage: undefined })
  }

  private _onPressSignIn() {
    const { onPressSignIn } = this.props
    const { phone } = this.state
    onPressSignIn && onPressSignIn(phone)
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
  phoneNumber: {
    alignItems: 'stretch',
    marginTop: 8,
  },
  loginButton: {
    marginTop: 60,
    marginHorizontal: 24,
  },
})

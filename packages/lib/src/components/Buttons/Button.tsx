import React, { PureComponent } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'
import { Colors, Fonts } from '../../res/index'

export enum ButtonDisplayState {
  Normal,
  Disabled,
  Loading,
}

export interface ButtonProps extends ViewProps {
  title: string
  displayState?: ButtonDisplayState
  onPress?: () => void
}

export default class Button extends PureComponent<ButtonProps> {
  public render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <View style={[styles.wrapper, this.props.style]}>
          {this.props.displayState !== ButtonDisplayState.Loading && (
            <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
          )}
          {this.props.displayState === ButtonDisplayState.Loading && (
            <ActivityIndicator color={Colors.White} style={styles.activityIndicator} />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  private onPress = () => {
    const { displayState, onPress } = this.props
    if (displayState === ButtonDisplayState.Normal && onPress) {
      onPress()
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 28,
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.AlgaeGreen,
  },
  text: {
    color: 'white',
    fontFamily: Fonts.SharpSansExtrabold,
    fontSize: 15,
    alignSelf: 'center',
  },
  activityIndicator: {
    alignSelf: 'center',
    position: 'absolute',
  },
})

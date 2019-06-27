import React, { PureComponent } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { ButtonDisplayState, ButtonProps } from './ButtonProps'

export default class PrimaryButton extends PureComponent<ButtonProps> {
  public static defaultProps = {
    displayState: ButtonDisplayState.Normal,
  }

  public render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <View style={[styles.wrapper, this.props.style]}>
          {this.props.displayState !== ButtonDisplayState.Loading && this.renderNormalState()}
          {this.props.displayState === ButtonDisplayState.Loading && this.renderLoadingState()}
        </View>
      </TouchableOpacity>
    )
  }

  private renderNormalState = () => {
    const { icon, iconStyle, title } = this.props
    return (
      <>
        {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </>
    )
  }

  private renderLoadingState = () => {
    return <ActivityIndicator color={Colors.White} style={styles.activityIndicator} />
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
    flexDirection: 'row',
    borderRadius: 28,
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.AlgaeGreen,
  },
  icon: {
    marginRight: 8,
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

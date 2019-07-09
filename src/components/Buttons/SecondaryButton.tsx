import React, { PureComponent } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { ButtonDisplayState, ButtonHeight, ButtonProps, ButtonDisplayStyle } from './ButtonProps'

export default class SecondaryButton extends PureComponent<ButtonProps> {
  public static defaultProps = {
    displayState: ButtonDisplayState.Normal,
  }

  public render() {
    const styles = stylesFromProps(this.props)
    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this)}
        style={[styles.wrapper, this.props.style]}
      >
        {this.props.displayState !== ButtonDisplayState.Loading && this.renderNormalState()}
        {this.props.displayState === ButtonDisplayState.Loading && this.renderLoadingState()}
      </TouchableOpacity>
    )
  }

  private renderNormalState = () => {
    const styles = stylesFromProps(this.props)
    return (
      <>
        {this.props.icon && (
          <Image source={this.props.icon} style={[styles.icon, this.props.iconStyle]} />
        )}
        <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
      </>
    )
  }

  private renderLoadingState = () => {
    const styles = stylesFromProps(this.props)
    return <ActivityIndicator color={Colors.Charcoal} style={styles.activityIndicator} />
  }

  private onPress = () => {
    const { displayState, onPress } = this.props
    if (displayState === ButtonDisplayState.Normal && onPress) {
      onPress()
    }
  }
}

const stylesFromProps = (props: ButtonProps) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: props.displayStyle === ButtonDisplayStyle.Light ? Colors.White : Colors.Charcoal,
      borderRadius: props.buttonHeight ? props.buttonHeight / 2.0 : ButtonHeight.Regular / 2.0,
      paddingHorizontal: 8,
      height: props.buttonHeight ? props.buttonHeight : ButtonHeight.Regular,
    },
    icon: {
      marginRight: 4,
    },
    text: {
      fontFamily: Fonts.SharpSansBold,
      fontSize: 12,
      marginLeft: 4,
      color: props.displayStyle === ButtonDisplayStyle.Light ? Colors.White : Colors.Charcoal,
    },
    activityIndicator: {
      alignSelf: 'center',
      position: 'absolute',
    },
  })

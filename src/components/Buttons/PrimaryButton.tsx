import React, { PureComponent } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { ThemeProviderProps } from '../Providers'
import { ButtonDisplayState, ButtonProps } from './ButtonProps'

type PrimaryButtonProps = ButtonProps & ThemeProviderProps

export default class PrimaryButton extends PureComponent<PrimaryButtonProps> {
  public static defaultProps = {
    displayState: ButtonDisplayState.Normal,
  }

  public render() {
    const styles = stylesFromProps(this.props)
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
    const styles = stylesFromProps(this.props)
    const { icon, iconStyle, title } = this.props
    return (
      <>
        {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </>
    )
  }

  private renderLoadingState = () => {
    const styles = stylesFromProps(this.props)
    return <ActivityIndicator color={Colors.White} style={styles.activityIndicator} />
  }

  private onPress = () => {
    const { displayState, onPress } = this.props
    if (displayState === ButtonDisplayState.Normal && onPress) {
      onPress()
    }
  }
}

const stylesFromProps = (props: PrimaryButtonProps) => {
  const themedColor = props.theme && props.theme.primaryColor
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      borderRadius: 28,
      height: 50,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themedColor || Colors.AlgaeGreen,
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
}

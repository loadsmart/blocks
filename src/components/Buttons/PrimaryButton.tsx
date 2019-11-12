import React, { PureComponent } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { Theme, ThemeContext } from '../Contexts'
import { ButtonDisplayState, ButtonProps } from './ButtonProps'

export default class PrimaryButton extends PureComponent<ButtonProps> {
  public static defaultProps = {
    displayState: ButtonDisplayState.Normal,
  }

  public render() {
    const { displayState, testID } = this.props
    return (
      <ThemeContext.Consumer>
        {theme => {
          const styles = themedStyles(theme, this.props.style)
          return (
            <TouchableOpacity onPress={this.onPress.bind(this)} {...{ testID }}>
              <View style={[styles.wrapper, this.props.style]}>
                {displayState !== ButtonDisplayState.Loading && this.renderNormalState(styles)}
                {displayState === ButtonDisplayState.Loading && this.renderLoadingState(styles)}
              </View>
            </TouchableOpacity>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  private renderNormalState = (styles: any) => {
    const { icon, iconStyle, title } = this.props
    return (
      <>
        {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </>
    )
  }

  private renderLoadingState = (styles: any) => {
    return (
      <ActivityIndicator color={styles.activityIndicator.color} style={styles.activityIndicator} />
    )
  }

  private onPress = () => {
    const { displayState, onPress } = this.props
    if (displayState === ButtonDisplayState.Normal && onPress) {
      onPress()
    }
  }
}

const themedStyles = (theme: Partial<Theme>, style: any) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      borderRadius: 28,
      height: 50,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primaryColor,
    },
    icon: {
      marginRight: 8,
    },
    text: {
      alignSelf: 'center',
      fontFamily: Fonts.SharpSansExtrabold,
      color: style && style.color ? style.color : Colors.White,
      fontSize: style && style.fontSize ? style.fontSize : 15,
      fontWeight: style && style.fontWeight ? style.fontWeight : 'normal',
    },
    activityIndicator: {
      alignSelf: 'center',
      position: 'absolute',
      color: style && style.color ? style.color : Colors.White,
    },
  })
}

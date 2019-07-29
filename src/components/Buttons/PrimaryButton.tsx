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
    return (
      <ThemeContext.Consumer>
        {theme => {
          const styles = themedStyles(theme)
          return (
            <TouchableOpacity onPress={this.onPress.bind(this)}>
              <View style={[styles.wrapper, this.props.style]}>
                {this.props.displayState !== ButtonDisplayState.Loading &&
                  this.renderNormalState(styles)}
                {this.props.displayState === ButtonDisplayState.Loading &&
                  this.renderLoadingState(styles)}
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
    return <ActivityIndicator color={Colors.White} style={styles.activityIndicator} />
  }

  private onPress = () => {
    const { displayState, onPress } = this.props
    if (displayState === ButtonDisplayState.Normal && onPress) {
      onPress()
    }
  }
}

const themedStyles = (theme: Partial<Theme>) => {
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

import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, View, ViewProps } from 'react-native'
import { Fonts, Images } from '../../res'

interface Props extends ViewProps {
  logoColor?: string
  appName?: string
  appNameColor?: string
}

export default class LogoBig extends PureComponent<Props> {
  public render() {
    const { appName } = this.props
    const styles = stylesFromProps(this.props)
    return (
      <View>
        <Image source={Images.LogoBig} style={styles.logo} />
        {appName && <Text style={styles.appName}>{appName.toUpperCase()}</Text>}
      </View>
    )
  }
}

const stylesFromProps = (props: Props) => {
  return StyleSheet.create({
    logo: {
      alignSelf: 'center',
      tintColor: props.logoColor,
    },
    appName: {
      alignSelf: 'center',
      fontFamily: Fonts.SharpSansExtrabold,
      fontSize: 32,
      color: props.appNameColor,
      letterSpacing: 3.2,
      marginTop: 12,
    },
  })
}

import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Colors, Fonts, Images } from '../../res/index'
import { BannerDisplayStyle, BannerProps } from './BannerProps'

export default class AlertBanner extends PureComponent<BannerProps> {
  public render() {
    const { message, onPress, testID } = this.props
    const styles = stylesFromProps(this.props)
    return (
      <TouchableWithoutFeedback {...{ onPress, testID }}>
        <View style={[styles.wrapper, this.props.style]}>
          <Image source={Images.Warning} />
          {message && (
            <Text style={styles.text} numberOfLines={2}>
              {message}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const stylesFromProps = (props: BannerProps) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      height: 55,
      alignItems: 'center',
      backgroundColor:
        props.displayStyle === BannerDisplayStyle.Error ? Colors.CoralPink : Colors.OrangePeel,
      paddingHorizontal: 15,
    },
    text: {
      fontFamily: Fonts.SharpSansSemibold,
      fontSize: 14,
      color: Colors.White,
      marginLeft: 12,
    },
  })
}

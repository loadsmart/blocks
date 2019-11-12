import React, { PureComponent } from 'react'
import { Image, View, ViewProps } from 'react-native'
import { Colors, Images } from '../../res'

interface Props extends ViewProps {
  tintColor?: string
}

export default class IconChevron extends PureComponent<Props> {
  public render() {
    const { style, testID } = this.props
    const tintColor = this.props.tintColor ? this.props.tintColor : Colors.LightGray
    return (
      <View {...{ style, testID }}>
        <Image source={Images.Chevron} style={{ tintColor }} />
      </View>
    )
  }
}

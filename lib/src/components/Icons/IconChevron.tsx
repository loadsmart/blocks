import React, { PureComponent } from 'react'
import { Image, View, ViewProps } from 'react-native'
import { Images, Colors } from '../../res'

interface Props extends ViewProps {
  tintColor?: string
}

export default class IconChevron extends PureComponent<Props> {
  public render() {
    const tintColor = this.props.tintColor ? this.props.tintColor : Colors.LightGray
    return (
      <View style={this.props.style}>
        <Image source={Images.Chevron} style={{ tintColor }} />
      </View>
    )
  }
}

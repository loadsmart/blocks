import React, { PureComponent } from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewProps,
} from 'react-native'
import { Colors, Fonts } from '../../res/'

export interface BorderedButtonProps extends ViewProps {
  icon?: ImageSourcePropType
  iconStyle?: StyleProp<ImageStyle>
  title: string
  titleStyle?: StyleProp<TextStyle>
  onPress?: () => void
}

export default class BorderedButton extends PureComponent<BorderedButtonProps> {
  public render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.wrapper, this.props.style]}>
        {this.props.icon && <Image source={this.props.icon} style={this.props.iconStyle} />}
        <Text style={[styles.text, this.props.titleStyle]} numberOfLines={1}>
          {this.props.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 21,
    paddingHorizontal: 8,
    height: 42,
  },
  text: {
    fontFamily: Fonts.SharpSansBold,
    fontSize: 12,
    marginLeft: 4,
    color: Colors.Charcoal,
  },
})

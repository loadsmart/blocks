import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewProps } from 'react-native'
import { Colors, Fonts } from '../../res/'

export enum TertiaryButtonDisplayStyle {
  Dark,
  Light,
}

interface Props extends ViewProps {
  title: string
  displayStyle?: TertiaryButtonDisplayStyle
  onPress?: () => void
}

export default class TertiaryButton extends PureComponent<Props> {
  public render() {
    const styles = stylesFromProps(this.props)
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <>
          <Text style={[styles.title, this.props.style]}>{this.props.title}</Text>
        </>
      </TouchableOpacity>
    )
  }
}

const stylesFromProps = (props: Props) => {
  const isLight = props.displayStyle === TertiaryButtonDisplayStyle.Light
  return StyleSheet.create({
    title: {
      color: isLight ? Colors.White : Colors.Charcoal,
      textDecorationLine: 'underline',
      fontFamily: Fonts.SharpSansMedium,
      fontSize: 14,
      textAlign: 'center',
    },
  })
}

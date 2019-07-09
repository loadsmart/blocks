import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewProps } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { ButtonDisplayStyle } from './ButtonProps'

interface Props extends ViewProps {
  title: string
  displayStyle?: ButtonDisplayStyle
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
  return StyleSheet.create({
    title: {
      color: props.displayStyle === ButtonDisplayStyle.Light ? Colors.White : Colors.Charcoal,
      textDecorationLine: 'underline',
      fontFamily: Fonts.SharpSansMedium,
      fontSize: 14,
      textAlign: 'center',
    },
  })
}

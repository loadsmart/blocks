import React, { Component } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import { Colors, Fonts } from '../../res'
import { Radio } from '../Radios'

interface Props extends ViewProps {
  title: string
  selected?: boolean
}

export default class RadioSelectCell extends Component<Props> {
  public render() {
    const { selected, title, testID } = this.props
    const extraTitleStyle = {
      fontFamily: selected ? Fonts.SharpSansBold : Fonts.SharpSansMedium,
    }
    return (
      <View style={[styles.container, this.props.style]} {...{ testID }}>
        <Radio selected={selected === true} style={styles.radio} />
        <Text style={[styles.title, extraTitleStyle]}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: Colors.DarkGrey,
    paddingHorizontal: 16,
  },
  radio: {
    marginRight: 20,
  },
  title: {
    color: Colors.White,
  },
})

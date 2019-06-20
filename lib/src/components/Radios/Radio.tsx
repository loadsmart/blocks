import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Colors } from '../../res'

interface Props extends ViewProps {
  selected?: boolean
}

export default class Radio extends PureComponent<Props> {
  public render() {
    const isSelected = this.props.selected === true
    const color = isSelected ? Colors.AlgaeGreen : Colors.Tuna
    return (
      <View style={[styles.outerCircle, { borderColor: color }]}>
        {isSelected && <View style={[styles.innerCircle, { backgroundColor: color }]} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerCircle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
})

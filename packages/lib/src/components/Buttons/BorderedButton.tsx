import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export default class BorderedButton extends PureComponent<ViewProps> {
  constructor(props: ViewProps) {
    super(props)
  }

  public render() {
    return <View style={styles.background} />
  }
}

const styles = StyleSheet.create({
  background: {
    width: 100,
    height: 100,
    backgroundColor: '#22F101',
  },
})

import React from 'react'
import { StyleSheet, View } from 'react-native'

export const CenterDecorator = (story: any) => (
  <View style={[styles.base, styles.center]}>{story()}</View>
)
export const CenterPaddedDecorator = (story: any) => (
  <View style={[styles.base, styles.padded]}>{story()}</View>
)
export const StretchDecorator = (story: any) => (
  <View style={[styles.base, styles.stretch]}>{story()}</View>
)

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEE',
  },
  center: {
    alignItems: 'center',
  },
  padded: {
    padding: 20,
  },
  stretch: {
    alignItems: 'stretch',
  },
})

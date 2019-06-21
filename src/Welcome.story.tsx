import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { CenterDecorator } from './decorators'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Fonts, Colors } from '@loadsmart/blocks'
import SampleImages from './images'

storiesOf('Welcome', module)
  .addDecorator(CenterDecorator)
  .add('Main', () => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.castle}>🏰</Text>
        <Text style={styles.title}>Welcome to Blocks </Text>
        <Text style={styles.subtitle}>
          Blocks is Loadsmart's UI Components Library that can be used in any React Native app
        </Text>
        <Text style={styles.message}>
          Open the "Navigator" panel and start exploring the content
        </Text>
        <View style={styles.poweredBy}>
          <Text style={styles.message}>Powered by</Text>
          <Image source={SampleImages.Storybook} style={styles.storybook} />
        </View>
      </View>
    )
  })

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 20,
    maxWidth: 320,
  },
  castle: {
    fontSize: 32,
  },
  title: {
    marginTop: 8,
    fontFamily: Fonts.SharpSansBold,
    fontSize: 20,
    color: Colors.Charcoal,
  },
  subtitle: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: Fonts.SharpSansBold,
    color: Colors.Charcoal,
    opacity: 0.6,
  },
  message: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: Fonts.SharpSansMedium,
    color: Colors.Charcoal,
    opacity: 0.6,
  },
  poweredBy: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  storybook: {
    marginTop: 10,
    marginLeft: 8,
  },
})

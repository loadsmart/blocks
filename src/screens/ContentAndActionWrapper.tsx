import React, { PureComponent } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Fonts, Colors } from '../res'

interface Props {
  backgroundImage?: ImageSourcePropType
  contentComponent: JSX.Element
  actionComponent?: JSX.Element
  scrollEnabled?: boolean
}

export default class ContentAndActionWrapper extends PureComponent<Props> {
  public render() {
    const { actionComponent, backgroundImage, contentComponent, scrollEnabled } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        {backgroundImage && <ImageBackground source={backgroundImage} style={styles.background} />}
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{ flex: 1 }}
          >
            <View style={styles.centerContent}>{contentComponent}</View>
          </KeyboardAwareScrollView>
          {actionComponent && <View style={styles.bottomContent}>{actionComponent}</View>}
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VeryLightGray,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topComponent: {
    marginTop: 80,
  },
  logo: {
    alignSelf: 'center',
  },
  appName: {
    alignSelf: 'center',
    fontFamily: Fonts.SharpSansExtrabold,
    fontSize: 32,
    letterSpacing: 3.2,
    marginTop: 12,
  },
  centerContent: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    marginBottom: 12,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
})

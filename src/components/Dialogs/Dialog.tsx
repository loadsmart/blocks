import React, { PureComponent } from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native'
import { Colors, Fonts } from '../../res'
import DialogBox from './DialogBox'
import { DismissibleModalProps } from './DismissibleModalProps'

export interface DialogProps extends DismissibleModalProps {
  image?: ImageSourcePropType
  imageStyle?: StyleProp<ImageStyle>
  title?: string
  titleStyle?: StyleProp<TextStyle>
  message?: string
  inputField?: JSX.Element
  buttons?: JSX.Element
}

export class Dialog extends PureComponent<DialogProps> {
  public render() {
    const { image, imageStyle, title, titleStyle, message, inputField, buttons } = this.props
    const buttonsMarginStyle = { marginTop: this.props.inputField ? 8 : 22 }

    return (
      <DialogBox {...this.props} dialogStyle={styles.box}>
        {image && <Image source={image} style={imageStyle} />}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
        {inputField && <View style={styles.inputField}>{inputField}</View>}
        {buttons && <View style={[styles.buttons, buttonsMarginStyle]}>{buttons}</View>}
      </DialogBox>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
  },
  title: {
    marginTop: 18,
    fontFamily: Fonts.SharpSansBold,
    fontSize: 18,
    color: Colors.Charcoal,
    textAlign: 'center',
  },
  message: {
    marginTop: 12,
    fontFamily: Fonts.SharpSansSemibold,
    fontSize: 14,
    color: Colors.Charcoal,
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
  },
  buttons: {
    width: '100%',
  },
})

import React, { PureComponent } from 'react'
import { Modal, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import { DismissibleModalProps } from './DismissibleModalProps'

interface Props extends DismissibleModalProps {
  dialogStyle?: ViewStyle
}

export default class DialogBox extends PureComponent<Props> {
  public render() {
    const { dialogStyle, children, onPressOutside } = this.props
    return (
      <Modal {...this.props} animationType={'fade'} transparent={true}>
        <TouchableWithoutFeedback onPress={onPressOutside}>
          <View style={styles.modal}>
            {/* this is needed to avoid outside view 'stealing' the tap from the dialog box */}
            <TouchableWithoutFeedback>
              <View style={[styles.box, dialogStyle]}>{children}</View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000C',
  },
  box: {
    width: 286,
    paddingHorizontal: 23,
    paddingVertical: 30,
    backgroundColor: '#EEE',
    borderRadius: 3,
  },
})

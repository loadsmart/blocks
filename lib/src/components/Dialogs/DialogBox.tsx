import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewProps, Modal } from 'react-native'

interface Props extends ViewProps {
  visible?: boolean
}

export default class DialogBox extends PureComponent<Props> {
  public render() {
    return (
      <Modal visible={this.props.visible} animationType={'fade'} transparent={true}>
        <View style={styles.modal}>
          <View style={[styles.box, this.props.style]}>{this.props.children}</View>
        </View>
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

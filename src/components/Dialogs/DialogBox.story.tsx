import React, { Component } from 'react'
import { storiesOf } from '@storybook/react-native'
import { DialogBox } from '@loadsmart/blocks'
import { Text, View, TouchableOpacity } from 'react-native'
import { CenterDecorator } from '../../decorators'

interface Props {}
interface State {
  modalVisible: boolean
}

storiesOf('Dialog', module)
  .addDecorator(CenterDecorator)
  .add('Box', () => {
    class ModalTrigger extends Component<Props, State> {
      constructor(props: Props, state: State) {
        super(props, state)
        this.state = { modalVisible: false }
      }

      toggleModal = () => {
        this.setState({ modalVisible: !!!this.state.modalVisible })
      }

      render() {
        return (
          <>
            <TouchableOpacity onPress={this.toggleModal.bind(this)}>
              <Text>Tap to open</Text>
            </TouchableOpacity>

            <DialogBox visible={this.state.modalVisible}>
              <Text style={{ fontWeight: 'bold' }}>This is a dialog box.</Text>
              <View style={{ height: 30 }} />
              <TouchableOpacity onPress={this.toggleModal.bind(this)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </DialogBox>
          </>
        )
      }
    }

    return <ModalTrigger />
  })

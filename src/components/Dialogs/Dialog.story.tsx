import React, { Component } from 'react'
import { storiesOf } from '@storybook/react-native'
import { Dialog, SecondaryButton, PrimaryButton, DialogBox } from '@loadsmart/blocks'
import { text } from '@storybook/addon-knobs'
import { View, TouchableOpacity, Text } from 'react-native'
import { Props, State } from './helpers'
import { CenterDecorator } from '../../decorators'

storiesOf('Dialog', module)
  .addDecorator(CenterDecorator)
  .add('Default', () => {
    class ModalTrigger extends Component<Props, State> {
      constructor(props: Props, state: State) {
        super(props, state)
        this.state = { modalVisible: false }
      }

      toggleModal = () => {
        this.setState({ modalVisible: !!!this.state.modalVisible })
      }

      render() {
        const title = text('Title', 'Hi. Are you ready to start driving to the port?')
        const buttons = (
          <View>
            <PrimaryButton title={'Start'} onPress={this.toggleModal} />
            <View style={{ height: 12 }} />
            <SecondaryButton title={'Cancel'} onPress={this.toggleModal} />
          </View>
        )

        return (
          <View>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text>Tap to open</Text>
            </TouchableOpacity>

            <Dialog
              visible={this.state.modalVisible}
              title={title}
              buttons={buttons}
              onPressOutside={this.toggleModal}
            />
          </View>
        )
      }
    }

    return <ModalTrigger />
  })

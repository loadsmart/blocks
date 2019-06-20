import React, { Component } from 'react'
import { View, ViewProps, TouchableWithoutFeedback } from 'react-native'
import { RadioSelectCell } from '../Cells/index'

interface Props extends ViewProps {
  items: string[]
  initialSelectionIndex?: number
  onSelect: (index: number) => void
}

interface State {
  selectedIndex: number | null
}

export default class RadioSelector extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = { selectedIndex: null }
  }

  public render() {
    return (
      <View style={this.props.style}>
        {this.props.items.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={this.selectItemAtIndex.bind(this, index)}
            >
              <View>
                <RadioSelectCell title={item} selected={this.isItemSelected(index)} />
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    )
  }

  private isItemSelected(index: number) {
    if (this.state.selectedIndex === null) {
      return this.props.initialSelectionIndex === index
    }

    return this.state.selectedIndex === index
  }

  private selectItemAtIndex(index: number) {
    this.setState({ ...this.state, selectedIndex: index })
    this.props.onSelect(index)
  }
}

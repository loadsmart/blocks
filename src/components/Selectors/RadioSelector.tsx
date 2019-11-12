import React, { Component } from 'react'
import { FlatList, TouchableWithoutFeedback, View, ViewProps } from 'react-native'
import { Colors } from '../../res'
import { RadioSelectCell } from '../Cells'

interface Props extends ViewProps {
  items: string[]
  initialSelectionIndex?: number
  onSelect?: (index: number) => void
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
    const { items, testID } = this.props
    return (
      <FlatList
        data={items}
        keyExtractor={(_, index) => `${index}`}
        extraData={this.state}
        renderItem={this.renderItem.bind(this)}
        showsVerticalScrollIndicator={false}
        style={this.props.style}
        ItemSeparatorComponent={this.renderSeparator.bind(this)}
        {...{ testID }}
      />
    )
  }

  private renderItem({ index, item }: { index: number; item: string }) {
    return (
      <TouchableWithoutFeedback key={index} onPress={this.selectItemAtIndex.bind(this, index)}>
        <View>
          <RadioSelectCell title={item} selected={this.isItemSelected(index)} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  private renderSeparator() {
    return <View style={{ backgroundColor: Colors.LightGray, height: 0.5, width: '100%' }} />
  }

  private isItemSelected(index: number) {
    if (this.state.selectedIndex === null) {
      return this.props.initialSelectionIndex === index
    }

    return this.state.selectedIndex === index
  }

  private selectItemAtIndex(index: number) {
    this.setState({ ...this.state, selectedIndex: index })

    const { onSelect } = this.props
    onSelect && onSelect(index)
  }
}

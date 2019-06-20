import React from 'react'
import renderer from 'react-test-renderer'
import { RadioSelector } from '../index'
import { RadioSelectCell } from '../../Cells/index'
import { TouchableWithoutFeedback } from 'react-native'

describe('RadioSelector', () => {
  it('renders a list of items', () => {
    const items = ['item 0', 'item 1', 'item 2']
    const testRenderer = renderer.create(<RadioSelector items={items} />)
    const cells = testRenderer.root.findAllByType(RadioSelectCell)

    expect(cells).toHaveLength(3)
    expect(cells[0].props.title).toBe('item 0')
    expect(cells[1].props.title).toBe('item 1')
    expect(cells[2].props.title).toBe('item 2')
  })

  it('sets a initial selection', () => {
    const items = ['item 0', 'item 1', 'item 2']
    const testRenderer = renderer.create(<RadioSelector items={items} initialSelectionIndex={1} />)
    const cells = testRenderer.root.findAllByType(RadioSelectCell)

    expect(cells[0].props.selected).toBeFalsy()
    expect(cells[1].props.selected).toBeTruthy()
    expect(cells[2].props.selected).toBeFalsy()
  })

  it('calls back when item is selected', () => {
    const items = ['item 0', 'item 1', 'item 2']

    let selectedIndex = -1
    const onSelect = (index: number) => {
      selectedIndex = index
    }

    const testRenderer = renderer.create(<RadioSelector items={items} onSelect={onSelect} />)
    const touchables = testRenderer.root.findAllByType(TouchableWithoutFeedback)
    const secondCell = touchables[1]

    secondCell.props.onPress()

    expect(selectedIndex).toBe(1)
  })
})

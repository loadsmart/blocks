import React from 'react'
import renderer from 'react-test-renderer'
import RadioSelectCell from '../RadioSelectCell'
import { Text } from 'react-native'

describe('RadioSelectCell', () => {
  it('has a title', () => {
    const testRenderer = renderer.create(<RadioSelectCell title="Walter White" />)
    const title = testRenderer.root.findByType(Text)
    expect(title.props.children).toBe('Walter White')
  })

  it('matches snapshot when selected', () => {
    const testRenderer = renderer.create(<RadioSelectCell title="Walter White" selected />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('matches snapshot when not selected', () => {
    const testRenderer = renderer.create(<RadioSelectCell title="Walter White" />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})

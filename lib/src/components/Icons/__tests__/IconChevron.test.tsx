import React from 'react'
import renderer from 'react-test-renderer'
import IconChevron from '../IconChevron'

describe('IconChevron', () => {
  it('matches snapshot for default color', () => {
    const testRenderer = renderer.create(<IconChevron />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('matches snapshot for custom color', () => {
    const testRenderer = renderer.create(<IconChevron tintColor={'red'} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})

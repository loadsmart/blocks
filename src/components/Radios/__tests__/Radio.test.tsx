import React from 'react'
import renderer from 'react-test-renderer'
import Radio from '../Radio'

describe('Radio', () => {
  it('matches snapshot when selected', () => {
    const testRenderer = renderer.create(<Radio selected={true} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('matches snapshot when not selected', () => {
    const testRenderer = renderer.create(<Radio selected={false} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import LogoBig from '../LogoBig'
import { Text } from 'react-native'

describe('LogoBig', () => {
  it('matches snapshot for custom logo color', () => {
    const testRenderer = renderer.create(<LogoBig logoColor={'blue'} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('has an app name in uppercase', () => {
    const testRenderer = renderer.create(<LogoBig appName={'driver'} />)
    const appName = testRenderer.root.findByType(Text)
    expect(appName.props.children).toBe('DRIVER')
  })

  it('matches snapshot for custom appName color', () => {
    const testRenderer = renderer.create(<LogoBig appNameColor={'red'} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})

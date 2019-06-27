import React from 'react'
import renderer from 'react-test-renderer'
import TitleValueCell from '../TitleValueCell'
import { Images } from '../../../res'
import { Image, Text } from 'react-native'

describe('TitleValueCell', () => {
  it('has an icon if passed', () => {
    const props = {
      icon: Images.Warning,
      title: 'Loadsmart #',
      value: '9123713',
    }
    const testRenderer = renderer.create(<TitleValueCell {...props} />)
    const icon = testRenderer.root.findByType(Image)
    expect(icon.props.source).toBe(Images.Warning)
  })

  it('has a title', () => {
    const props = {
      title: 'Loadsmart #',
      value: '9123713',
    }
    const testRenderer = renderer.create(<TitleValueCell {...props} />)
    const text = testRenderer.root
      .findAllByType(Text)
      .map(el => (el.props.children as any) as string)

    expect(text).toContain('Loadsmart #')
  })

  it('has a value', () => {
    const props = {
      title: 'Loadsmart #',
      value: '9123713',
    }
    const testRenderer = renderer.create(<TitleValueCell {...props} />)
    const text = testRenderer.root
      .findAllByType(Text)
      .map(el => (el.props.children as any) as string)

    expect(text).toContain('9123713')
  })

  it('has a chevron if passed', () => {
    const props = {
      title: 'Loadsmart #',
      value: '9123713',
      hasChevron: true,
    }
    const testRenderer = renderer.create(<TitleValueCell {...props} />)
    const chevron = testRenderer.root.findByType(Image)
    expect(chevron.props.source).toBe(Images.Chevron)
  })
})

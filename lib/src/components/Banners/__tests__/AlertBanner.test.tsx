import React from 'react'
import renderer from 'react-test-renderer'
import AlertBanner from '../AlertBanner'
import { Image, Text, TouchableWithoutFeedback } from 'react-native'
import { Images } from '../../../res/'
import { BannerDisplayStyle } from '../BannerProps'

describe('AlertBanner', () => {
  it('has an icon', () => {
    const testRenderer = renderer.create(<AlertBanner message={'hello'} />)
    const icon = testRenderer.root.findByType(Image)
    expect(icon.props.source).toBe(Images.Warning)
  })

  it('has the title I passed', () => {
    const testRenderer = renderer.create(<AlertBanner message={'hello'} />)
    const title = testRenderer.root.findByType(Text)
    expect(title.props.children).toBe('hello')
  })

  it('renders for warning style', () => {
    const testRenderer = renderer.create(
      <AlertBanner message={'hello'} displayStyle={BannerDisplayStyle.Warning} />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('renders for error style', () => {
    const testRenderer = renderer.create(
      <AlertBanner message={'hello'} displayStyle={BannerDisplayStyle.Error} />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('executes onPress callback', () => {
    const onPressCallback = jest.fn()
    const testRenderer = renderer.create(
      <AlertBanner message={'hello'} onPress={onPressCallback} />
    )

    const touchable = testRenderer.root.findByType(TouchableWithoutFeedback)
    touchable.props.onPress()

    expect(onPressCallback).toBeCalledTimes(1)
  })
})

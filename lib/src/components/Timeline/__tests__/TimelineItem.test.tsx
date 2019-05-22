import React from 'react'
import renderer from 'react-test-renderer'
import TimelineItem, { TimelineItemProps } from '../TimelineItem'
import { View, Image } from 'react-native'
import { Images } from '../../../res'

describe('TimelineItem', () => {
  let testRenderer: renderer.ReactTestRenderer

  describe('progress', () => {})

  describe('title', () => {
    it('has the title I passed', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      const title = testRenderer.root.findByProps({ children: 'Confirm check in' })
      expect(title).not.toBeUndefined()
    })
  })

  describe('check mark', () => {
    it('renders a check mark if completed', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        isCompleted: true,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      const checkMark = testRenderer.root.findByType(Image)

      expect(checkMark).not.toBeUndefined()
      expect(checkMark.props.source).toBe(Images.SmallCheck)
    })

    it('does not render a check mark if not completed yet', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        isCompleted: false,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      expect(() => {
        testRenderer.root.findByType(Image)
      }).toThrow()
    })
  })

  describe('instructions', () => {
    it('renders the instruction I passed if isActive is true', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        instructions: 'Make sure to collect all required documents',
        isActive: true,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      const instructions = testRenderer.root.findByProps({
        children: 'Make sure to collect all required documents',
      })

      expect(instructions).not.toBeUndefined()
    })

    it('does not render the instruction I passed if isActive is false', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        instructions: 'Make sure to collect all required documents',
        isActive: false,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      expect(() => {
        testRenderer.root.findByProps({
          children: 'Make sure to collect all required documents',
        })
      }).toThrow()
    })
  })

  describe('body', () => {
    const DummyComponent = () => <View />

    it('renders the body I passed if isActive is true', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        body: <DummyComponent />,
        isActive: true,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      const body = testRenderer.root.findByType(DummyComponent)

      expect(body).not.toBeUndefined()
    })

    it('does not render the body I passed if isActive is false', () => {
      const props: TimelineItemProps = {
        title: 'Confirm check in',
        body: <DummyComponent />,
        isActive: false,
      }
      testRenderer = renderer.create(<TimelineItem {...props} />)

      expect(() => {
        testRenderer.root.findByType(DummyComponent)
      }).toThrow()
    })
  })
})

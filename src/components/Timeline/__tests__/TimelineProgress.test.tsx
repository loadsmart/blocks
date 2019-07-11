import React from 'react'
import renderer from 'react-test-renderer'
import { LineStyle, TimelineProgress } from '../TimelineProgress'

//TODO better to test this check styles?
describe('TimelineProgress', () => {
  describe('topPart', () => {
    it('can be visible', () => {
      const testRenderer = renderer.create(<TimelineProgress topPartVisible={true} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be invisible', () => {
      const testRenderer = renderer.create(<TimelineProgress topPartVisible={false} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be filled', () => {
      const testRenderer = renderer.create(
        <TimelineProgress topPartVisible={true} topPartStyle={LineStyle.Filled} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be empty', () => {
      const testRenderer = renderer.create(
        <TimelineProgress topPartVisible={true} topPartStyle={LineStyle.Empty} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('marker', () => {
    it('can be filled', () => {
      const testRenderer = renderer.create(<TimelineProgress markerStyle={LineStyle.Filled} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be empty', () => {
      const testRenderer = renderer.create(<TimelineProgress markerStyle={LineStyle.Empty} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('bottomPart', () => {
    it('can be visible', () => {
      const testRenderer = renderer.create(<TimelineProgress bottomPartVisible={true} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be invisible', () => {
      const testRenderer = renderer.create(<TimelineProgress bottomPartVisible={false} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be filled', () => {
      const testRenderer = renderer.create(
        <TimelineProgress bottomPartVisible={true} bottomPartStyle={LineStyle.Filled} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('can be empty', () => {
      const testRenderer = renderer.create(
        <TimelineProgress bottomPartVisible={true} bottomPartStyle={LineStyle.Empty} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})

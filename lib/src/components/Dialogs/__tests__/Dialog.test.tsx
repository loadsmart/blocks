import React from 'react'
import { Image, Text } from 'react-native'
import renderer from 'react-test-renderer'
import { Dialog, DialogProps } from '../Dialog'
import DialogBox from '../DialogBox'
import { Images } from '../../../res'
import { TextInput } from '../../TextInputs/index'
import { PrimaryButton, SecondaryButton } from '../../Buttons/index'

describe('Dialog', () => {
  it('renders a dialog box', () => {
    const testRenderer = renderer.create(<Dialog />)
    const box = testRenderer.root.findByType(DialogBox)
    expect(box).not.toBeUndefined()
  })

  it('renders an image if passed as prop', () => {
    const props: DialogProps = {
      image: Images.Warning,
    }
    const testRenderer = renderer.create(<Dialog {...props} />)
    const image = testRenderer.root.findByType(Image)
    expect(image.props.source).toBe(Images.Warning)
  })

  it('renders a tittle if passed as prop', () => {
    const props: DialogProps = {
      title: 'Ready to drive?',
    }
    const testRenderer = renderer.create(<Dialog {...props} />)
    const title = testRenderer.root.findByType(Text)
    expect(title.props.children).toBe('Ready to drive?')
  })

  it('renders a message if passed as prop', () => {
    const props: DialogProps = {
      message: 'Make sure to turn you tracking on',
    }
    const testRenderer = renderer.create(<Dialog {...props} />)
    const title = testRenderer.root.findByType(Text)
    expect(title.props.children).toBe('Make sure to turn you tracking on')
  })

  it('renders an input field if passed as prop', () => {
    const props: DialogProps = {
      inputField: <TextInput />,
    }
    const testRenderer = renderer.create(<Dialog {...props} />)
    const input = testRenderer.root.findByType(TextInput)
    expect(input).not.toBeUndefined()
  })

  it('renders buttons if passed as prop', () => {
    const props: DialogProps = {
      buttons: (
        <>
          <PrimaryButton title={'Confirm'} />
          <SecondaryButton title={'Cancel'} />
        </>
      ),
    }
    const testRenderer = renderer.create(<Dialog {...props} />)
    const confirmButton = testRenderer.root.findByType(PrimaryButton)
    const cancelButton = testRenderer.root.findByType(SecondaryButton)

    expect(confirmButton.props.title).toBe('Confirm')
    expect(cancelButton.props.title).toBe('Cancel')
  })
})

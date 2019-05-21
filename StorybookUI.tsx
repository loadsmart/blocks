import { configure, getStorybookUI, addDecorator } from '@storybook/react-native'
import { loadStories } from './storyLoader'

import './rn-addons'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const StorybookUI = getStorybookUI({ port: 9001, host: 'localhost' })

configure(() => {
  loadStories()
}, module)

export default StorybookUI

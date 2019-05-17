import { ViewProps, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native'

export enum ButtonDisplayState {
  Normal,
  Disabled,
  Loading,
}

export enum ButtonHeight {
  Regular = 50,
  Short = 42,
}

export interface ButtonProps extends ViewProps {
  icon?: ImageSourcePropType
  iconStyle?: StyleProp<ImageStyle>
  title: string
  buttonHeight?: ButtonHeight
  displayState?: ButtonDisplayState
  onPress?: () => void
}

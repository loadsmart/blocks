import { ImageSourcePropType, ImageStyle, StyleProp, ViewProps } from 'react-native'

export enum ButtonDisplayState {
  Normal,
  Disabled,
  Loading,
}

export enum ButtonHeight {
  Regular = 50,
  Short = 42,
}

export enum ButtonDisplayStyle {
  Dark,
  Light,
}

export interface ButtonProps extends ViewProps {
  icon?: ImageSourcePropType
  iconStyle?: StyleProp<ImageStyle>
  title: string
  buttonHeight?: ButtonHeight
  displayState?: ButtonDisplayState
  displayStyle?: ButtonDisplayStyle
  onPress?: () => void
}

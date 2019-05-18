import { ViewProps, ImageSourcePropType } from 'react-native'

export enum BannerDisplayStyle {
  Warning,
  Error,
}

export interface BannerProps extends ViewProps {
  displayStyle?: ImageSourcePropType
  message: string
  onPress?: () => void
}

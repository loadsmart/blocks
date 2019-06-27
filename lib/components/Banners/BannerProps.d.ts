import { ImageSourcePropType, ViewProps } from 'react-native'
export declare enum BannerDisplayStyle {
  Warning = 0,
  Error = 1,
}
export interface BannerProps extends ViewProps {
  displayStyle?: ImageSourcePropType
  message: string
  onPress?: () => void
}

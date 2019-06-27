import { ViewProps, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native';
export declare enum ButtonDisplayState {
    Normal = 0,
    Disabled = 1,
    Loading = 2
}
export declare enum ButtonHeight {
    Regular = 50,
    Short = 42
}
export interface ButtonProps extends ViewProps {
    icon?: ImageSourcePropType;
    iconStyle?: StyleProp<ImageStyle>;
    title: string;
    buttonHeight?: ButtonHeight;
    displayState?: ButtonDisplayState;
    onPress?: () => void;
}

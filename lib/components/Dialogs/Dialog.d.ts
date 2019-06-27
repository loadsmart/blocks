import { PureComponent } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle } from 'react-native';
import { DismissibleModalProps } from './DismissibleModalProps';
export interface DialogProps extends DismissibleModalProps {
    image?: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    message?: string;
    inputField?: JSX.Element;
    buttons?: JSX.Element;
}
export declare class Dialog extends PureComponent<DialogProps> {
    render(): JSX.Element;
}

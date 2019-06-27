import { ComponentProps, PureComponent } from 'react';
import { StyleProp, TextStyle, ImageSourcePropType } from 'react-native';
interface Props extends ComponentProps<any> {
    icon?: ImageSourcePropType;
    title: string;
    value: string;
    hasChevron?: boolean;
    valueStyle?: StyleProp<TextStyle>;
}
export default class TitleValueCell extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};

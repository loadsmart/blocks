import { PureComponent } from 'react';
import { ViewProps } from 'react-native';
export declare enum LineStyle {
    Empty = 0,
    Filled = 1
}
interface Props extends ViewProps {
    topPartStyle?: LineStyle;
    topPartVisible?: boolean;
    markerStyle?: LineStyle;
    bottomPartStyle?: LineStyle;
    bottomPartVisible?: boolean;
}
export declare class TimelineProgress extends PureComponent<Props> {
    static defaultProps: {
        topPartStyle: LineStyle;
        topPartVisible: boolean;
        markerStyle: LineStyle;
        bottomPartStyle: LineStyle;
        bottomPartVisible: boolean;
    };
    render(): JSX.Element;
    private lineStyleToColor;
}
export {};

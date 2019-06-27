import { Component } from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    items: string[];
    initialSelectionIndex?: number;
    onSelect?: (index: number) => void;
}
interface State {
    selectedIndex: number | null;
}
export default class RadioSelector extends Component<Props, State> {
    constructor(props: Props, state: State);
    render(): JSX.Element;
    private isItemSelected;
    private selectItemAtIndex;
}
export {};

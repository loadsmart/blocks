import { PureComponent } from 'react';
export interface TimelineItemProps {
    title: string;
    instructions?: string;
    body?: JSX.Element;
    isActive?: boolean;
    isCompleted?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}
export declare class TimelineItem extends PureComponent<TimelineItemProps> {
    render(): JSX.Element;
}

import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Colors } from '../../res'

const lineWidth = 4
const topPartHeight = 16
const markerDiameter = 16

export enum LineStyle {
  Empty,
  Filled,
}

interface Props extends ViewProps {
  topPartStyle?: LineStyle
  topPartVisible?: boolean
  markerStyle?: LineStyle
  bottomPartStyle?: LineStyle
  bottomPartVisible?: boolean
}

export default class TimelineProgress extends PureComponent<Props> {
  static defaultProps = {
    topPartStyle: LineStyle.Filled,
    topPartVisible: true,
    markerStyle: LineStyle.Filled,
    bottomPartStyle: LineStyle.Filled,
    bottomPartVisible: true,
  }

  public render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View
          accessibilityLabel={'progress top line'}
          style={[
            styles.topPart,
            {
              backgroundColor: this.lineStyleToColor(this.props.topPartStyle),
              opacity: this.props.topPartVisible ? 1 : 0,
            },
          ]}
        />
        <View
          style={[
            styles.marker,
            { backgroundColor: this.lineStyleToColor(this.props.markerStyle) },
          ]}
        />
        <View
          style={[
            styles.bottomPart,
            {
              backgroundColor: this.lineStyleToColor(this.props.bottomPartStyle),
              opacity: this.props.bottomPartVisible ? 1 : 0,
            },
          ]}
        />
      </View>
    )
  }

  private lineStyleToColor(style?: LineStyle) {
    return style === LineStyle.Empty ? Colors.LightGray : Colors.AlgaeGreen
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 2 * topPartHeight + markerDiameter,
  },
  topPart: {
    height: 16,
    width: lineWidth,
    zIndex: 3,
  },
  marker: {
    height: markerDiameter,
    width: markerDiameter,
    borderRadius: markerDiameter / 2.0,
    zIndex: 2,
  },
  bottomPart: {
    flex: 2,
    width: lineWidth,
    zIndex: 1,
  },
})

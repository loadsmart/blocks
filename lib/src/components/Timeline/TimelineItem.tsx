import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ProgressLine, { LineStyle } from './TimelineProgress'
import { Colors, Fonts, Images } from '../../res'

export interface TimelineItemProps {
  title: string
  instructions?: string
  body?: JSX.Element
  isActive?: boolean
  isCompleted?: boolean
  isFirst?: boolean
  isLast?: boolean
}

export default class TimelineItem extends PureComponent<TimelineItemProps> {
  public render() {
    const { isActive, isCompleted, isFirst, isLast } = this.props
    const styles = stylesFromProps(this.props)

    return (
      <View style={styles.wrapper}>
        <ProgressLine
          style={styles.progressLine}
          topPartVisible={isFirst !== true}
          bottomPartVisible={isLast !== true}
          topPartStyle={!isCompleted && !isActive ? LineStyle.Empty : LineStyle.Filled}
          markerStyle={!isCompleted && !isActive ? LineStyle.Empty : LineStyle.Filled}
          bottomPartStyle={isCompleted ? LineStyle.Filled : LineStyle.Empty}
        />
        <View style={styles.content}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.isCompleted && (
              <Image source={Images.SmallCheck} style={styles.titleCheckMark} />
            )}
          </View>
          {this.props.isActive && this.props.instructions && (
            <Text style={styles.instructions}>{this.props.instructions}</Text>
          )}

          {this.props.isActive && this.props.body && (
            <View style={styles.body}>{this.props.body}</View>
          )}
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
}

const stylesFromProps = (props: TimelineItemProps) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      minHeight: 50,
      backgroundColor: props.isActive === true ? Colors.White : Colors.VeryLightGray,
    },
    progressLine: {
      width: 50,
    },
    content: {
      flex: 1,
      paddingVertical: 15,
    },
    titleWrapper: {
      flexDirection: 'row',
    },
    title: {
      fontFamily: props.isActive === true ? Fonts.SharpSansBold : Fonts.SharpSansMedium,
      fontSize: 15,
      color: Colors.Charcoal,
    },
    titleActive: {
      fontFamily: Fonts.SharpSansBold,
    },
    titleCheckMark: {
      marginLeft: 8,
      marginTop: -2,
    },
    instructions: {
      fontFamily: Fonts.SharpSansMedium,
      fontSize: 15,
      color: Colors.Charcoal,
      marginTop: 8,
      marginRight: 12,
    },
    body: {
      marginTop: 8,
      marginRight: 12,
    },
    separator: {
      height: 3,
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: Colors.LightGray,
      borderBottomWidth: 1,
      borderBottomColor: Colors.White,
      position: 'absolute',
      bottom: 0,
      zIndex: -1,
    },
  })
}

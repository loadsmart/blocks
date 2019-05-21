import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ProgressLine, { LineStyle } from './TimelineProgress'
import { Colors, Fonts, Images } from '../../res'

interface TimelineItemProps {
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
    const extraWrapperStyle = {
      backgroundColor: this.props.isActive === true ? Colors.White : Colors.VeryLightGray,
    }

    const extraTitleStyle = {
      fontFamily: this.props.isActive === true ? Fonts.SharpSansBold : Fonts.SharpSansMedium,
    }

    let topPartStyle: LineStyle, markerStyle: LineStyle, bottomPartStyle: LineStyle
    if (this.props.isCompleted) {
      topPartStyle = markerStyle = bottomPartStyle = 'filled'
    } else if (this.props.isActive) {
      topPartStyle = markerStyle = 'filled'
      bottomPartStyle = 'empty'
    } else {
      topPartStyle = markerStyle = bottomPartStyle = 'empty'
    }

    return (
      <View style={[styles.wrapper, extraWrapperStyle]}>
        <ProgressLine
          style={styles.progressLine}
          topPartVisible={this.props.isFirst !== true}
          bottomPartVisible={this.props.isLast !== true}
          topPartStyle={topPartStyle}
          markerStyle={markerStyle}
          bottomPartStyle={bottomPartStyle}
        />
        <View style={styles.content}>
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, extraTitleStyle]}>{this.props.title}</Text>
            {this.props.isCompleted && (
              <Image source={Images.SmallCheck} style={styles.titleCheckmark} />
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

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    minHeight: 50,
    backgroundColor: Colors.White,
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
    fontFamily: Fonts.SharpSansMedium,
    fontSize: 15,
    color: Colors.Charcoal,
  },
  titleActive: {
    fontFamily: Fonts.SharpSansBold,
  },
  titleCheckmark: {
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
    borderTopColor: '#D5D5D5',
    borderBottomWidth: 1,
    borderBottomColor: Colors.White,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
})

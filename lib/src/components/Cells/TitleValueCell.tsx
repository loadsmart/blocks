import React, { ComponentProps, PureComponent } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ImageSourcePropType,
  Image,
} from 'react-native'
import { Colors, Fonts } from '../../res'
import { IconChevron } from '../Icons'

interface Props extends ComponentProps<any> {
  icon?: ImageSourcePropType
  title: string
  value: string
  hasChevron?: boolean
  valueStyle?: StyleProp<TextStyle>
}

export default class TitleValueCell extends PureComponent<Props> {
  public render() {
    const { icon, title, value, hasChevron, style, valueStyle } = this.props
    return (
      <View style={[styles.container, style]}>
        <View style={styles.titleWrapper}>
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.value, valueStyle]}>{value}</Text>
          {hasChevron && <IconChevron style={styles.chevron} />}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    backgroundColor: Colors.White,
    paddingHorizontal: 12,
    marginTop: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 8,
    tintColor: Colors.Charcoal,
  },
  title: {
    fontFamily: Fonts.SharpSansMedium,
    fontSize: 15,
    color: Colors.Charcoal,
  },
  value: {
    fontFamily: Fonts.SharpSansMedium,
    fontSize: 15,
    color: Colors.BrownGreyThree,
    alignItems: 'center',
  },
  chevron: {
    marginLeft: 8,
  },
})

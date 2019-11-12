import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Colors } from '../../res'
import { ThemeContext } from '../Contexts'

interface Props extends ViewProps {
  selected?: boolean
}

export default class Radio extends PureComponent<Props> {
  public render() {
    const { selected, testID } = this.props
    return (
      <ThemeContext.Consumer>
        {theme => {
          const isSelected = selected === true
          const color = isSelected ? theme.primaryColor : Colors.Tuna
          return (
            <View
              style={[styles.outerCircle, this.props.style, { borderColor: color }]}
              {...{ testID }}
            >
              {isSelected && <View style={[styles.innerCircle, { backgroundColor: color }]} />}
            </View>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  outerCircle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
})

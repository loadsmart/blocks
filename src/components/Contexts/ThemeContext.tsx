import React from 'react'
import { Colors } from '../../res'

export interface Theme {
  primaryColor: string
}

export const ThemeContext = React.createContext<Partial<Theme>>({
  primaryColor: Colors.AlgaeGreen,
})

import { CssBaseline, ThemeProvider } from '@mui/material'
import { purpleTheme } from './purpleTheme'
import React from 'react'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
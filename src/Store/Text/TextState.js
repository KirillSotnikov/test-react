import React, { useReducer } from 'react'

import { TextContext } from './TextContext'
import { TextReducer } from './TextReducer'
import { SET_TEXT } from '../types'

export const TextState = ({ children }) => {
  const initialState = {
    text: ''
  }

  const [state, dispatch] = useReducer(TextReducer, initialState)

  const setText = (text) => {
    dispatch(text)
  }

  return (
    <TextContext.Provider value={{
      text: state.text
    }}>
      {children}
    </TextContext.Provider>
  )
}
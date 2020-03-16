import React, { useReducer } from 'react'

import { Context } from './Context'
import { Reducer } from './Reducer'
import { SET_TEXT } from '../types'

export const State = ({ children }) => {
  const initialState = {
    text: ''
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const setText = (text) => {
    dispatch({
      type: SET_TEXT,
      text
    })
  }

  return (
    <Context.Provider value={{
      text: state.text,
      setText
    }}>
      {children}
    </Context.Provider>
  )
}
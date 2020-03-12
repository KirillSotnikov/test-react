import React from 'react'
import { Form } from '../Components/ToDo/Form'
import { TextView } from '../Components/ToDo/TextView'
import { ListContext } from '../Store/list'

const list = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const TodoList = () => {
  return (
    <ListContext.Provider value={list}>
      <div className="container">
        <h3>ToDo List</h3>
        <Form />

        <TextView />
      </div>
    </ListContext.Provider>
  )
}
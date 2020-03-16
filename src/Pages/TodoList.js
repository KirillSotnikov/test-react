import React, {useContext} from 'react'
import { Form } from '../Components/ToDo/Form'
import { TextView } from '../Components/ToDo/TextView'

import { Context } from '../Store/Context/Context'


export const TodoList = () => {
  const { text, setText } = useContext(Context)

  return (
    <div className="container">
      <h3>ToDo React List</h3>
      <Form setText={setText} />

      <TextView text={text} />
    </div>
  )
}
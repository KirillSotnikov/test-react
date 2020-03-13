import React, {useContext} from 'react'
import { Form } from '../Components/ToDo/Form'
import { TextView } from '../Components/ToDo/TextView'

import { TextState } from '../Store/Text/TextState'
import { TextContext } from '../Store/Text/TextContext'


export const TodoList = () => {
  const { text, setText } = useContext(TextContext)
  return (
    <TextState>
      <div className="container">
        <h3>ToDo React List</h3>
        <Form setText={setText} />

        <TextView text={text} />
      </div>
    </TextState>
  )
}
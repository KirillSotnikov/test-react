import React, {useState} from 'react'

const inputStyle = {
  maxWidth: '350px'
}

export const Form = ({setText}) => {

  const [value, setValue] = useState('')

  const changeHandler = (e) => {
    const value = e.target.value
    
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( value.trim() ) {
      setText(value)
    } else {
      const isConfirm = window.confirm('Text is empty, are you ready?')
      if(isConfirm) {
        setText(value)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-group mt-1">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Create ToDo"
          style={inputStyle}
          onChange={(e) => changeHandler(e)}
        />
        <button
          type="submit"
          className="btn btn-outline-success"
        >
          Submit
        </button>
      </form>
    </>
  )
}
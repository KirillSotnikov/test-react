import React, {useState} from 'react'

const inputStyle = {
  maxWidth: '350px'
}

export const Form = () => {

  const [text, setText] = useState('')

  const changeHandler = (e) => {
    const value = e.target.value
    
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( text.trim() ) {
      console.log(text);
    } else {
      alert('Text is empty')
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
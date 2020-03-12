import React, {useState} from 'react'

export const Counter = ({initialCount}) => {

  const [count, setCount] = useState(initialCount)

  return (
    <>
      Count: {count}
      <br/>
      <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
      <button onClick={() => setCount(initialCount)}>clear</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
    </>
  )
}
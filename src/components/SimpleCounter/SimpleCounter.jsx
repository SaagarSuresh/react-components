import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0)

  return (
    <>
        <button onClick = {() => setCount((count) => count - 1)}>-</button>
        <span>{count}</span>
        <button onClick = {() => setCount((count) => count + 1)}>+</button>
    </>

  )
}

export default SimpleCounter

import React from 'react'

const App = () => {
    const title = "I am title "
    const paragraph = "hey, there i am the paragraph "
  return (
    <div>
      <h1> Hello , I am back at it </h1>
      <h2 style={{'marginLeft':"50px"}}>{title}</h2>
      <h3> {paragraph}</h3>
    </div>
  )
}

export default App

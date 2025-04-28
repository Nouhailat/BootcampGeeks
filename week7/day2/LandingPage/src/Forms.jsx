import React, { useState } from 'react'

function Forms() {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [errormessage, setErrormessage] = useState('')
  const [textareaValue, setTextareaValue] = useState('This is initial content')
  const [car, setCar] = useState('Volvo')

  // Conditional header (Part II)
  let header = null
  if (username || age) {
    header = <h3>Hello {username}{age ? `, age ${age}` : ''}!</h3>
  }

  // Submit handler (Part III)
  const mySubmitHandler = (e) => {
    e.preventDefault()
    alert(`Username: ${username}, Age: ${age}`)
  }

  // Handlers Part I, IV, V
  const handleNameChange = (e) => setUsername(e.target.value)
  const handleAgeChange = (e) => {
    const val = e.target.value
    if (val && !/^[0-9]+$/.test(val)) {
      setErrormessage('Your age must be a number')
    } else {
      setErrormessage('')
      setAge(val)
    }
  }

  return (
    <div>
      {header}
      <form onSubmit={mySubmitHandler}>
        <div>
          <label>Name: </label>
          <input name="username" value={username} onChange={handleNameChange} />
        </div>
        <div>
          <label>Age: </label>
          <input name="age" value={age} onChange={handleAgeChange} />
        </div>
        {errormessage && <p style={{ color: 'red' }}>{errormessage}</p>}
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        <label>Comments:</label><br/>
        <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} rows={4} cols={50} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Choose a car: </label>
        <select value={car} onChange={(e) => setCar(e.target.value)}>
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
        <p>Selected car: {car}</p>
      </div>
    </div>
  )
}

export default Forms

import { useState } from 'react'

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Book Form</h2>
          <div>
            <label>Title:</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Author:</label>
            <input 
              type="text" 
              name="author" 
              value={formData.author} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Year:</label>
            <input 
              type="number" 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Genre:</label>
            <input 
              type="text" 
              name="genre" 
              value={formData.genre} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Form submitted successfully!</h3>
          <p>Title: {formData.title}</p>
          <p>Author: {formData.author}</p>
          <p>Year: {formData.year}</p>
          <p>Genre: {formData.genre}</p>
        </div>
      )}
    </div>
  )
}

export default BookForm
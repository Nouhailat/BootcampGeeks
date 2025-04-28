import { useState } from 'react'

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })
  const [showForm, setShowForm] = useState(true)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setShowForm(false)
    }
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    })
    setShowForm(true)
    setErrors({})
  }

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <h2>User Information</h2>
          <div>
            <label>First Name:</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            {errors.firstName && <span style={{color: 'red'}}>{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name:</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
            {errors.lastName && <span style={{color: 'red'}}>{errors.lastName}</span>}
          </div>
          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              pattern="\d{10}"
            />
            {errors.phone && <span style={{color: 'red'}}>{errors.phone}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Submitted Information</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Phone: {formData.phone}</p>
          <p>Email: {formData.email}</p>
          <button onClick={handleReset}>Reset Form</button>
        </div>
      )}
    </div>
  )
}

export default UserForm
import React, { useState } from 'react'
import { Modal, Box, TextField, Button } from '@mui/material'

const ReferralModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  })

  const [validationErrors, setValidationErrors] = useState({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setValidationErrors({
      ...validationErrors,
      [e.target.name]: ''
    })
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.referrerName)
      errors.referrerName = 'Please enter Referrer Name'
    if (!formData.referrerEmail)
      errors.referrerEmail = 'Please enter Referrer Email'
    if (!formData.refereeName) errors.refereeName = 'Please enter Referee Name'
    if (!formData.refereeEmail)
      errors.refereeEmail = 'Please enter Referee Email'
    if (!formData.course) errors.course = 'Please enter Course'

    return errors
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setError('Please fill in all required fields')
      return
    }

    const url = 'https://accredian-backend-task-dv4x.onrender.com/api'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log(response)
      alert('Referral submitted successfully! and sent a mail')
      setError('')
      console.log(data)
      closeModal()
    } catch (error) {
      setError('Error submitting referral. Please try again.')
      setSuccess('')
      console.error(error)
    }
  }

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box className='modal-box p-6 bg-white rounded-md shadow-md'>
        <h2 className='text-2xl mb-4'>Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Your Name'
            name='referrerName'
            value={formData.referrerName}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
            error={!!validationErrors.referrerName}
            helperText={validationErrors.referrerName}
          />
          <TextField
            label='Your Email'
            name='referrerEmail'
            value={formData.referrerEmail}
            onChange={handleChange}
            fullWidth
            margin='normal'
            type='email'
            required
            error={!!validationErrors.referrerEmail}
            helperText={validationErrors.referrerEmail}
          />
          <TextField
            label="Friend's Name"
            name='refereeName'
            value={formData.refereeName}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
            error={!!validationErrors.refereeName}
            helperText={validationErrors.refereeName}
          />
          <TextField
            label="Friend's Email"
            name='refereeEmail'
            value={formData.refereeEmail}
            onChange={handleChange}
            fullWidth
            margin='normal'
            type='email'
            required
            error={!!validationErrors.refereeEmail}
            helperText={validationErrors.refereeEmail}
          />
          <TextField
            label='Course'
            name='course'
            value={formData.course}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
            error={!!validationErrors.course}
            helperText={validationErrors.course}
          />
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
      </Box>
    </Modal>
  )
}

export default ReferralModal

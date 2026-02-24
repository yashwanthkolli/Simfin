import { useState } from 'react';
import Button from '../../ui/Button/Button';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ContactForm.styles.scss'
import Input from '../../ui/Input/Input';

const ContactForm = () => {
  const formRef = useReveal(fadeInUp, { delay: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // setLoading(true)
    console.log(formData)
    // try {
    //   const response = await fetch("https://formspree.io/f/mqalyavo", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       email: formData.email,
    //       service: formData.service,
    //       message: formData.message
    //     }),
    //   });

    //   if (response.ok) {
    //     setSuccess(true);
    //     setFormData({ 
    //     name: '',
    //     email: '',
    //     service: '',
    //     message: ''
    //     });
    //   } else {
    //       const errorData = await response.json();
    //       setError(errorData.message || 'Something went wrong.');
    //   }
    // } catch (err) {
    //   setError('Submission failed. Try again later.');
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <div className='contact-form-container reveal reveal-up' ref={formRef}>
      <div className='contact-form'>
        <form className='form-data' onSubmit={handleSubmit} autoComplete='on'>
          <div className='row'>
            <Input 
              label='Name'
              placeholder='Your Name'
              required={true} 
              value={formData.name}
              onChange={handleChange}
              name='name'
              width='48%'
            />
            <Input 
              label='Email'
              placeholder='email@company.com'
              required={true} 
              value={formData.email}
              onChange={handleChange}
              name='email'
              width='48%'
            />
          </div>
          
          <div className='row'>
            <div className='input-container'>
              <label className='label' htmlFor='service'>Interest</label>
              <select style={{color: formData.service ? 'white' : 'gray'}} name='service' value={formData.service} onChange={handleChange} id='service' className='input'>
                <option value="" disabled hidden>Select Service</option>
                <option value="Business Advisory">Business Advisory</option>
                <option value="Audit and Assurance">Audit and Assurance</option>
                <option value="Taxation">Taxation</option>
                <option value="Startup Assistance">Startup Assistance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='input-container'>
              <label className='label' htmlFor='message'>Message</label>
              <textarea 
                rows='6' 
                name='message'
                value={formData.message}
                onChange={handleChange}
                id='message'
                className='input'
              />
            </div>
          </div>
          <Button variant='accent' type='submit' className='btn--100'><span>{loading ? 'Sending...' : 'Send Message'}</span><span>{success ? '✔' : ''}</span></Button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
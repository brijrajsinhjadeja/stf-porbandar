import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="section">
      <h2 className="section-title">Become a Volunteer</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <textarea name="message" rows="4" placeholder="Why do you want to join?" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

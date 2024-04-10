import React, { useState } from 'react';


const Reception = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: 'Male',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: 'Male',
      age: '',
      address: ''
    });
  };

  return (
    <div>
      <h2>Patient Registration Form</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label><br /><br/>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label><br /><br/>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label><br /><br/>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label><br /><br/>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label><br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label><br />
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </label><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Reception;

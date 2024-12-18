import React, { useState } from 'react';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    alert(`Registered: ${name} with email: ${email}`);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

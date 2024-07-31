import React, { useState } from 'react';
import './AddDoctor.css';

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    speciality: '',
    description: '',
    password: '',
  });
  const [photo, setPhoto] = useState(null);
  const [modal, setModal] = useState({
    isVisible: false,
    message: '',
    isSuccess: true,
  });
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('speciality', formData.speciality);
    data.append('description', formData.description);
    data.append('password', formData.password);
    if (photo) data.append('photo', photo);

    try {
      const response = await fetch('/api/v1/admin/addDoctor', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        setModal({ isVisible: true, message: 'Doctor added successfully!', isSuccess: true });
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          speciality: '',
          description: '',
          password: '',
        });
        setPhoto(null);
        // Handle success (e.g., show a success message, redirect, etc.)
      } else {
        setModal({ isVisible: true, message: 'Error adding doctor: ' + response.statusText, isSuccess: false });
      
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      setModal({ isVisible: true, message: 'Error adding doctor: ' + error.message, isSuccess: false });
      // Handle fetch error (e.g., show an error message)
    }
  };

  const closeModal = () => {
    setModal({ isVisible: false, message: '', isSuccess: true });
  };
  return (
    <div className="add-doctor-form">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="speciality">Speciality:</label>
          <input
            type="text"
            id="speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">Add Doctor</button>
      </form>
      {modal.isVisible && (
        <div className="modal">
          <div className={`modal-content ${modal.isSuccess ? 'success' : 'error'}`}>
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modal.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDoctor;

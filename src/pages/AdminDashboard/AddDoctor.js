import React from 'react';
import './AddDoctor.css';
const AddDoctor = () => {
    return(
      
            <div className="add-doctor-form">
              <h2>Add Doctor</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    required
                  />
                </div>
        
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    required
                  />
                </div>
        
                <div className="form-group">
                  <label htmlFor="speciality">Speciality:</label>
                  <input
                    type="text"
                    id="speciality"
                    required
                  />
                </div>
        
                <div className="form-group">
                  <label htmlFor="photo">Photo</label>
                  <input
                    type="file"
                    id="photo"
                    accept=".jpg, .jpeg, .png"
                    required
                  />
                </div>
        
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                  />
                </div>
        
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    required
                  />
                </div>
        
                <button type="submit" className="btn">Add Doctor</button>
              </form>
            </div>
          );
        }
        
        export default AddDoctor;
  
import React from 'react';
import './AdminDashboard.css';
const AdminDashboard = () => {
    return(

        <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Add Doctor Form */}
      <div className="admin-section">
        <button>Add Doctor</button>
      </div>

      {/* Users List */}
      <div className="admin-section">
        <button> See User List
        </button>
      </div>

      {/* Add Admin Form */}
      <div className="admin-section">
        <button>Add Admin</button>
      </div>
    </div>
  );
}

export default AdminDashboard;

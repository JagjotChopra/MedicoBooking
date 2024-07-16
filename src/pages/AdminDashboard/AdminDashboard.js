import React from 'react';
import './AdminDashboard.css';
import AddDoctor from './AddDoctor';
const AdminDashboard = () => {
    return(

        <div className="admin-dashboard">
      <h2>Welcome Admin</h2>
      <AddDoctor/>
    </div>
  );
}

export default AdminDashboard;

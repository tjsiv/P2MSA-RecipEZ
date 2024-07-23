import React from "react";

const UserProfile = ({ user, onLogout }) => {
  const profileStyles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    header: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    details: {
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={profileStyles.container}>
      <h2 style={profileStyles.header}>Welcome, {user.username}!</h2>
      <p style={profileStyles.details}>Email: {user.email}</p>
      {/* Add more user profile details as needed */}
      <button style={profileStyles.button} onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;

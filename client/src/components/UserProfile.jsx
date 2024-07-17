import React from "react";

const UserProfile = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      {/* Add more user profile details as needed */}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;

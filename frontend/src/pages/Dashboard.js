import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Welcome to your Dashboard!</h1>
      <p>This is a protected route. Only logged-in users can see this.</p>
    </div>
  );
};

export default Dashboard;

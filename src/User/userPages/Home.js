import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* ===== TOP ===== */}
      <div className="home-top">
        <div>
          <h1>Welcome to Panel System</h1>
          <p>Manage users, content, and operations in one place.</p>
        </div>

        <button className="primary-btn">Get Started</button>
      </div>

      {/* ===== STATS ===== */}
      <div className="stats">
        <div className="stat-card">
          <h3>👤 Users</h3>
          <p>1,250</p>
        </div>

        <div className="stat-card">
          <h3>📁 Projects</h3>
          <p>320</p>
        </div>

        <div className="stat-card">
          <h3>💬 Messages</h3>
          <p>89</p>
        </div>

        <div className="stat-card">
          <h3>💰 Revenue</h3>
          <p>$5,430</p>
        </div>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="home-grid">

        <div className="box">
          <h3>👤 User Panel</h3>
          <p>Explore content, view gallery, and interact with the system.</p>
         
        </div>

        <div className="box">
          <h3>🛠 Admin Panel</h3>
          <p>Manage managers, contacts, and system settings.</p>
         
        </div>

        <div className="box">
          <h3>📦 Manager Panel</h3>
          <p>Upload videos, gallery, and manage content easily.</p>
          
        </div>

      </div>

      {/* ===== RECENT ACTIVITY ===== */}
      <div className="activity card">
        <h2>Recent Activity</h2>

        <ul>
          <li>✅ New user registered</li>
          <li>📤 Manager uploaded new video</li>
          <li>⚙️ Admin updated settings</li>
          <li>💬 New message received</li>
        </ul>
      </div>

    </div>
  );
}

export default Home;
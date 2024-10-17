import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="path-to-logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Personal Info</li>
            <li>Mess info</li>
            <li>Academics</li>
            <li>Clubs</li>
            <li>Achievements</li>
            <li>Research work</li>
            <li>Internships</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="user-info">
            <span>Nischal Basavaraju</span>
            <small>2nd Year, BTech , CSE</small>
            <img src="path-to-profile-picture.png" alt="Profile" className="profile-pic" />
          </div>
        </header>

        <section className="welcome-section">
          <h3>10th October, 2024</h3>
          <h1>Welcome back, Nischal Basavaraju!!</h1>
          <p>Always stay updated in your student portal</p>
          <img src="path-to-welcome-image.png" alt="Welcome" />
        </section>

        <section className="info-section">
          <div className="basic-info">
            <h4>Basic Info</h4>
            <p>Credits: <strong>40</strong></p>
            <p>CGPA: <strong>8.3</strong></p>
            <p>Semester: <strong>3rd</strong></p>
          </div>
          <div className="attendance">
            <h4>Attendance</h4>
            <div className="attendance-chart">
              <span>90.5%</span>
            </div>
          </div>
        </section>

        <section className="courses-section">
          <h4>Enrolled Courses</h4>
          <div className="courses">
            <div className="course-card">
              <p>Object oriented programming</p>
              <button>View</button>
            </div>
            <div className="course-card">
              <p>Fundamentals of database systems</p>
              <button>View</button>
            </div>
          </div>
        </section>

        <section className="instructor-notice">
          <div className="instructors">
            <h4>Course Instructors</h4>
            <div className="instructor-list">
              <img src="path-to-instructor1.png" alt="Instructor 1" />
              <img src="path-to-instructor2.png" alt="Instructor 2" />
              <img src="path-to-instructor3.png" alt="Instructor 3" />
            </div>
          </div>

          <div className="notices">
            <h4>Daily Notice</h4>
            <p>Prelim payment due</p>
            <p>Exam schedule</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

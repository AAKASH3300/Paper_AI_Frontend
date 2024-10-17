import React from 'react';
import './Member.css';

const Members = () => {
  const members = [
    { id: 1, name: 'Manu Basavaraju', role: 'Teacher', email: 'manub@nitk.edu.in', course: 'Theory of Computation', color: 'orange' },
    { id: 2, name: 'B R Chandrashekar', role: 'Teacher', email: 'brc@nitk.edu.in', course: 'Design of Digital Systems', color: 'green' },
    { id: 3, name: 'Nischal Basavaraju', role: 'Student', email: 'nischal.231cs139@nitk.edu.in', course: '231CS139', color: 'blue' },
    { id: 4, name: 'Prahas G R', role: 'Student', email: 'prahasgr.231cs142@nitk.edu.in', course: '231CS142', color: 'purple' },
    { id: 5, name: 'Vineet Nayak', role: 'Student', email: 'vineetnayak.231cs132@nitk.edu.in', course: '231CS132', color: 'yellow' },
    { id: 6, name: 'Dharineesh Rajan', role: 'Student', email: 'dharineeshrajan.231ee119@nitk.edu.in', course: '231EE119', color: 'cyan' },
    { id: 7, name: 'Anush', role: 'Student', email: 'anush.231ch239@nitk.edu.in', course: 'Mtech(Biochemistry)', color: 'red' },
  ];

  return (
    <div className="members-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="path-to-logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Members</li>
            <li>Announcements</li>
            <li>Courses Taught</li>
            <li>Messages</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="add-member-btn">+ Add a member</button>
        </header>

        <section className="members-section">
          <h2>Members</h2>
          <div className="tabs">
            <span className="tab active">People</span>
            <span className="tab">Attendance</span>
          </div>
          <p>63 people in total</p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>Position</th>
                <th>Email</th>
                <th>Roll number/Course</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="member-info">
                      <div className="member-icon" style={{ backgroundColor: member.color }}>
                        {member.name.charAt(0)}
                      </div>
                      <span>{member.name}</span>
                    </div>
                  </td>
                  <td>{member.role}</td>
                  <td>{member.email}</td>
                  <td>{member.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>8</span>
            <span>9</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Members;

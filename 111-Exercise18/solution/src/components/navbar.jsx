import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: '#fff',
      marginBottom: '20px'
    }}>
      <h2 style={{ margin: 0 }}>Exercise 18</h2>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


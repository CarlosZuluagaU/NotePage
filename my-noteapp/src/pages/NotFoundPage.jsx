import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Página no encontrada</p>
      <Link to="/" style={styles.link}>Volver al inicio</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '72px',
    color: '#ff4d4f',
  },
  message: {
    fontSize: '24px',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#1890ff',
  },
};

export default NotFoundPage;

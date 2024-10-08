import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Define metadata for the layout
export const metadata = {
  title: 'Utkarsh_gt7 Store',
  // Add additional metadata properties as needed
  description: 'Welcome to Utkarsh_gt7 Store, your one-stop shop for amazing products.',
};

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

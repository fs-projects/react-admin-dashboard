import React from 'react';
import './home.scss';

import Navbar from '../../components/Navbar';

import Sidebar from '../../components/Sidebar';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home stuff
      </div>
    </div>
  );
}

export default Home;

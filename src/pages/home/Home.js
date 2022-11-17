import React from 'react';
import './home.scss';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 months (income)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import Navbar from './Navbar';
import PersonelList from './PersonelPage';
import SideBar from './SideBar';


function App() {
  return (
    <div className="App container m-auto sm:w-full sm:max-w-none sm:m-0">
      <Navbar />
      <div className="content flex flex-row m-3 mt-12 sm:mt-5 sm:m-0">
        <SideBar/>
        <PersonelList />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../pages/Main';
import DoctorsPage from '../pages/DoctorsPage';
import NursesPage from '../pages/NursesPage';

const App: React.FC = () => {
  
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path='/' Component={Main} />
          <Route path="/doctors" Component={DoctorsPage} />
          <Route path="/nurses" Component={NursesPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
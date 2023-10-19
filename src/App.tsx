import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectPage from './projects/ProjectsPage';

function App() {
  return (
    <div className='container'>
      <ProjectPage first="Joe"/>
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import DataTable from './DataTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Malware Data Viewer</h1>
      </header>
      <main>
        <DataTable />
      </main>
    </div>
  );
}

export default App;

// src/DataTable.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './DataTable.css'; // Import CSS for styling

const DataTable = () => {
  const [malwareData, setMalwareData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/get-data') // Replace with your actual API endpoint
      .then(response => {
        setMalwareData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="data-table">
      <h2>Malware Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Extensions</th>
            <th>Ransom Note Filenames</th>
            <th>Encryption Algorithm</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {malwareData.map(item => (
            <tr key={item._id}>
              <td>{item._source.name.join(', ')}</td>
              <td>{item._source.extensions}</td>
              <td>{item._source.ransomNoteFilenames}</td>
              <td>{item._source.encryptionAlgorithm}</td>
              <td>
                {item._source.resources.map((resource, index) => (
                  <div key={index}>
                    <a href={resource} target="_blank" rel="noopener noreferrer">{resource}</a>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

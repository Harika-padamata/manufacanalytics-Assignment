import React from 'react';

const StatsTable = ({ title, data }) => {
  // console.log("data",data)
  return (
    <div>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(data).map((className) => (
              <th key={className}>{className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='table-side'>{title}<br></br>Mean</td>
            {Object.values(data).map((values, index) => (
              <td key={index}>{values.mean?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='table-side'>{title}<br></br>Median</td>
            {Object.values(data).map((values, index) => (
              <td key={index}>{values.median?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='table-side'>{title}<br></br>Mode</td>
            {Object.values(data).map((values, index) => (
              <td key={index}>{values.mode.join(', ')}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;

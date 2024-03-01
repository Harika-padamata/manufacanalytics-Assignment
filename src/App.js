import React from 'react';
import WineStats from './components/WineStats';
import './App.css';

const wineData = [
  { Alcohol: 'Class 1', Flavanoids: 1.2, Ash: 0.8, Hue: 0.5, Magnesium: 10 },
  { Alcohol: 'Class 2', Flavanoids: 2.3, Ash: 0.7, Hue: 0.6, Magnesium: 12 },
  { Alcohol: 'Class 3', Flavanoids: 1.5, Ash: 0.9, Hue: 0.7, Magnesium: 11 },
  { Alcohol: 'Class 4', Flavanoids: 2.1, Ash: 0.6, Hue: 0.4, Magnesium: 9 },
  { Alcohol: 'Class 5', Flavanoids: 2.5, Ash: 1.0, Hue: 0.8, Magnesium: 13 }
  // Add more wine data as needed
];

function App() {
  return (
    <div>
      <WineStats wineData={wineData} />
    </div>
  );
}

export default App;

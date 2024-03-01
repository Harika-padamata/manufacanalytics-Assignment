import React, { useEffect, useState } from 'react';
import StatsTable from './StatsTable';
import {calculateMean ,calculateMedian ,calculateMode} from './utils'

const WineStats = ({ wineData }) => {
    // console.log("wineData",wineData)
  const [flavanoidsStats, setFlavanoidsStats] = useState({});
  const [gammaStats, setGammaStats] = useState({});

  
    const calculateFlavanoidsStats = () => {
      const flavanoidsData = {};
      wineData.forEach((wine) => {
        const className = wine.Alcohol;
        if (!flavanoidsData[className]) {
          flavanoidsData[className] = [];
        }
        flavanoidsData[className].push(wine.Flavanoids);
      });
      console.log(flavanoidsData)
      const stats = {};
      for (const className in flavanoidsData) {
        const data = flavanoidsData[className];
        stats[className] = {
          mean: calculateMean(data),
          median: calculateMedian(data),
          mode: calculateMode(data),
        };
      }
      setFlavanoidsStats(stats);
    };

    const calculateGammaStats = () => {
      const gammaData = {};
      wineData.forEach((wine) => {
        const className = wine.Alcohol;
        if (!gammaData[className]) {
          gammaData[className] = [];
        }
        const gamma = (wine.Ash * wine.Hue) / wine.Magnesium;
        gammaData[className].push(gamma);
      });
      const stats = {};
      for (const className in gammaData) {
        const data = gammaData[className];
        stats[className] = {
          mean: calculateMean(data),
          median: calculateMedian(data),
          mode: calculateMode(data),
        };
      }
      setGammaStats(stats);
    };

  useEffect(() => {
    calculateFlavanoidsStats();
    calculateGammaStats();
  }, [wineData]);

  return (
    <div>
      <StatsTable title="Flavanoids" data={flavanoidsStats} />
      <StatsTable title="Gamma" data={gammaStats} />
    </div>
  );
};

export default WineStats;

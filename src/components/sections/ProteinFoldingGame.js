import React, { useEffect } from 'react';
import { setPageTitle } from '../utils';
import PageTransition from './PageTransition';
import CubeFoldGame from './CubeFoldGame';
const ProteinFoldingGame = () => {
  useEffect(() => {
    setPageTitle('Protein Folding Game (WIP)');
  }, []);
  return (
    <PageTransition>
      <h2>Work-In-Progress</h2>
    <CubeFoldGame></CubeFoldGame>
    </PageTransition>
  );
};

export default ProteinFoldingGame;
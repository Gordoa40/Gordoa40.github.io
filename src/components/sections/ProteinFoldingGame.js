import React from 'react';
import PageTransition from './PageTransition';
import CubeFoldGame from './CubeFoldGame';
const ProteinFoldingGame = () => {
  return (
    <PageTransition>
    <CubeFoldGame></CubeFoldGame>
    </PageTransition>
  );
};

export default ProteinFoldingGame;
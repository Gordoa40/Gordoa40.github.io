import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, Box } from '@react-three/drei';
import * as THREE from 'three';

const GRID_SIZE = 3;
const CUBE_SIZE = 1;
const PIPE_RADIUS = 0.05;

const directions = {
  A: [1, 0, 0],  // +X
  B: [-1, 0, 0], // -X
  C: [0, 1, 0],  // +Y
  D: [0, -1, 0], // -Y
  E: [0, 0, 1],  // +Z
  F: [0, 0, -1]  // -Z
};

const GridCube = ({ position }) => (
  <Box position={position} args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}>
    <meshBasicMaterial wireframe color="gray" />
  </Box>
);

const Pipe = ({ start, end, materialColor = "gray" }) => {
  const [sx, sy, sz] = start;
  const [ex, ey, ez] = end;
  const length = Math.sqrt((ex-sx)**2 + (ey-sy)**2 + (ez-sz)**2);
  const position = [(sx+ex)/2, (sy+ey)/2, (sz+ez)/2];

  const direction = new THREE.Vector3(ex-sx, ey-sy, ez-sz).normalize();
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <Cylinder
      position={position}
      quaternion={quaternion}
      args={[PIPE_RADIUS, PIPE_RADIUS, length, 8]}
    >
      <meshStandardMaterial color={materialColor} />
    </Cylinder>
  );
};

const ProteinStructure = ({ sequence, comparisonSequence = null }) => {
  let currentPosition = [0, 0, 0];
  const elements = [];

  sequence.split('').forEach((dir, index) => {
    const startPosition = [...currentPosition];
    const direction = directions[dir];
    currentPosition = currentPosition.map((p, i) => p + direction[i]);

    let color = "gray";
    if (comparisonSequence) {
      if (index < comparisonSequence.length && dir === comparisonSequence[index]) {
        color = "green";
      } else {
        color = "red";
      }
    }

    elements.push(
      <Pipe key={`pipe-${index}`} start={startPosition} end={currentPosition} materialColor={color} />
    );
  });

  return <>{elements}</>;
};

const Grid = () => {
  const grid = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        grid.push(<GridCube key={`${x}-${y}-${z}`} position={[x, y, z]} />);
      }
    }
  }
  return <>{grid}</>;
};

const generateRandomSequence = () => {
  const sequence = [];
  let currentPos = [0, 0, 0];
  const visited = new Set(['0,0,0']);

  while (sequence.length < 10) {
    const possibleDirs = Object.entries(directions).filter(([key, dir]) => {
      const newPos = currentPos.map((p, i) => p + dir[i]);
      return newPos.every(p => p >= 0 && p < GRID_SIZE) && !visited.has(newPos.join(','));
    });

    if (possibleDirs.length === 0) break;

    const [chosenDir, dirVector] = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
    sequence.push(chosenDir);
    currentPos = currentPos.map((p, i) => p + dirVector[i]);
    visited.add(currentPos.join(','));
  }

  return sequence.join('');
};

const CubeFoldGame = () => {
  const [targetSequence, setTargetSequence] = useState('');
  const [playerSequence, setPlayerSequence] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTargetSequence(generateRandomSequence());
  }, []);

  const handleSequenceChange = (e) => {
    setPlayerSequence(e.target.value.toUpperCase().replace(/[^A-F]/g, ''));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (playerSequence === targetSequence) {
      setScore(score + 100);
    }
  };

  const handleRetry = () => {
    setSubmitted(false);
  };

  const handleNewPuzzle = () => {
    setTargetSequence(generateRandomSequence());
    setPlayerSequence('');
    setSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <h2>Target Structure</h2>
          <Canvas camera={{ position: [5, 5, 5] }} style={{ height: '40vh' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Grid />
            <ProteinStructure sequence={targetSequence} />
            <Box position={[0, 0, 0]} args={[0.1, 0.1, 0.1]}>
              <meshStandardMaterial color="green" />
            </Box>
            <OrbitControls />
          </Canvas>
        </div>
        {submitted && (
          <div style={{ flex: 10 }}>
            <h2>Your Structure</h2>
            <Canvas camera={{ position: [5, 5, 5] }} style={{ height: '40vh' }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Grid />
              <ProteinStructure sequence={playerSequence} comparisonSequence={targetSequence} />
              <Box position={[0, 0, 0]} args={[0.1, 0.1, 0.1]}>
                <meshStandardMaterial color="green" />
              </Box>
              <OrbitControls />
            </Canvas>
          </div>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h2>Construction Area</h2>
        <input
          type="text"
          value={playerSequence}
          onChange={handleSequenceChange}
          placeholder="Enter your sequence"
          style={{ width: '100%', marginBottom: '10px' }}
          disabled={submitted}
        />
        {!submitted ? (
          <button onClick={handleSubmit}>Fold and Submit</button>
        ) : (
          <>
            <button onClick={handleRetry}>Retry</button>
            <button onClick={handleNewPuzzle}>New Puzzle</button>
          </>
        )}
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default CubeFoldGame;
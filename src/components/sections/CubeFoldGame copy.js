import React, { useState, useRef } from 'react';
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

const EndBlock = ({ position, direction }) => {
  const endPosition = position.map((p, i) => p + 0.0 * direction[i]);
  return (
    <>
      {/* <Pipe start={position} end={endPosition} materialColor="red" /> */}
      <Box position={endPosition} args={[0.1, 0.1, 0.1]}>
        <meshStandardMaterial color="red" />
      </Box>
    </>
  );
};

const ProteinStructure = ({ sequence }) => {
  let currentPosition = [0, 0, 0];
  const elements = [];

  sequence.split('').forEach((dir, index) => {
    const startPosition = [...currentPosition];
    const direction = directions[dir];
    currentPosition = currentPosition.map((p, i) => p + direction[i]);

    elements.push(
      <Pipe key={`pipe-${index}`} start={startPosition} end={currentPosition} />
    );

    if (index === sequence.length - 1) {
      elements.push(
        <EndBlock key="end-block" position={currentPosition} direction={direction} />
      );
    }
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

const CubeFoldGame = () => {
  const [sequence, setSequence] = useState('');
  const allowedDirections = useRef(['A', 'C', 'E']);

  const handleSequenceChange = (e) => {
    const input = e.target.value.toUpperCase();
    if (input.length > sequence.length) {
      const newChar = input[input.length - 1];
      if (allowedDirections.current.includes(newChar)) {
        setSequence(sequence + newChar);
        updateAllowedDirections(sequence + newChar);
      }
    } else if (input.length < sequence.length) {
      setSequence(input);
      updateAllowedDirections(input);
    }
  };

  const updateAllowedDirections = (seq) => {
    let position = [0, 0, 0];
    seq.split('').forEach(dir => {
      position = position.map((p, i) => p + directions[dir][i]);
    });

    allowedDirections.current = Object.entries(directions)
      .filter(([key, dir]) => {
        const newPos = position.map((p, i) => p + dir[i]);
        return newPos.every(p => p >= 0 && p < GRID_SIZE);
      })
      .map(([key]) => key);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Construction Area</h2>
        <input
          type="text"
          value={sequence}
          onChange={handleSequenceChange}
          placeholder="Enter directions (A, C, E initially)"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <p>Sequence: {sequence}</p>
        <p>Allowed next directions: {allowedDirections.current.join(', ')}</p>
      </div>
      <div style={{ flex: 2 }}>
        <h2>Visualization Area</h2>
        <Canvas camera={{ position: [5, 5, 5] }} style={{ height: '80vh' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Grid />
          <ProteinStructure sequence={sequence} />
          <Box position={[0, 0, 0]} args={[0.1, 0.1, 0.1]}>
            <meshStandardMaterial color="green" />
          </Box>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default CubeFoldGame;
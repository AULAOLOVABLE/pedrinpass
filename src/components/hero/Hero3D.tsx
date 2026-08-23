import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 500 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#FF6A1A"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const AbstractCodeGeometry = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      group.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  // Create a grid-like structure of boxes representing "code blocks" or "terminal nodes"
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ] as [number, number, number],
      size: [Math.random() * 2 + 0.5, 0.1, 0.1] as [number, number, number],
      opacity: Math.random() * 0.5 + 0.2
    }));
  }, []);

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <boxGeometry args={node.size} />
          <meshBasicMaterial 
            color="#FF6A1A" 
            transparent 
            opacity={node.opacity} 
          />
        </mesh>
      ))}
      
      {/* Decorative vertical lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={`v-${i}`} 
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 5
          ]}
        >
          <boxGeometry args={[0.02, Math.random() * 4 + 1, 0.02]} />
          <meshBasicMaterial color="#FF6A1A" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#050607]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#FF6A1A" />
        
        <ParticleField />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <AbstractCodeGeometry />
        </Float>
      </Canvas>
      
      {/* Subtle overlay gradient to match Obsidian theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050607_100%)] pointer-events-none" />
    </div>
  );
};
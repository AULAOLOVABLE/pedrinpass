import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Stars, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#ff6b4a"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#ff6b4a"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 5000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ff6b4a"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff6b4a" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b4a" />
      
      <Suspense fallback={null}>
        <AnimatedShape />
        <Particles />
        <Environment preset="city" />
      </Suspense>
    </>
  );
};

export const CinematicHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="eyebrow block mb-6 animate-pulse">Engenharia de Elite</span>
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter text-foreground leading-[0.8] mb-12 drop-shadow-[0_0_30px_rgba(255,107,74,0.3)]">
            PedrinTEC
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl mx-auto leading-relaxed mb-16">
            A convergência entre <span className="text-primary font-medium italic">design minimalista</span> e <span className="text-primary font-medium italic">engenharia neural</span>. O futuro do desenvolvimento começa aqui.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="glass-button glass-button-primary group px-12 py-5 text-lg">
              Explorar Ecossistema
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
            <button className="glass-button group px-12 py-5 text-lg">
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">Documentação</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default CinematicHero;
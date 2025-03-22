import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const points = useRef<THREE.Points>(null!);
  const particlesCount = 5000;

  // Create positions array only once
  const positionsArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positionsArray[i3] = (Math.random() - 0.5) * 10;
    positionsArray[i3 + 1] = (Math.random() - 0.5) * 10;
    positionsArray[i3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Gentle wave motion on Y axis
      positions[i3 + 1] = positionsArray[i3 + 1] + Math.sin(time + positions[i3] * 0.1) * 0.1;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={particlesCount}
          array={positionsArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8080ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
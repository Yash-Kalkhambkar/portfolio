import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Ring } from "@react-three/drei";
import * as THREE from "three";

function OrbMesh({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15 + mouseX * 0.02;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mouseY * 0.02;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.3;
      ringRef.current.rotation.x = Math.PI / 3 + mouseY * 0.01;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.2;
      ring2Ref.current.rotation.y = t * 0.1;
    }
  });

  // Wireframe icosahedron points
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pts.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)));
    }
    return pts;
  }, []);

  return (
    <>
      {/* Main distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.4, 2]} />
          <MeshDistortMaterial
            color="#FF571A"
            wireframe
            distort={0.25}
            speed={1.5}
            opacity={0.35}
            transparent
          />
        </mesh>

        {/* Inner solid core */}
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial
            color="#FF571A"
            emissive="#FF2200"
            emissiveIntensity={0.4}
            opacity={0.15}
            transparent
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Orbital ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.012, 8, 80]} />
        <meshStandardMaterial
          color="#FF571A"
          emissive="#FF4400"
          emissiveIntensity={1}
          opacity={0.5}
          transparent
        />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.4, 0.008, 8, 80]} />
        <meshStandardMaterial
          color="#00eefc"
          emissive="#00eefc"
          emissiveIntensity={0.8}
          opacity={0.25}
          transparent
        />
      </mesh>

      {/* Point lights for glow */}
      <pointLight color="#FF571A" intensity={3} distance={6} position={[0, 0, 2]} />
      <pointLight color="#00eefc" intensity={1} distance={8} position={[-3, 2, -1]} />
      <ambientLight intensity={0.1} />
    </>
  );
}

interface HeroOrbProps {
  mouseX: number;
  mouseY: number;
}

export function HeroOrb({ mouseX, mouseY }: HeroOrbProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <OrbMesh mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}

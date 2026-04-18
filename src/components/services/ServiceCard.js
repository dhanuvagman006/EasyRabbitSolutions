"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLowPowerMode } from "@/lib/device";

function SpinningIcon3D({ Component }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.8;
      ref.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group ref={ref}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 2, 1]} color="#85B8FF" intensity={2} />
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#3076F4" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
}

export default function ServiceCard({ title, description, icon: Icon }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lowPowerMode = useLowPowerMode();

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="relative rounded-2xl border border-white/60 bg-white/75 p-6 shadow-soft backdrop-blur-xl"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue-100 bg-brand-blue-50/50 shadow-inner overflow-hidden text-brand-blue-600">
        {!lowPowerMode ? (
          <Canvas
            camera={{ position: [0, 0, 1.2], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
            style={{ width: "100%", height: "100%", pointerEvents: "none" }}
          >
            <Suspense fallback={null}>
              <SpinningIcon3D />
            </Suspense>
          </Canvas>
        ) : (
          <Icon size={22} className="relative z-10" />
        )}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="pointer-events-none absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-brand-blue-300/50 to-transparent" />
    </motion.article>
  );
}

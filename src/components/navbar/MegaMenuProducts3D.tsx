"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MonitorPlay, Users, GraduationCap, ArrowRight, Sparkles, BrainCircuit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls, useTexture, ContactShadows, Environment, RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";

// -------------------------------------------------------------
// 3D Models mapped with our new Professional Flat UIs
// -------------------------------------------------------------

function SmartBoardModel() {
  const texture = useTexture("/images/products/smartboard_dashboard_v3.png");
  
  if (texture && texture.image) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    
    const img = texture.image as HTMLImageElement;
    const imgAspect = img.width / img.height;
    const planeAspect = 16 / 9;
    
    if (imgAspect > planeAspect) {
      texture.repeat.set(planeAspect / imgAspect, 1);
      texture.offset.set((1 - (planeAspect / imgAspect)) / 2, 0);
    } else {
      texture.repeat.set(1, imgAspect / planeAspect);
      texture.offset.set(0, (1 - (imgAspect / planeAspect)) / 2);
    }
  }
  
  return (
    <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
      <PresentationControls
        global={false}
        cursor={true}
        rotation={[0, 0.1, 0]}
        polar={[-0.1, 0.1]}
        azimuth={[-0.2, 0.2]}
        snap={true}
      >
        <group position={[0, 0, 0]} scale={1.35}>
          
          {/* Outer White Casing (Thicker bottom chin) */}
          <RoundedBox args={[4.3, 2.65, 0.15]} radius={0.12} smoothness={8} position={[0, -0.05, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.3} />
          </RoundedBox>

          {/* Camera Hole (Top Center) */}
          <mesh position={[0, 1.175, 0.076]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.02]} />
            <meshBasicMaterial color="#000000" />
          </mesh>

          {/* Sensors (Bottom Right) */}
          <mesh position={[1.8, -1.225, 0.076]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.02]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[1.9, -1.225, 0.076]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.02]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[2.0, -1.225, 0.076]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.02]} />
            <meshBasicMaterial color="#000000" />
          </mesh>

          {/* Logo Placeholder (Bottom Left) */}
          <RoundedBox args={[0.4, 0.06, 0.02]} radius={0.02} smoothness={2} position={[-1.7, -1.225, 0.076]}>
            <meshBasicMaterial color="#94a3b8" />
          </RoundedBox>

          {/* Inner Black Bezel (Shifted up slightly) */}
          <RoundedBox args={[4.06, 2.31, 0.16]} radius={0.04} smoothness={4} position={[0, 0.05, 0]}>
            <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
          </RoundedBox>

          {/* Screen Content as Texture */}
          <mesh position={[0, 0.05, 0.082]}>
            <planeGeometry args={[4.0, 2.25]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </group>
      </PresentationControls>
    </Float>
  );
}

function FacultyLaptopModel() {
  const texture = useTexture("/images/products/faculty_ui_v2.png");
  
  if (texture && texture.image) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    
    const img = texture.image as HTMLImageElement;
    const imgAspect = img.width / img.height;
    const planeAspect = 3.1 / 2.1;
    
    if (imgAspect > planeAspect) {
      texture.repeat.set(planeAspect / imgAspect, 1);
      texture.offset.set((1 - (planeAspect / imgAspect)) / 2, 0);
    } else {
      texture.repeat.set(1, imgAspect / planeAspect);
      texture.offset.set(0, (1 - (imgAspect / planeAspect)) / 2);
    }
  }
  
  return (
    <Float rotationIntensity={0.3} floatIntensity={0.8} speed={1.5}>
      <PresentationControls
        global={false}
        cursor={true}
        rotation={[0.1, -0.3, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.3, 0.3]}
        snap={true}
      >
        <group position={[0, -0.5, 0]}>
          {/* Keyboard Base */}
          <RoundedBox args={[3.2, 0.1, 2.2]} radius={0.05} smoothness={4} position={[0, 0, 1.2]} rotation={[-0.1, 0, 0]}>
            <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.4} />
          </RoundedBox>

          {/* Screen Body */}
          <RoundedBox args={[3.2, 2.2, 0.05]} radius={0.05} smoothness={4} position={[0, 1.1, 0.1]} rotation={[-0.1, 0, 0]}>
            <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          
          {/* Screen Content */}
          <mesh position={[0, 1.1, 0.13]} rotation={[-0.1, 0, 0]}>
            <planeGeometry args={[3.1, 2.1]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </group>
      </PresentationControls>
    </Float>
  );
}

function StudentPhoneModel() {
  const texture = useTexture("/images/products/student_dashboard_v4.png");

  if (texture && texture.image) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    
    const img = texture.image as HTMLImageElement;
    const imgAspect = img.width / img.height;
    const planeAspect = 1.42 / 3.10;
    
    if (imgAspect > planeAspect) {
      texture.repeat.set(planeAspect / imgAspect, 1);
      texture.offset.set((1 - (planeAspect / imgAspect)) / 2, 0);
    } else {
      texture.repeat.set(1, imgAspect / planeAspect);
      texture.offset.set(0, (1 - (imgAspect / planeAspect)) / 2);
    }
  }

  return (
    <Float rotationIntensity={0.4} floatIntensity={1} speed={2}>
      <PresentationControls
        global={false}
        cursor={true}
        rotation={[0, -0.2, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.4, 0.4]}
        snap={true}
      >
        <group position={[0, 0, 0.5]} scale={0.82}>
          {/* Metal Frame (White Titanium / Silver) */}
          <RoundedBox args={[1.52, 3.20, 0.15]} radius={0.22} smoothness={8} position={[0, 0, 0]}>
            <meshStandardMaterial color="#fdfdfd" metalness={0.75} roughness={0.15} />
          </RoundedBox>
          
          {/* White Glass Bezel */}
          <RoundedBox args={[1.48, 3.16, 0.16]} radius={0.20} smoothness={8} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f8fafc" metalness={0.6} roughness={0.1} />
          </RoundedBox>

          {/* Dynamic Island / Notch */}
          <RoundedBox args={[0.35, 0.10, 0.17]} radius={0.05} smoothness={8} position={[0, 1.48, 0]}>
            <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          
          {/* Screen Content as Texture */}
          <mesh position={[0, 0, 0.086]}>
            <planeGeometry args={[1.42, 3.10]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </group>
      </PresentationControls>
    </Float>
  );
}

function Scene({ activeId }: { activeId: string }) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <Environment preset="city" />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2DD4BF" />
      
      {activeId === "smartboard" && <SmartBoardModel />}
      {activeId === "faculty" && <FacultyLaptopModel />}
      {activeId === "student" && <StudentPhoneModel />}
      
      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
    </>
  );
}

// -------------------------------------------------------------
// Mega Menu Component
// -------------------------------------------------------------

const menuItems = [
  {
    id: "smartboard",
    icon: MonitorPlay,
    title: "SmartBoard",
    description: "Interactive classroom displays",
    href: "/products/smartboard"
  },
  {
    id: "faculty",
    icon: Users,
    title: "Faculty",
    description: "Manage classes and attendance",
    href: "/products/faculty"
  },
  {
    id: "student",
    icon: GraduationCap,
    title: "Student",
    description: "Track progress and schedules",
    href: "/products/student"
  }
];

export function MegaMenuProducts3D({ isOpen }: { isOpen: boolean }) {
  const [activeId, setActiveId] = useState("smartboard");

  return (
    <motion.div
      initial={false}
      animate={
        isOpen
          ? { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" }
          : { opacity: 0, y: -15, filter: "blur(8px)", pointerEvents: "none" }
      }
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="absolute top-full left-0 right-0 w-full z-50 overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
    >
      {/* Reduced padding from py-6 to py-4, and no hardcoded height */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex gap-10">
        
        {/* Left Column (Title & Button) */}
        <div className="flex-[0.8] border-r border-slate-100 pr-8 flex flex-col justify-between max-w-[280px]">
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-[22px] tracking-tight font-bold text-[#0F172A] leading-[1.2] mt-2"
            >
              Intelligent solutions for modern campuses
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="mb-2"
          >
            <Link href="/products" className="inline-flex items-center justify-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-sm font-semibold text-slate-700 rounded-full transition-colors">
              See overview
            </Link>
          </motion.div>
        </div>

        {/* Middle Column (Links) */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-[11px] font-bold text-slate-400 mb-2 px-3 uppercase tracking-wider">Products</div>
          <div className="flex flex-col gap-0.5">
            {menuItems.map((item, index) => (
              <div 
                key={item.id} 
                onMouseEnter={() => setActiveId(item.id)}
                className={`px-3 py-2.5 rounded-xl transition-colors cursor-pointer block group/item ${activeId === item.id ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
              >
                <Link href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <div className={`text-[15px] font-semibold transition-colors ${activeId === item.id ? 'text-slate-500' : 'text-slate-900 group-hover/item:text-slate-500'}`}>
                      {item.title}
                    </div>
                    <div className="text-[13px] text-slate-500">{item.description}</div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (3D Scene) - Reduced minimum height to 200px */}
        <div className="flex-[1.5] relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/50 min-h-[200px]">
          {/* Cinematic Backdrop Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* 3D Canvas */}
          <div className={`absolute inset-0 w-full h-full ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <Scene activeId={activeId} />
            </Canvas>
          </div>

          {/* Soft vignette overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.03)]" />
        </div>
      </div>
    </motion.div>
  );
}

useTexture.preload("/images/products/smartboard_dashboard_v3.png");
useTexture.preload("/images/products/faculty_ui_v2.png");
useTexture.preload("/images/products/student_dashboard_v4.png");

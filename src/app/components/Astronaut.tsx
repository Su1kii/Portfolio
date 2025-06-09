"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Define the type for props
interface AstronautProps {
  position?: [number, number, number];
  scale?: number;
}

// Fix return type of useGLTF
interface GLTFResult extends THREE.Object3D {
  nodes: {
    [key: string]:
      | (THREE.SkinnedMesh & {
          geometry: THREE.BufferGeometry;
          skeleton: THREE.Skeleton;
        })
      | THREE.Object3D;
  };
  materials: {
    [key: string]: THREE.Material;
  };
  animations: THREE.AnimationClip[];
}

export function Astronaut({
  position = [1.3, -1, 0],
  scale = 0.3,
}: AstronautProps) {
  const group = useRef<THREE.Group>(null);

  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);

  // Play first animation
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Bobbing animation
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint as THREE.Object3D} />

              {[
                "Cube001_0",
                "Cube005_0",
                "Cube002_0",
                "Plane_0",
                "Cube008_0",
                "Cube004_0",
                "Cube003_0",
                "Cube_0",
                "Cube009_0",
                "Cube011_0",
              ].map((name) => {
                const mesh = nodes[name] as THREE.SkinnedMesh;
                return (
                  <skinnedMesh
                    key={name}
                    name={name}
                    geometry={mesh.geometry}
                    skeleton={mesh.skeleton}
                    material={materials["AstronautFallingTexture.png"]}
                  />
                );
              })}

              {/* Additional groups (optional if visual only) */}
              {[
                "Cube001",
                "Cube005",
                "Cube002",
                "Plane",
                "Cube008",
                "Cube004",
                "Cube003",
                "Cube",
                "Cube009",
                "Cube011",
              ].map((name) => (
                <group key={name} name={name} />
              ))}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload
useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface GLTFModelProps {
  modelName: string;
}

const GLTFModel: React.FC<GLTFModelProps> = ({ modelName }) => {
  const { scene } = useGLTF(`./gltf/${modelName}/scene.gltf`);
  return <primitive object={scene} scale={3} position={[0, 0, 0]} />;
};

interface ThreeSceneProps {
  modelName: string;
}
const ThreeScene: React.FC<ThreeSceneProps> = ({ modelName }) => {
  return (
    <div style={{ width: "50vw", height: "50vh", backgroundColor: "gray" }}>
      <Canvas>
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <GLTFModel modelName={modelName} />
        <OrbitControls target={[0, 1, 0]} />
        <ambientLight />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

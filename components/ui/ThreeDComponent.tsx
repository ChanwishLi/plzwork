// components/ui/ThreeDComponent.tsx

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/model.gltf'); // Ensure the model.gltf is in the public directory
    return <primitive object={scene} scale={0.5} />;
};

const ThreeDComponent = () => {
    return (
        <Canvas style={{ height: '200px', width: '100%' }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Model />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

export default ThreeDComponent;


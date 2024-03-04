import { OrbitControls } from "@react-three/drei";
import { a, useSprings } from "@react-spring/three";

const items = [
  {
    initialPosition: [-3.5, 0, 0],
    finalPosition: [-1.5, 0, 0],
  },
  {
    initialPosition: [0, 3.5, 0],
    finalPosition: [0, 0, 0],
  },
  {
    initialPosition: [3.5, 0, 0],
    finalPosition: [1.5, 0, 0],
  },
];

const UseSpringsHook = () => {
  // useSprings hook used to apply animations on multiple mesh at single time.
  const springs = useSprings(
    items.length,
    items.map((item) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
    }))
  );//useSprings hook accepts two argument 1.no of springs or no of element we want to animate
  // 2.array of properties on the basis of which we want to do animation

  console.log(springs);

  return (
    <>
      <OrbitControls />

      {springs.map((item, i) => (
        <a.mesh key={Math.random()} scale={0.5} position={item.position}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </a.mesh>
      ))}
    </>
  );
};

export default UseSpringsHook;

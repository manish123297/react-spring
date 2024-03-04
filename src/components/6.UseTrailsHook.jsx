import { OrbitControls } from "@react-three/drei";
import { a, useSprings, useTrail } from "@react-spring/three";

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

//useTrial hook is used to create animation of elements such that animations of each elements run one
//after another

const UseTrailHook= () => {
  const [trail, api] = useTrail(3, () => ({
    from: { scale: 0 },
    to:{scale:0.6}
  })); //similar to useSprings it also accepts length of elements ,array/function which returns array 
//   of objects  on the basis of which we are going to animate the elements.

  let active = true;
  const missedHandler = () => {
    if (active) {
        //here we are making the active variable false when active is altready true and starting the animation
        //again(scaling up the mesh) that after clicking on outside the mesh
      active = false;
      api.start({
        to: { scale: 0.6 },
      });
    } else {
        //if active is false then we are scaling down to zero.
      active = true;

      api.start({
        to: { scale: 0.0 },
      });
    }
  };

  return (
    <>
      <OrbitControls />

      {trail.map((item, i) => (
        <a.mesh
          key={Math.random()}
          scale={item.scale}
          position-x={-1 + i}
          onPointerMissed={missedHandler} //this will run when we will click outside the mesh.
        >
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </a.mesh>
      ))}
    </>
  );
};

export default UseTrailHook;

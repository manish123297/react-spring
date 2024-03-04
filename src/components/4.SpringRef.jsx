import {a,useSpring,useSpringRef} from "@react-spring/three"
import {}  from "@react-three/drei"

const SprintRef=()=>{
    const springRef = useSpringRef(); //When using a SpringRef or api return from a hook, any updates 
    // to the hook's configuration object are treated as updates and therefore will not trigger the 
    // animation to run. You must call .start() to trigger the animation, thus flushing the update queue.
  const spring = useSpring({
    ref: springRef, //now instead fo using api we can use this ref.
    from: { x: -2 },
  });

  const clickHandler = () => {
    springRef.start({
      to: { x: 2 },
      config: { duration: 5000 },
    });
  };

  const pointerOverHandler = () => {
    springRef.pause();
  };

  const pointerOutHandler = () => {
    springRef.resume();
  };


    return (<>
    <a.mesh   position-x={spring.x}
        onClick={clickHandler}
        onPointerOver={pointerOverHandler} //this will run when we will hover on the mesh
        onPointerOut={pointerOutHandler} //this will run when will point out of the mesh
        > 
        <boxGeometry ></boxGeometry>
        <a.meshBasicMaterial></a.meshBasicMaterial>
    </a.mesh>
    </>)

}
export default SprintRef;
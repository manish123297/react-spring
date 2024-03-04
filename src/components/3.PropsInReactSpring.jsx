import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
// here use spring returns spring object and imperative api "api" when we pass arrow function(which
// returns object) in useSpring hook.

const PropsInReactSpring = () => {
  const [clicked, setClicked] = useState(false);
  let n = 0;

  const { x, y, color } = useSpring({
    from: { color: "hotpink", x: -2,}, //starting values  of the animation
    to: { color: "yellow", x: 2 },
    // to: [
    //   { color: "yellow", x: 2 }, //object-1
    //   { color: "cyan", y: 2 }, //object-2
    //   { color: "greenyellow", x: -2 }, //object-3
    //   { color: "hotpink", y: -2 }, //object-4
    //   //here final values  will be firstly object-1 then object-2 then object-3 and
    //   //    finally object-4
    // ],
    // loop:()=>3>n++,//"from" obj to "to" obj animation will work in loop  untill this condition will
    //be true 3>n++.
    // delay: 1000, //time in millisec after which animation will start
    // reverse:clicked,//to reach to initial object.reverse can be true and false
    pause: clicked, //when true animation will be paused
    // reset: clicked,
    config: {
        //to see the more properties of config object please see the documentation.
         mass: 20,
        tension: 700,
        friction: 15,//mass ,tension and friction is used to provide physical properties so that
        //animation looks like more realistic.
        clamp: true,  //to stop the mesh animation once reached to the end 
        // duration: 5000
    },
    onStart: () => console.log("onStart"), //this function will run when we will start the animation
    onRest: () => console.log("onRest"), //when we will reset the animation
    onPause: () => console.log("onPause"), //when we will pause animation
    onResume: () => console.log("onResume"),//when we will resume animation.
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <OrbitControls></OrbitControls>
      <a.mesh position-x={x} position-y={y} onClick={clickHandler}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
      {/* animated is a heigher order component */}
    </>
  );
};

export default PropsInReactSpring;

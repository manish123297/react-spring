import {OrbitControls} from "@react-three/drei"
import { useState } from "react"
import {useSpring,animated} from "@react-spring/three"
// here we learned about how to use useSpring hook and HOC(Higher order component) animated


const  GettingStarted=()=>{
    const [click,setClick]=useState(false);
    const handleClick=()=>{ 
        setClick(!click)
    }
    //useSpring returns a object having many properties.we pass
    //object inside the useSpring() to alter the object which useSpring
    //returns
    const spring=useSpring({
        from:{scale:click?1:2,color:click?"orange":"hotpink"},
        to:{scale:click?1:2,color:click?"hotpink":"orange"}
    })
    //now all the object which will use spring obj to animate itself
    //those element we have to write like this <animated.element/>
//   console.log(spring,animated)

    return <>
    <OrbitControls></OrbitControls>
    <animated.mesh onClick={handleClick} scale={spring.scale}>
        <boxGeometry ></boxGeometry>
        <animated.meshBasicMaterial color={spring.color}> </animated.meshBasicMaterial>
    </animated.mesh>
    {/* animated is a heigher order component */}
    </>
}

export default GettingStarted;
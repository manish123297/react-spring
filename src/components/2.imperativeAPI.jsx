

import {OrbitControls} from "@react-three/drei"
import { useState } from "react"
import {useSpring,animated} from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
// here use spring returns spring object and imperative api "api" when we pass arrow function(which 
// returns object) in useSpring hook.and using imperative api to animate on event(like onClick).


const  ImperativeAPI=()=>{
    const[spring,api]=useSpring(()=>({
        from:{x:0}
    }))

    //The imperative API enables you to update your animations without requiring a react-render
    //  to occur. This is useful for animations that are not tied to a component's lifecycle,
    //  such as animations that are triggered by user input.
//    useFrame(()=>{
    //    })
    const handleClick=()=>{
     console.log(spring.x.get())
    api.start({to:{x:spring.x.get()===1?0:1}}) //spring.x.get() returns te current value of our spring that
    //is value of x.
    //api.start->Start the animation from x=0. 
 }
    return <>
    <OrbitControls></OrbitControls>
    <animated.mesh onClick={handleClick} position-x={spring.x} >
        <boxGeometry ></boxGeometry>
        <animated.meshBasicMaterial color="orange"> </animated.meshBasicMaterial>
    </animated.mesh>
    {/* animated is a heigher order component */}
    </>
}

export default ImperativeAPI;
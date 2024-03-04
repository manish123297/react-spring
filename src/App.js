// import GettingStarted from "./components/1.GettingStarted";
// import ImperativeAPI from "./components/2.imperativeAPI";
// import PropsInReactSpring from "./components/3.PropsInReactSpring";
// import SprintRef from "./components/4.SpringRef";
// import UseSpringsHook from "./components/5.useSpringsHook";
import UseTrailHook from "./components/6.UseTrailsHook";
import { Canvas } from "@react-three/fiber";
import "./styles.css";

function App() {
  return (
    <div className="root">
      <Canvas>
      <UseTrailHook></UseTrailHook>
      </Canvas>
    </div>
  );
}

export default App;

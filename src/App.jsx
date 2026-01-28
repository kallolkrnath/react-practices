import CarSeter from "./practices/useStateHook/CarChanger";
import MyCheckbox from "./practices/useStateHook/CheckBox";
import ColorChanger from "./practices/useStateHook/ColorChanger";
import CounterState from "./practices/useStateHook/Counter";
import MyComponent from "./practices/useStateHook/MyComponent";
import MyInput from "./practices/useStateHook/TextField";

import CounterRef from "./practices/useRefHook/Counter";
import Input from "./practices/useRefHook/Input";
import VideoPlayer from "./practices/useRefHook/VideoPlayer";


import CounterEffect from "./practices/useEffectHook/Counter";
import HandMove from "./practices/useEffectHook/HandMove"
import MyEffectComponent from "./practices/useEffectHook/MyComponent";
import MyEffectComponent2 from "./practices/useEffectHook/MyComponent2";

function App() {

  return (
    <>
      <main>
        {/* -------UseStateHook------ */}
        <ColorChanger />
        <hr className="my-4" />
        <CarSeter />
        <hr className="my-4" />
        <MyComponent />
        <hr className="my-4" />
        <MyCheckbox />
        <hr className="my-4" />
        <MyInput />
        <hr className="my-4" />
        <CounterState />
        <hr className="my-2" />

         {/* --------UseRefHook------- */}
        <hr className="my-2" />
        <CounterRef />
        <hr className="my-4" />
        <Input />
        <hr className="my-4" />
        <VideoPlayer />
        <hr className="my-2" />

        {/* --------UseEffectHook------- */}
        <hr className="my-2" />
        <CounterEffect />
        <hr className="my-4" />
        <HandMove/>

        <MyEffectComponent />
        <hr className="my-4" />
        <MyEffectComponent2 />
        <hr className="my-2" />
        </main>
    </>
  )
}

export default App

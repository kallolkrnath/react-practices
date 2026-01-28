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

import MyApp from "./practices/useContextHook/Contact";

import CounterMemo from "./practices/useMemoHook/Counter";

import MainPage from "./practices/useCallbackHook/MainPage";

import CounterReducer from "./practices/useReducerHook/Counter";

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

         {/* --------UseContextHook------- */}
        <hr className="my-2" />
        <MyApp />

        <hr className="my-2" />

        {/* --------UseMemoHook------- */}
        <hr className="my-2" />
        <CounterMemo />
        <hr className="my-2" />

        {/* --------UseCallbackHook------- */}
        <hr className="my-2" />
        <MainPage />
        <hr className="my-2" />

        {/* --------UseReducerHook------- */}
        <hr className="my-2" />
        <CounterReducer />
        <hr className="my-2" />

        </main>
    </>
  )
}

export default App

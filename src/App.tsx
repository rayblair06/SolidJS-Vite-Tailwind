import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "./assets/vite.svg";
import tailwindLogo from "./assets/tailwind.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal<number>(0);

  return (
    <>
      <div class="inline-flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>

        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>

        <a href="https://tailwind.com" target="_blank">
          <img src={tailwindLogo} class="logo tailwind" alt="Tailwind logo" />
        </a>
      </div>

      <h1>Vite + Solid + Tailwind</h1>

      <div class="p-8">
        <button
          class="mb-4"
          onClick={() => setCount((value: number) => value + 1)}
        >
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p class="text-[#888]">
        Click on the Vite, Solid or Tailwind logos to learn more
      </p>
    </>
  );
}

export default App;

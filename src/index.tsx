/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

render(() => <App />, root);

import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import "./App.css";
import App from "./App";

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.glyph.json"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
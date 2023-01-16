import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LangContextProvider from "./context/LangContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LangContextProvider>
    <App />
    </LangContextProvider>
    );

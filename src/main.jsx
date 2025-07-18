import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TrafficLight from "./components/TrafficLight.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrafficLight />
  </StrictMode>
);

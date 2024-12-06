import { createRoot } from "react-dom/client";
import Body from "./components/Custom/Body.jsx";
import "./index.css";
import AppProvider from "./provider.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <Body />
  </AppProvider>
);

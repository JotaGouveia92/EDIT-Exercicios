import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import ButtonWithChildren from "./components/ButtonWithChildren.jsx";
import CardWithChildren from "./components/CardWithChildren.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Card>
      <ButtonWithChildren>
        <h1>Ola Botão</h1>
      </ButtonWithChildren>
    </Card>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NoteProvider from './context/note.context';

// Obtén el contenedor root y crea la raíz una sola vez
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Renderiza la app
root.render(
  <StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <App />
      </NoteProvider>
    </BrowserRouter>
  </StrictMode>
);
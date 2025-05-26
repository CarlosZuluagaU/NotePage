import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <- cambia esto
import App from "./App.jsx";
import "./index.css";
import NoteProvider from './context/note.context';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter> {/* <- cambia esto también */}
      <NoteProvider>
        <App />
      </NoteProvider>
    </HashRouter>
  </StrictMode>
);

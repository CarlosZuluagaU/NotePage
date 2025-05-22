import { Routes, Route } from "react-router-dom";
import NoteProvider from "./context/note.context";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NoteProvider>
        <HeaderComponent />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </NoteProvider>
    </div>
  );
}

export default App;

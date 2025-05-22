import { useContext } from "react";
import { NoteContext } from "../context/note.context.jsx";
import "./NotesPage.css";
import NoteCard from "../components/NoteCard";

function NotesPage() {
  const { notes } = useContext(NoteContext);

  return (
    <section className="notes-page">
      <div className="notes-header">
        <h2>📝 Mis Notas</h2>
      </div>

      {notes.length === 0 ? (
        <p className="empty-message">No tienes notas aún. ¡Agrega una!</p>
      ) : (
        <ul className="note-list">
          {notes.map((note) => (
            <li key={note.id}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default NotesPage;

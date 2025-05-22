import { useContext } from "react";
import { NoteContext } from "../context/note.context";
import "./NotesPage.css";
import NoteCard from "../components/NoteCard";
import AddNoteButton from "../components/AddNoteButton";

function NotesPage() {
  const { notes, addNewNote, totalNotes, completedNotes } = useContext(NoteContext);

  return (
    <section className="notes-page">
      <div className="notes-header">
        <h2>📝 Mis Notas</h2>
        <div className="notes-stats">
          <span>Total: {totalNotes}</span>
          <span>Completadas: {completedNotes}</span>
        </div>
      </div>

      <div className="notes-actions">
        <AddNoteButton onAdd={addNewNote} />
      </div>

      {notes.length === 0 ? (
        <div className="empty-state">
          <p>No tienes notas aún</p>
          <button 
            className="add-first-note-btn" 
            onClick={addNewNote}
          >
            ➕ Crear primera nota
          </button>
        </div>
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
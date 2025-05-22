import { useContext } from "react";
import { NoteContext } from "../context/note.context";
import "./NoteCard.css";

function NoteCard({ note }) {
  const { deleteNote, toggleCompleteNote, saveNote } = useContext(NoteContext);

  const handleTitleChange = (e) => {
    saveNote(note.id, e.target.value);
  };

  return (
    <div className={`note-card ${note.completed ? "completed" : ""}`}>
      <input
        className="note-title"
        value={note.title}
        onChange={handleTitleChange}
        placeholder="Escribe una nota..."
      />
      <div className="note-actions">
        <button className="complete-btn" onClick={() => toggleCompleteNote(note.id)}>
          {note.completed ? "✅" : "☐"}
        </button>
        <button className="delete-btn" onClick={() => deleteNote(note.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

import { useContext, useRef, useEffect } from "react";
import { NoteContext } from "../context/note.context";
import "./NoteCard.css";

function NoteCard({ note }) {
  const { deleteNote, toggleCompleteNote, saveNote } = useContext(NoteContext);
  const textareaRef = useRef(null);

  // Auto-ajuste de altura del textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [note.title]);

  const handleTitleChange = (e) => {
    saveNote(note.id, e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Evita salto de línea con Enter solo
    }
  };

  return (
    <div className={`note-card ${note.completed ? "completed" : ""}`}>
      <textarea
        ref={textareaRef}
        className="note-content"
        value={note.title}
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu nota aquí..."
        rows={1} // Comienza con 1 fila y crece automáticamente
      />
      <div className="note-actions">
        <button 
          className="complete-btn" 
          onClick={() => toggleCompleteNote(note.id)}
          aria-label={note.completed ? "Marcar como no completada" : "Marcar como completada"}
        >
          {note.completed ? "✅" : "☐"}
        </button>
        <button 
          className="delete-btn" 
          onClick={() => deleteNote(note.id)}
          aria-label="Eliminar nota"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
import { useContext } from "react";
import { NoteContext } from "../context/note.context";
import "./AddNoteButton.css"; 

function AddNoteButton() {
  const { addNewNote } = useContext(NoteContext);

  return (
    <button onClick={addNewNote}>
      ➕ Añadir nota
    </button>
  );
}

export default AddNoteButton; // ← Esta línea es crucial
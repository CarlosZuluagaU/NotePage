import { useContext } from "react";
import { NoteContext } from "../context/note.context.jsx";

function AddNoteButton() {
    const { addNewNote } = useContext(NoteContext);

    return (
        <button 
            className="add-note-button"
            onClick={addNewNote}
            aria-label="Agregar nueva nota"
        >
            <span className="plus-icon">+</span> Nueva Nota
        </button>
    );
}

export default AddNoteButton;
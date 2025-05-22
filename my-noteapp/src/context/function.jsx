// Si los archivos están en el mismo directorio:
import { NoteContext } from "./NoteContext";

// Si NoteContext está en un nivel superior:
import { NoteContext } from "../NoteContext";
function Note({ note }) {
    const { deleteNote, toggleCompleteNote, saveNote } = useContext(NoteContext);
    const [editing, setEditing] = useState(note.isNew || false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    const handleSave = () => {
        saveNote(note.id, editedTitle);
        setEditing(false);
    };

    return (
        <div className={`note ${note.completed ? 'completed' : ''}`}>
            {editing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onBlur={handleSave}
                    onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                />
            ) : (
                <span className="note-text">{note.title}</span>
            )}

            <div className="note-actions">
                {!note.completed && (
                    <button 
                        className="edit-btn"
                        onClick={() => setEditing(true)}
                        title="Editar nota"
                    >
                        ✏️
                    </button>
                )}

                <button
                    className={`complete-btn ${note.completed ? 'completed' : ''}`}
                    onClick={() => toggleCompleteNote(note.id)}
                    title={note.completed ? "Marcar como pendiente" : "Marcar como completada"}
                >
                    {note.completed ? '✅' : '☑️'}
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteNote(note.id)}
                    title="Eliminar nota"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default Note;
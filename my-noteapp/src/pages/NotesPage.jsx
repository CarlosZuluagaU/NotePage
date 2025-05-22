import { useContext } from "react";
import { NoteContext } from "../context/note.context";
import "./NotesPage.css";
import NoteCard from "../components/NoteCard";
import AddNoteButton from "../components/AddNoteButton";
import Footer from "../components/Footer"; // Asegúrate de importar el Footer

function NotesPage() {
  const { notes, addNewNote, totalNotes, completedNotes } = useContext(NoteContext);

  return (
    <>
    <section className="notes-page">
      {/* Header con efecto vidrio y estadísticas */}
      <div className="notes-header glassmorphism">
        <div className="header-content">
          <h2>
            <span role="img" aria-label="notas">📝</span> Mis Notas
          </h2>
          <div className="notes-stats">
            <div className="stat-box">
              <span className="stat-number">{totalNotes}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-box completed">
              <span className="stat-number">{completedNotes}</span>
              <span className="stat-label">Completadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor principal con fondo */}
      <div className="notes-container">
        {/* Barra de acciones flotante */}
        <div className="notes-actions floating-actions">
          <AddNoteButton onAdd={addNewNote} />
        </div>

        {/* Estado vacío o lista de notas */}
        {notes.length === 0 ? (
          <div className="empty-state glassmorphism">
            <div className="empty-content">
              <p>Parece que no tienes ninguna nota aún...</p>
              <button 
                className="add-first-note-btn primary-button" 
                onClick={addNewNote}
              >
                <span role="img" aria-label="añadir">➕</span> Crear mi primera nota
              </button>
            </div>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
      
    </section>
     <Footer />
    </>
    
  );
}

export default NotesPage;
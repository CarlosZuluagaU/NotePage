import { createContext, useState } from "react";

// 1. Crear el contexto
export const NoteContext = createContext();

// 2. Proveedor del contexto
export default function NoteProvider({ children }) {
  const initialNotes = [
    { id: 1, title: "Ir a casa de un amigo", completed: false },
    { id: 2, title: "Hacer las compras", completed: false },
    { id: 3, title: "Estudiar para el examen", completed: false },
    { id: 4, title: "Realizar los talleres y parciales", completed: false },
    { id: 5, title: "Visitar a mi abuela", completed: false },
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Añadir una nueva nota (con validación para evitar IDs duplicados)
  const addNewNote = () => {
    const newId = Date.now();
    const newNote = {
      id: newId,
      title: "",
      completed: false,
      isNew: true, // Marca para estilos/comportamiento especial
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    return newId; // Devuelve el ID para posible uso inmediato
  };

  // Eliminar nota
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Alternar estado completado
  const toggleCompleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  // Guardar cambios en una nota (con trim() para eliminar espacios)
  const saveNote = (id, newTitle) => {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return; // Evita notas vacías

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id 
          ? { ...note, title: trimmedTitle, isNew: false } 
          : note
      )
    );
  };

  // Datos expuestos por el contexto
  const contextValue = {
    notes,
    addNewNote,
    deleteNote,
    toggleCompleteNote,
    saveNote,
    totalNotes: notes.length, // Extra: conteo de notas
    completedNotes: notes.filter(note => note.completed).length, // Extra: notas completadas
  };

  return (
    <NoteContext.Provider value={contextValue}>
      {children}
    </NoteContext.Provider>
  );
}
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

  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      completed: false,
      isNew: true,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const toggleCompleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const saveNote = (id, newTitle) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: newTitle, isNew: false } : note
      )
    );
  };

  const value = {
    notes,
    addNewNote,
    deleteNote,
    toggleCompleteNote,
    saveNote,
  };

  return (
    <NoteContext.Provider value={value}>
      {children}
    </NoteContext.Provider>
  );
}

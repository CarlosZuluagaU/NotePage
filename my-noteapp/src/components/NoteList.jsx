import { useContext } from "react";
import { NoteContext } from "../context/note.context.jsx";
import NoteCard from "./NoteCard";

function NoteList() {
  const { notes, setNotes } = useContext(NoteContext);

  const handleAddNote = () => {
    setNotes(prevNotes => [
      ...prevNotes,
      {
        id: Date.now(),
        title: "",
        marked: false,
        isNew: true
      }
    ]);
  };


}

export default NoteList;
"use client"
import Navbar from "../_components/navbar";
import NoteCard from "../_components/note";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // fetch notes from backend
    fetch("http://backend:5000/backend/note")
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.log("Error fetching notes:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>All Notes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className=" text-2xl text-amber-800">
        {notes.map((note, index) => (
          <NoteCard  key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}


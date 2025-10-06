"use client";

import Navbar from "../_components/navbar";
import NoteCard from "../_components/note";
import { useEffect, useState } from "react";

// ✅ Define a proper type for a note
interface Note {
  title: string;
  content: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]); // typed state

  useEffect(() => {
    // ✅ Always use environment variable instead of hardcoded URL
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://backend:5000/backend/note";

    fetch(backendUrl)
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>All Notes</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="text-2xl text-amber-800"
      >
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

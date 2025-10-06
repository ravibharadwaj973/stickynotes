"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Navbar from "../../_components/navbar";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ✅ Added explicit type for 'e'
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) alert("Note added!");
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Add a New Note</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "2rem auto",
        }}
      >
        <input
          placeholder="Title"
          value={title}
          // ✅ Added type for event
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          style={{ margin: "0.5rem", padding: "0.5rem" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          style={{ margin: "0.5rem", padding: "0.5rem" }}
        />

        <button type="submit" style={{ padding: "0.5rem" }}>
          Add Note
        </button>
      </form>
    </div>
  );
}

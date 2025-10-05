"use client"
import { useState } from "react";
import Navbar from "../../_components/navbar";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://backend:5000/backend/note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
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
          margin: "2rem auto"
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: "0.5rem", padding: "0.5rem" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ margin: "0.5rem", padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>Add Note</button>
      </form>
    </div>
  );
}

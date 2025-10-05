"use client"
export default function NoteCard({ title, content }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      width: "250px",
      backgroundColor: "#fef68a"
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

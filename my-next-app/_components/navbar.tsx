"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#222",
      color: "white"
    }}>
      <h2>📝 Sticky Notes</h2>
      <div>
        <Link href="/">Home</Link> | <Link href="/add-note">Add Note</Link>
      </div>
    </nav>
  );
}

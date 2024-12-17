"use client";
import { useParams } from "next/navigation";

export default function ToolPage() {
  const { name } = useParams();

  return (
    <div>
      <h1>Tool Page {name}</h1>
      <p>This is the tool page for the tool {name}.</p>
    </div>
  );
}

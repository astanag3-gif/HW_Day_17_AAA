import { useState } from "react";

function ProjectCreator({ onAddBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newBoard = {
      id: Date.now(),
      title,
      description,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
      image: "",
    };

    onAddBoard(newBoard);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Создание проекта</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Название проекта"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <textarea
          placeholder="Краткое описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-slate-800 text-white py-2 rounded text-sm hover:bg-slate-700"
        >
          Добавить проект
        </button>
      </form>
    </div>
  );
}

export default ProjectCreator;
import { useState } from "react";
import BoardCard from "../BoardCard/BoardCard";

function BoardsList({ boards }) {
  const [filter, setFilter] = useState("all");

  const filteredBoards = boards.filter((board) => {
    if (filter === "all") return true;
    return board.status === filter;
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Список проектов</h2>

      <div className="flex gap-2 mb-6">
        {["all", "active", "archived"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 rounded text-sm ${
              filter === item
                ? "bg-slate-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {item === "all"
              ? "Все"
              : item === "active"
              ? "Активные"
              : "Архив"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBoards.map((board) => (
          <BoardCard key={board.id} {...board} />
        ))}
      </div>
    </div>
  );
}

export default BoardsList;
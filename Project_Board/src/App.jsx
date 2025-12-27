import { useState } from "react";
import Header from "./components/Header/Header";
import ProjectCreator from "./components/ProjectCreator/ProjectCreator";
import BoardsList from "./components/BoardsList/BoardsList";
import Feedback from "./components/Feedback/Feedback";
import boardsData from "./data/boards";

function App() {
  const [boards, setBoards] = useState(boardsData);

  const addBoard = (newBoard) => {
    setBoards((prevBoards) => [newBoard, ...prevBoards]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-1/4">
            <ProjectCreator onAddBoard={addBoard} />
          </aside>

          <section className="md:w-3/4">
            <BoardsList boards={boards} />
          </section>
        </div>
      </main>

      <Feedback />
    </div>
  );
}

export default App;
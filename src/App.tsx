import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap min-h-screen inkdrop-app">
      <nav className="flex flex-col w-[15%] bg-gray-500 border border-right">
      Notebooks
      </nav>
      <aside className="flex flex-col w-[20%] bg-gray-600 border border-right">
        Notes
      </aside>
      <main className="flex-1 bg-gray-300 border border-right">
        Main Section
      </main>
    </div>
  );
};

export default App;

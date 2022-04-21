import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App: React.FC = () => {
  const [isInDetail, setIsInDetail] = useState(false);

  return (
    <div className="flex flex-row flex-wrap min-h-screen inkdrop-app">
      <button onClick={() => setIsInDetail((isInDetail) => !isInDetail)}>
        Trigger
      </button>
      <div className="flex flex-col w-[15%] bg-gray-500 border border-right">
        <AnimatePresence initial={false} exitBeforeEnter>
          {isInDetail && (
            <motion.div>
              <span>Notebooks</span>
              <button>Detail</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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

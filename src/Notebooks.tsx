import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Notebooks: React.FC = () => {
  const [isInDetail, setIsInDetail] = useState(false);

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {isInDetail ? (
        <motion.div
          transition={{ duration: 200 }}
          className="flex space-between group"
        >
          <button onClick={() => setIsInDetail((isInDetail) => !isInDetail)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <div>Notebook detail</div>
        </motion.div>
      ) : (
        <motion.div
          transition={{ duration: 200 }}
          className="flex space-between group"
        >
          <span>Notebooks</span>
          <button
            onClick={() => setIsInDetail((isInDetail) => !isInDetail)}
            className="hidden ml-auto group-hover:flex"
          >
            Detail
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notebooks;

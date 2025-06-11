import React from "react";
import useWindowSize from "./screenSize.js";
import ReactConfetti from "react-confetti";

const Confetti = ({ run }) => {
  const size = useWindowSize();
  return (
    <div>
      <ReactConfetti
        numberOfPieces={300}
        gravity={0.3}
        run={run}
        recycle={false}
        width={size.width}
        height={size.height}
      />
    </div>
  );
};

export default Confetti;

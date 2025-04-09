import TableComponent from "../components/Table";
import ProgressBarComponent from "../components/ProgressBar";
import TierLevels from "../components/TierLevels";
import StampCard from "../components/StampCard";
import Points from "../components/Points";
import { useState } from "react";

export default function Dashboard() {
  const [points, setPoints] = useState(0);

  const updatePoints = (newPoints) => {
    setPoints(newPoints);
  }

  return (
    <>
      <Points points={points} updatePoints={updatePoints} />
      <TierLevels />
      <ProgressBarComponent />
      <StampCard points={points} />
      <TableComponent />
    </>
  );
  
}


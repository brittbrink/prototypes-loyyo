import React from "react";
import { ProgressProvider } from "../context/ProgressTiersContext";
import { useVisibility } from "../context/GenericVisibilityContext";

// Importeer al je componenten
import TableComponent from "../components/Table";
import ProgressBarComponent from "../components/ProgressBar";
import TierLevels from "../components/TierLevels";
import StampCard from "../components/StampCard";
import Points from "../components/Points";
import Texts from "../components/Texts";
import Location from "../components/Location";

export default function Dashboard() {
  const { visibility, componentOrder } = useVisibility();

  const componentMap = {
    table: <TableComponent />,
    progressBar: <ProgressBarComponent />,
    tierLevel: <TierLevels />,
    stampCard: <StampCard />,
    points: <Points />,
    texts: <Texts />,
    location: <Location />,
  };

  return (
    <ProgressProvider>
      {componentOrder.map((key) =>
        visibility[key] ? <React.Fragment key={key}>{componentMap[key]}</React.Fragment> : null
      )}
    </ProgressProvider>
  );
}

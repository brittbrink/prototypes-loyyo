import TableComponent from "../components/Table";
import ProgressBarComponent from "../components/ProgressBar";
import TierLevels from "../components/TierLevels";
import StampCard from "../components/StampCard";
import Points from "../components/Points";
import Texts from "../components/Texts";
import { ProgressProvider } from "../context/ProgressTiersContext";
import Location from "../components/Location";

export default function Dashboard() {
  return (
    <>
      <ProgressProvider>
        <Points />
        <TierLevels />
        <ProgressBarComponent />
        <StampCard />
        <TableComponent />
        <Texts />
        <Location />
      </ProgressProvider>
    </>
  );

}


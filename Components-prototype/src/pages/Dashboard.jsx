import TableComponent from "../components/Table";
import ProgressBarComponent from "../components/ProgressBar";
import TierLevels from "../components/TierLevels";
import StampCard from "../components/StampCard";

export default function Dashboard() {

  return (
    <>
      <TierLevels />
      <ProgressBarComponent />
      <StampCard />
      <TableComponent />
    </>
  );
  
}


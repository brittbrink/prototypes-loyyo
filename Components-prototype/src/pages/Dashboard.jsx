import TableComponent from "../components/Table";
import ProgressBarComponent from "../components/ProgressBar";
import TierLevels from "../components/TierLevels";

export default function Dashboard() {

  return (
    <>
      <TierLevels />
      <TableComponent />
      <ProgressBarComponent />
    </>
  );
  
}


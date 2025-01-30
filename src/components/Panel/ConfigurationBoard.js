import { usePanel } from "@/context/PanelContext";

const ConfigurationBoard = () => {
  const { setActiveComponent } = usePanel();

  return (
    <div>
      <button
        className="p-2 bg-blue-500 rounded"
        onClick={() => setActiveComponent("")}
      >
        Go back
      </button>
      <h1>Configuration Board</h1>
    </div>
  );
};

export default ConfigurationBoard;

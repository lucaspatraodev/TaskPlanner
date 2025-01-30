import { usePanel } from "@/context/PanelContext";

const NewTagForm = () => {
  const { setActiveComponent } = usePanel();

  return (
    <form>
      <button
        className="p-2 bg-blue-500 rounded"
        onClick={() => setActiveComponent("")}
      >
        Go back
      </button>
      {/* <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type="submit">Add Tag</button> */}
    </form>
  );
};

export default NewTagForm;

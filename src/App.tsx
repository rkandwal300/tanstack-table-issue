import "./App.css";
import { NotionKanban } from "./components/shared/DragAndDrop/NotionKhanban";

function App() {
  return (
    <section className="flex flex-1">
      {/* <TableRenderProblem /> */}
      <NotionKanban />
    </section>
  );
}

export default App;

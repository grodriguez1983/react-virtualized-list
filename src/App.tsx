import "./styles.css";
import { List } from "./components/list";
import { useDictionary } from "./hooks/useDictionary";

export default function App() {
  const dictionary = useDictionary();
  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>React Virtualized List</span>
        </div>
      </div>
      <div className="content">
        <List items={dictionary} />
      </div>
    </div>
  );
}

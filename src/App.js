import { useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import GetPath from "./store/get-path-context";

function App() {
  const [query, setQuery] = useState("");

  return (
    <GetPath.Provider value={query}>
      <div className='App'>
        <header className='App-header'>
          <Form />
        </header>
      </div>
    </GetPath.Provider>
  );
}

export default App;

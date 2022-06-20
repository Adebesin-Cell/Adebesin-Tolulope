import { useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import GetPath from "./store/get-path-context";
import { GetPathHandler } from "./component/getPath/getPath";
import { a } from "./data/data";

function App() {
  const [query, setQuery] = useState("");

  const searchQueryHandler = function (query) {
    setQuery(query);
    console.log(query);
    const path = GetPathHandler(a, "firstName", query);

    console.log(path);
  };

  return (
    <GetPath.Provider value={query}>
      <div className='App'>
        <header className='App-header'>
          <Form onSearch={searchQueryHandler} />
        </header>
      </div>
    </GetPath.Provider>
  );
}

export default App;

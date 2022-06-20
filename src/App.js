import { useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import GetPath from "./store/get-path-context";
import { GetPathHandler } from "./component/getPath/getPath";
import { a } from "./data/data";
import { flattenObj } from "./component/getPath/flattenObject";

function App() {
  const [query, setQuery] = useState("");

  const searchQueryHandler = function (query) {
    setQuery(query);

    const flattenedData = flattenObj(a);

    const myKeyStr = Object.keys(flattenedData).find(
      (key) => flattenedData[key] === query
    );

    const singleKeyIndex = myKeyStr.lastIndexOf(".");

    const myKey = myKeyStr.slice(singleKeyIndex + 1);

    const path = GetPathHandler(a, myKey, query);

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

import React from "react";

import { Header } from "../Header/Header";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <div>Content will live in here...</div>
      </main>
    </div>
  );
};

export default App;

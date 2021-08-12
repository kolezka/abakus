import React from "react";

// import { Table } from "abakus";
// import { Column } from "abakus/src/models/column.models";
import { LegendProvider } from "./components/Legend/Legend.Provider";
import { IndexView } from "./views/IndexView";

import "tailwindcss/dist/tailwind.css";
import "./index.css";

const App = () => {
  return (
    <LegendProvider>
      <IndexView />
    </LegendProvider>
  );
};

export default App;

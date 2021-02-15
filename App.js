import React from "react";
import Router from "./app/Router/Router";
import { AppProvider } from "./app/contexts/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;

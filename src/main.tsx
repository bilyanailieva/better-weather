import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RootStore from "./observable/RootStore.ts";

const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <rootStoreContext.Provider value={rootStore}>
      <App />
    </rootStoreContext.Provider>
  </React.StrictMode>
);

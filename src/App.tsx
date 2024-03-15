// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { ExampleChart } from "./components/ExampleChart";
import { rootStoreContext } from "./main";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  const rootStore = useContext(rootStoreContext);
  
  return (
    <div className="fixed flex flex-col top-0 left-0 h-screen w-screen">
      <Navbar />
      <div className="flex w-full h-full items-center flex-grow p-5">
        <Menu />
        <div className="divider divider-horizontal"></div>
        <div className="grid w-full h-full flex-grow bg-base-300 rounded-box place-items-center">
          {rootStore.activeTab === 'chart' ? <ExampleChart /> : <>Hello friend!</>}
        </div>
      </div>
    </div>
  );
});

export default App;

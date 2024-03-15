import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="fixed flex flex-col top-0 left-0 h-screen w-screen">
      <Navbar />
      <div className="flex w-full h-full items-center flex-grow p-5">
        <Menu />
        <div className="divider divider-horizontal"></div>
        <div className="grid w-full h-full flex-grow bg-base-300 rounded-box place-items-center">
          <button type="button" className="btn btn-secondary">Hellos</button>
        </div>
      </div>
    </div>
  );
}

export default App;

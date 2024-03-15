import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { rootStoreContext } from "../main";
import { useContext } from "react";

const Menu = observer(() => {
  const rootStore = useContext(rootStoreContext);
  
  return (
    <ul className="menu bg-base-200 rounded-box m-3">
      <li>
        <button onClick={() => rootStore.setActiveTab('home')} className="tooltip tooltip-right" data-tip="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </li>
      <li>
        <button onClick={() => rootStore.setActiveTab('info')} className="tooltip tooltip-right" data-tip="Details">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </li>
      <li>
        <button onClick={() => rootStore.setActiveTab('chart')} className="tooltip tooltip-right" data-tip="Stats">
          <FontAwesomeIcon className="h-5 w-5" icon={faChartLine} />
        </button>
      </li>
    </ul>
  );
});

export default Menu;

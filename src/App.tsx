import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-glass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;

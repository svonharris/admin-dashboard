import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-glass">
          <Sidebar />
          <MainDash />
        </div>
      </div>
    </>
  );
}

export default App;

import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-glass">
          <CssBaseline />
          <Sidebar />
          <MainDash />
        </div>
      </div>
    </>
  );
}

export default App;

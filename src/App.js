import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;

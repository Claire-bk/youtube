import { QueryClientProvider, QueryClient } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;

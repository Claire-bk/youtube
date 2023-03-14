import { QueryClientProvider, QueryClient } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;

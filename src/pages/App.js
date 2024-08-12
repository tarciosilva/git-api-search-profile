import { Search, Wrapper } from "../components";
import GithubProvider from "../providers/githubProvider";

function App() {
  return (
    <GithubProvider>
      <main>
        <Search />
        <Wrapper />
      </main>
    </GithubProvider>
  );
}

export default App;

import './App.css';
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";

function App() {
  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar />
      <section>
        <div>
          <h2>Results</h2>
          <TrackList />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}

export default App;

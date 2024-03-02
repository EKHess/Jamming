import './App.css';
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";

function App(props) {
  return (
    <div className="App">
      <h1 className="header-title">Jamming</h1>
      <div className="search-bar">
        <SearchBar />
      </div>

      <section className='container'>
        <div>
          <h2>Results</h2>
          <TrackList tracks={props.tracks} />
        </div>
        <div>
          <Playlist />
        </div>
      </section>
    </div>
  );
}

export default App;

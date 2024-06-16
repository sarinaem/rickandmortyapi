import Navbar from "./components/Navbar";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
function App() {
  // wrong way for featching data
  // do this in render logic
  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((res) => {
  //     res.json();
  //   })
  //   .then((data) => console.log(data));
  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((res) => res.json)
  //   .then((data) => console.log(data));
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;

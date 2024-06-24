import Navbar, { SearchResult } from "./components/Navbar"; //NEED IMPORT SearchResult IT
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { allCharacters } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Search } from "./components/Navbar";
function App() {
  const [characters, setCharacters] = useState([]); //UPDATE IN THIS PROGRAM
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectId, setSelectId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );

        setCharacters(data.results.slice(3, 9));
     
        toast.success("Successfully toasted!");
      } catch (err) {
 
        setCharacters([]) 
        toast.error(err.response.data.error);
     
      } finally {
        setIsLoading(false); 
      }
    }
    // if(query.length < 3) {
    //   setCharacters([])

    //   return;

    // }
    fetchData();
  }, [query]);


  const handleCharacter = (id) => {
    setSelectId(prevId => prevId === id ? null : id); //id user
  }
  console.log(selectId);
  return (
    <div className="app">
      <Toaster />
      <Navbar>
        {/* <button onClick={loadCharacter}>load data</button> */}
        <Search query={query} setQuery={setQuery} />

        <SearchResult numofResult={characters.length} />
      </Navbar>
      <Main>
        <CharacterList selectId={selectId} characters={characters} isLoading={isLoading} onSelectCharacter={handleCharacter}/>
        <CharacterDetail selectId={selectId}/>
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}

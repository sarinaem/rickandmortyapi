import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
// import { episodes } from "../../data/data";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "./Loader";
function CharacterDetail({ selectId }) {
  const [character, setCharacter] = useState(null); //change data
  const [isLoading, setIsLoading] = useState(false);
  const [episod, setEpisod] = useState([]);
  useEffect(() => {
    async function fetchData() {
     try {
      setIsLoading(true);
      setCharacter(null);
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`);
      setCharacter(data);
      const episodeId = data.episod.map((e) => {
        return e.split("/").at(-1); //[1,2,3, ...]
       } )
       const {data: episodData} = await axios.get(`https://rickandmortyapi.com/api/episod/${episodeId}`);
       setEpisod(episodData);
     } catch (err) {
      toast.error(err.response.data.error);
     } finally {
      setIsLoading(false);

     }
    }


    if(selectId) fetchData(); //bc selectid first one is null
  }, [selectId]);

  if(isLoading) return <div style={{
    flex: 1,
  }}><Loader /></div>

  if (!character || !selectId) {
    return (
      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: 18,
          color: "var(--slate-300)",
        }}
      >
        plz select character
      </div>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character.image} //show err Cannot read properties of null (reading 'image')
          alt={character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "🧑" : "👩"}</span>
            <span>&nbsp;{character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span>&nbsp;{character.status}</span>
            <span> - &nbsp;{character.species}</span>
          </div>
          <div className="location">
            <p>Last know location:</p>
            <p>{character.location.name}</p>
          </div>
          <div className="action">
            <button className="btn btn--primary">Add to Favorite</button>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.map((item, index) => {
            return (
              <li key={item.id}>
                <div>
                  {String(index + 1).padStart(2, "0")}&nbsp;{item.episode} :{" "}
                  <strong>{item.name}</strong>
                </div>
                <div className="badge badge--secondary">{item.air_date}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;

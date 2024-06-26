import { HeartIcon } from "@heroicons/react/24/outline";
function Navbar({children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;

function Logo() {
 return <div className="navbar__logo">Logo😍</div>;
}

export function Search({query,setQuery}) {
  return (
    <input
      type="text"
      name=""
      value={query}
      onChange={e => setQuery(e.target.value)}
      id=""
      className="text-field "
      placeholder="search..."
    />
  );
}

export function SearchResult({ numofResult }) {
  return <div className="navbar__result">Found { numofResult } characters</div>;
}

export function Favorites({numofFavarites}) {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">{numofFavarites}</span>
    </button>
  );
}

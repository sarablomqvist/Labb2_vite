import { useRef } from "react";
import "./Search.css";

function Search() {
  const myInput = useRef(null);

  return (
    <div className="search">
      <input
        ref={myInput}
        name="addText"
        id="addText"
        placeholder="Vad letar du efter?"
        className="search"
      ></input>
      <button>lägg till</button>
      <div className="curtain">
        <div className="text">Beverly Hills</div>
        <div className="text">Greys Anatomy</div>
        <div className="text">Outlander</div>
      </div>
    </div>
  );
}

export default Search;

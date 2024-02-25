import { useState, useRef, useEffect } from "react";
import "./Search.css";

function Search({ addShow }) {
  const input = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState();

  const onShowClick = (show) => {
    addShow(show);
    input.current.value = "";
    setSearchText("");
  };

  useEffect(() => {
    if (searchText === "") {
      setResult();
      return;
    }

    const fetchData = async () => {
      const baseUrl = "https://api.tvmaze.com/search/shows?q=";
      const url = baseUrl + searchText;

      const response = await fetch(url);
      setResult(await response.json());
    };

    fetchData();
  }, [searchText]);

  let curtainClasses = "curtain";
  let curtainRows = [];

  if (result) {
    curtainRows = result.map((item) => (
      <div
        key={item.show.id}
        className="text"
        onClick={() => onShowClick(item.show)}
      >
        {item.show.name}
      </div>
    ));
  } else {
    curtainClasses += " hidden";
  }

  return (
    <div className="search">
      <input
        ref={input}
        name="addText"
        id="addText"
        placeholder="Vad letar du efter?"
        className="searchField"
        onChange={(event) => setSearchText(event.target.value)}
      ></input>
      <div className="curtainContainer">
        <div className={curtainClasses}>{curtainRows}</div>
      </div>
    </div>
  );
}

export default Search;

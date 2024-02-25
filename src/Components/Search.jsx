import { css } from "@emotion/react";
import { useState, useRef, useEffect, useCallback } from "react";

function Search({ dispatch }) {
  const input = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState();

  const onShowClick = useCallback((show) => {
    dispatch({ type: "add", show });
    input.current.value = "";
    setSearchText("");
  }, []);

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

  const curtainStyles = css`
    text-align: start;
    padding-left: 10px;
    padding-right: 20px;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    ${result ? "" : "display: none;"}
  `;

  let curtainRows = [];

  if (result) {
    curtainRows = result.map((item) => (
      <div
        key={item.show.id}
        css={css`
          color: black;
          font-size: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          &:hover {
            color: gray;
            cursor: pointer;
          }
        `}
        onClick={() => onShowClick(item.show)}
      >
        {item.show.name}
      </div>
    ));
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        color: black;
        align-self: stretch;
        align-items: stretch;
        padding: 0 40px;
      `}
    >
      <input
        ref={input}
        name="addText"
        id="addText"
        placeholder="Vad letar du efter?"
        css={css`
          padding: 15px;
          border-radius: 10px;
          font-size: 20px;
        `}
        onChange={(event) => setSearchText(event.target.value)}
      ></input>
      <div
        css={css`
          position: relative;
        `}
      >
        <div css={curtainStyles}>{curtainRows}</div>
      </div>
    </div>
  );
}

export default Search;

import { css } from "@emotion/react";
import { useReducer, useMemo } from "react";
import Search from "./Search";
import Row from "./Row";
import Footer from "./Footer";
import H1 from "./H1";
import ListContext from "./ListContext";

function BigBox() {
  const [list, dispatch] = useReducer((state, action) => {
    if (action.type === "add") {
      return [...state, action.show];
    }
  }, []);

  const secondList = useMemo(
    () => list.map((item, index) => <Row key={index} item={item} />),
    [list]
  );

  return (
    <ListContext.Provider value={list}>
      <div
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 500px;
          width: 400px;
          background-color: #78866b;
          border: 1.5px solid black;
          padding: 20px;
          padding-bottom: 100px;
          background-color: #78866b;
          border-radius: 30px;
        `}
      >
        <H1 />
        <Search dispatch={dispatch} />
        <div>{secondList}</div>
        <Footer />
      </div>
    </ListContext.Provider>
  );
}

export default BigBox;

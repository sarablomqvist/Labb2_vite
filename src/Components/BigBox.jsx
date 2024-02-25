import { useReducer, useMemo } from "react";
import "./BigBox.css";
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
      <div className="bigBox">
        <H1 />
        <Search dispatch={dispatch} />
        <div className="secondList">{secondList}</div>
        <Footer />
      </div>
    </ListContext.Provider>
  );
}

export default BigBox;

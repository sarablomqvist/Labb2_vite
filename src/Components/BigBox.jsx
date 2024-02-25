import { useState } from "react";
import "./BigBox.css";
import Search from "./Search";
import Row from "./Row";
import Footer from "./Footer";
import H1 from "./H1";

function BigBox(props) {
  const [list, setList] = useState([]);

  const secondList = list.map((item, index) => <Row key={index} item={item} />);

  const addShow = (show) => setList([...list, show]);

  return (
    <div className="bigBox">
      <H1 />
      <Search addShow={addShow} />
      <div className="secondList">{secondList}</div>
      <Footer />
    </div>
  );
}

export default BigBox;

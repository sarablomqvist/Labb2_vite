import { useState } from "react";
import "./BigBox.css";
import Search from "./Search";
import Rows from "./Rows";
import DeleteAllButton from "./DeleteAllButton";
import Footer from "./Footer";
import H1 from "./H1";

function BigBox(props) {
  const [list, setList] = useState([]);

  const secondList = list.map((item, index) => (
    <Rows key={index} item={item} />
  ));

  return (
    <div className="bigBox">
      <H1 />
      <Search />
      <div className="secondList">{secondList}</div>
      <DeleteAllButton />
      <Footer />
    </div>
  );
}

export default BigBox;

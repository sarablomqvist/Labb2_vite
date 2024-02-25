import { useContext } from "react";
import "./Footer.css";
import DeleteAllButton from "./DeleteAllButton";
import ListContext from "./ListContext";

function Footer() {
  const list = useContext(ListContext);

  return (
    <div className="footer">
      <span className="count">{list.length} series on the list</span>
      <DeleteAllButton />
    </div>
  );
}

export default Footer;

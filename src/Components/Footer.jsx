import "./Footer.css";
import DeleteAllButton from "./DeleteAllButton";

function Footer() {
  return (
    <div className="footer">
      <span className="count">x series on the list</span>
      <DeleteAllButton />
    </div>
  );
}

export default Footer;

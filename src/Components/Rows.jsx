import "./Rows.css";

function Rows(props) {
  const item = props.item;

  return (
    <div className="rader">
      <div className="rows">{item}</div>
      <img src="edit-button.png" className="editButton"></img>
      <div className="xButton">x</div>
    </div>
  );
}

export default Rows;

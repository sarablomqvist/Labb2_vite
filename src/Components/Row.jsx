import "./Row.css";

function Row(props) {
  const item = props.item;

  return (
    <div className="row">
      <div className="name">{item}</div>
      <img src="edit-button.png" className="editButton"></img>
      <div className="xButton">x</div>
    </div>
  );
}

export default Row;

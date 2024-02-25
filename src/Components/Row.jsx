import { css } from "@emotion/react";

function Row(props) {
  const item = props.item;

  return (
    <div
      css={css`
        display: flex;
        top: 230px;
      `}
    >
      <div
        css={css`
          border: 1px solid black;
          background-color: white;
          padding-inline: 30px;
          border-radius: 8px;
          font-size: 20px;
          width: 200px;
          margin-right: 10px;
        `}
      >
        {item.name}
      </div>
      <img
        src="edit-button.png"
        css={css`
          width: 20px;
          height: 20px;
          right: 0;
          margin-right: 5px;
          padding-top: 5px;
        `}
      ></img>
      <div
        css={css`
          font-size: 20px;
          color: #35363c;
        `}
      >
        x
      </div>
    </div>
  );
}

export default Row;

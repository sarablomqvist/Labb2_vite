import { css } from "@emotion/react";

function DeleteAllButton() {
  return (
    <button
      css={css`
        font-size: 10px;
        margin-top: 10px;
        color: red;
      `}
    >
      Radera listan
    </button>
  );
}

export default DeleteAllButton;

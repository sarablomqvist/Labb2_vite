import { css } from "@emotion/react";
import { useContext } from "react";
import DeleteAllButton from "./DeleteAllButton";
import ListContext from "./ListContext";

function Footer() {
  const list = useContext(ListContext);

  return (
    <div
      css={css`
        position: absolute;
        bottom: 20px;
      `}
    >
      <span
        css={css`
          display: block;
          color: pink;
        `}
      >
        {list.length} series on the list
      </span>
      <DeleteAllButton />
    </div>
  );
}

export default Footer;

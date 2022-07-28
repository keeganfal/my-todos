import "./ListItem.scss";
import { useState } from "react";

const ListItem = ({ listName }) => {
  const [done, setDone] = useState("listItem");

  const handleCheckbox = () => {
    if (done == "listItem") {
        setDone("listItem--done")
    }
    else{
        setDone("listItem")
    }
  }

  return (
    <div className={done}>
      <p>{listName}</p>
      <input type="checkbox" onClick={handleCheckbox} />
    </div>
  );
};

export default ListItem;

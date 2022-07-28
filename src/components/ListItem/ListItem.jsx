import "./ListItem.scss";
import { useState } from "react";

const ListItem = ({ listName, handleDelete }) => {
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
      <input type="checkbox" onClick={handleCheckbox} />
      <p>{listName}</p>
      <button onClick={() => handleDelete(listName)}>Delete</button>
    </div>
  );
};

export default ListItem;

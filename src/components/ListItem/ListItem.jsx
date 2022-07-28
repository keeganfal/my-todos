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

  const handleDelete = () => {
    
  }

  return (
    <div className={done}>
      <p>{listName}</p>
      <input type="checkbox" onClick={handleCheckbox} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListItem;

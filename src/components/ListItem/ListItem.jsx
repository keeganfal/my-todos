import "./ListItem.scss";

const ListItem = ({ listName }) => {
  return (
    <div className="ListItem">
      <p>{listName}</p>
    </div>
  );
};

export default ListItem;

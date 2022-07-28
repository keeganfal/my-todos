import "./ListItem.scss";

const ListItem = ({ listName }) => {
  return (
    <div className="ListItem">
      <p>{listName}</p>
      <input type="checkbox" />
    </div>
  );
};

export default ListItem;

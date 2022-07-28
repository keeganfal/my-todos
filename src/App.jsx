
import './App.css';
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input';
import ListItem from './components/ListItem/ListItem';
import { useState } from 'react';

function App() {

  const [item, setItems] = useState([]);

  const handleDelete = (listName) => {
    setItems(item.filter(filterItem => {
      return (filterItem != listName);
    }));
  }

  const listItemsJSX = item.map((list, index) => (
    <ListItem key={index} listName={list} handleDelete={handleDelete}/>
  ));

  const handleReset = () => {
    setItems([]);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setItems([...item, e.target[0].value]);
  };

  return (
    <div className="App">
      <section className="header">
        <h1 className="header__name">My Todos</h1>
        <Button label="Reset" onClick={handleReset}></Button>
      </section>
      
      <Input handleInput={handleInput}></Input>

      <div className="list-items">
        {listItemsJSX}
      </div>

    </div>
  );
}

export default App;

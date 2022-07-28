
import './App.css';
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input';
import ListItem from './components/ListItem/ListItem';
import { useState } from 'react';

function App() {

  const [item, setItems] = useState([]);
  
  const listItemsJSX = item.map((list, index) => (
    <ListItem key={index} listName={list}/>
  ));

  const handleReset = () => {
    setItems([]);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setItems([...item, e.target[0].value]);
  };

  console.log(listItemsJSX);

  return (
    <div className="App">
      <h1 className="header">My Todos</h1>

      <Button label="Reset" onClick={handleReset}></Button>
      
      <br />
      <Input handleInput={handleInput}></Input>

      <div className="list-items">
        {listItemsJSX}
      </div>

    </div>
  );
}

export default App;

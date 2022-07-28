import "./Input.scss";

const Input = ({ handleInput }) => {
  return (
    <form className="input-form" onSubmit={handleInput}>
      <input className="input" type="text" placeholder="Add your task here..."/>
      <button className="submit" type="submit">Submit</button> 
    </form>
  );
};

export default Input;

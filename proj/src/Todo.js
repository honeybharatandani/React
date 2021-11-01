import React, { useState } from "react";

function Todo() {
  const [text, setText] = useState([]);
  const [list, setList] = useState([]);

    
  const handleClick = value => {
      setList([...list, value]);
    setText("");
  };

    const changeHandler = e => {
        e.preventDefault();
    setText(e.target.value);
  };

    // const [del, setDelete] = useState([]);
    const removeItem = (props) => {
    
    }
   


    
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="enter todo"
              onChange={changeHandler}
              autoFocus
        value={text}
      ></input>
      {list.map((item, a) => {
        return <li key={a}>{item}</li>;
      })}
      <button onClick={() => handleClick(text)}>ADD</button>
    <button onselect={removeItem}>X</button>  
    </div>
  );
}

export default Todo;

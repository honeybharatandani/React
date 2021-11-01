import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const Axios = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      // console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <div class="container">
      <h1>Axios data fetched</h1>
      <h3>
        you choose<span> {num}</span> value
      </h3>
      <h3>
        my name is <span>{name}</span>
      </h3>
      <h3>
        I have <span>{moves}</span> moves
      </h3>
      <select
        value={num}
        onChange={e => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default Axios;

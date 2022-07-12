import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
const Counter = () => {
 const [counter, setCounter] = useState(0);

 const fetchData = () => {
   axios.get("http://localhost:8080/counter").then((r) => {
     setCounter(r.data.value);
   });
 };

 const IncreatmentHandle = () => {
   axios
     .post("http://localhost:8080/counter", { value: counter + 1 })
     .then((r) => setCounter(r.data.value));
 };

 useEffect(() => {
   fetchData();
 }, []);

 return (
   <div className="App">
     <h2>count is {counter}</h2>
     <button className="increment_count" onClick={IncreatmentHandle}>
       add
     </button>
     <button
       className="decrement_count"
       onClick={() => setCounter((prev) => prev - 1)}
     >
       red
     </button>
   </div>
 );
}

export default Counter
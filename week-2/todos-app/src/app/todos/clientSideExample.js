'use client';
import { useState, useEffect } from "react";

export default function Todos() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const resData = await res.json();

    setData(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Todos</p>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}
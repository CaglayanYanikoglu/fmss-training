import Link from "next/link";

const fetchData = async () => {
  try {
    await new Promise(r => setTimeout(r, 500));
  
    // const res = await fetch('https://jsonplacehol2der.typicode.com/todos');
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  
    const resData = await res.json();
    return resData;
    
  } catch (error) {
    console.log('error');
  }
};

export default async function Todos() {
  const data = await fetchData();
  return (
    <div>
      <p>Todos</p>
      {data.map(todo => (
        <div key={todo.id}>
          <Link href={`todos/${todo.id.toString()}`}>{todo.title}</Link>
          {/* <a href={todo.id}>{todo.title}</a> */}
          <p>{todo.completed}</p>
        </div>
      ))}

    </div>
  )
}
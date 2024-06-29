const fetchData = async (id) => {
  try {
    await new Promise(r => setTimeout(r, 500));
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
    const resData = await res.json();
    return resData;
    
  } catch (error) {
    console.log('error');
  }
};

export default async function TodoItem({
  params, searchParams
}) {
  console.log(params);
  const data = await fetchData(params.todoId);
  return (
    <div>
      Todo item
      <p>ID: {data.id}</p>
      <p>title: {data.title}</p>
      <p>Is completed: {data.completed ? 'Yes' : 'No'}</p>
    </div>
  )
}
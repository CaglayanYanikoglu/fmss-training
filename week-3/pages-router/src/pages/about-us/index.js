
export default function AboutUs(props) {
  const { todos } = props;
  return (
    <div>
      <h2>Todos:</h2>
      <p>Name: {props.name}</p>
      <div>
        {todos.map(item => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const resData = await res.json();

  return {
    props: {
      name: 'caglayan',
      todos: resData
    }
  }
}
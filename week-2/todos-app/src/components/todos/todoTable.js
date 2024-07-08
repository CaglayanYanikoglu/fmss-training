import Link from "next/link";
import styles from "./style.module.css";
import Pagination from "./pagination";

const fetchData = async (page, size) => {
  try {
    const skip = (page - 1) * size;
    const res = await fetch(
      `https://dummyjson.com/todos?limit=${size}&skip=${skip}`
    );
    const { todos, total } = await res.json();

    const pageCount = Math.ceil(total / size);
    return { pageCount, data: todos };
  } catch (error) {
    console.log("error");
  }
};
export default async function TodoTable({ page, size }) {
  const { data, pageCount } = await fetchData(page, size);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">User Detail</th>
            <th scope="col">Todo Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
              <td>
                <div
                  className={
                    todo.completed ? styles.completed : styles.notCompleted
                  }
                ></div>
              </td>
              <td>
                <Link
                  href={`?page=${page}&size=${size}&user_id=${todo.userId}`}
                >
                  Show
                </Link>
              </td>
              <td>
                <Link href={`/todos/${todo.id}`}>Go</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pageCount={pageCount} />
    </div>
  );
}

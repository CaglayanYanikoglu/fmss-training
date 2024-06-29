
export const metadata = {
  title: "Todo List",
  description: "List of todos",
};

export default function TodoLayout({ children }) {
  return (
    <div className="todo-layout">
      <h3>Todo Layout</h3>
      {children}
    </div>
  );
}

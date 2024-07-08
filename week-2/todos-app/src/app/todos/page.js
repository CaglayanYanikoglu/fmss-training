import TodoTable from "@/components/todos/todoTable";
import UserDetail from "@/components/user/userDetail";
import styles from "./todos.module.css";
import { Suspense } from "react";
function parsePageFromSearchParams(searchParams) {
  if (!searchParams["page"]) {
    return 1;
  }
  const parsedPage = parseInt(searchParams["page"]);
  return isNaN(parsedPage) ? 1 : Math.max(parsedPage, 1); // to return only positive numbers
}

function parseSizeFromSearchParams(searchParams) {
  if (!searchParams["size"]) {
    return 10;
  }
  const parsedSize = parseInt(searchParams["size"]);
  return isNaN(parsedSize) ? 10 : Math.max(parsedSize, 10); // to return only positive numbers and min size (10)
}
function parseUserIdFromSearchParams(searchParams) {
  if (!searchParams["user_id"]) {
    return undefined;
  }
  const parsedUserId = parseInt(searchParams["user_id"]);
  return isNaN(parsedUserId) ? undefined : parsedUserId;
}
export default function Todos({ searchParams }) {
  const page = parsePageFromSearchParams(searchParams);
  const size = parseSizeFromSearchParams(searchParams);
  const userId = parseUserIdFromSearchParams(searchParams);
  return (
    <div className={styles.todosGrid}>
      <Suspense fallback={<p>Loading...</p>}>
        <TodoTable page={page} size={size} userId={userId} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <UserDetail userId={userId} />
      </Suspense>
    </div>
  );
}

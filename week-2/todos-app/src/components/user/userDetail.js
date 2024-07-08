import Image from "next/image";
import styles from "./style.module.css";

const fetchData = async (userId) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/${userId}`);

    const resData = await res.json();

    return resData;
  } catch (error) {
    console.log("error");
  }
};

export default async function UserDetail({ userId }) {
  if (!userId) {
    return (
      <div className={styles.card}>
        <p>Click Show button on the left to see user details</p>
      </div>
    );
  }
  const userData = await fetchData(userId);
  return (
    <div className={styles.card}>
      <Image src={userData.image} width={128} height={128} alt="John" />
      <h1>
        {userData.firstName} {userData.lastName}
      </h1>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>
        {userData.address.address} {userData.address.city}/
        {userData.address.state}
      </p>
    </div>
  );
}

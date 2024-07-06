
const fetchUser = async () => {
  const res = await fetch('http://localhost:3000/api/user');
  const resData = await res.json();
  return resData;
};


export default async function SideMenu({
  /* data */
}) {
  const data = await fetchUser();
  return (
    <div>
      <h2>Side Menu Page</h2>
      <p>Name: {data.name}</p>
      <p>Company: {data.company}</p>
      <p>Is Smoking: {data.isSmoking ? 'true' : 'false'}</p>
    </div>
  )
}
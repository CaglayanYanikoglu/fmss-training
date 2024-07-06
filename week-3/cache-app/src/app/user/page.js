import SideMenu from "./sidemenu";

export const revalidate = 15;

const fetchUser = async () => {
  const res = await fetch('http://localhost:3000/api/user', {
    cache: 'no-store'
  });
  /* const res = await fetch('http://localhost:3000/api/user', {
    next: {
      revalidate: 3600 // saniye cinsinden cache'in geçerlilik süresi (1 saat)
    }
  }); */
  /* const res = await fetch('http://localhost:3000/api/user', {
    next: {
      revalidate: 0
    }
  }); */
  /* const res = await fetch('http://localhost:3000/api/user'); */
  const resData = await res.json();
  return resData;
};


export default async function User() {
  const data = await fetchUser();
  console.log(data);
  return (
    <div>
      <h2>User Page</h2>
      <p>Name: {data.name}</p>
      <p>Company: {data.company}</p>
      <p>Is Smoking: {data.isSmoking ? 'true' : 'false'}</p>
      <p>Age: {data.age}</p>
      <div>
        {/* <SideMenu data={data} /> */}
      </div>
    </div>
  )
}
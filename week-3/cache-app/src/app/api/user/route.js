import { NextResponse } from "next/server";

export async function GET (request) {
  console.log('######ISTEK GELDI#####');
  const user = {
    name: 'caglayan',
    company: 'Jotform',
    isSmoking: true,
    age: 29
  };

  return NextResponse.json(user);
}
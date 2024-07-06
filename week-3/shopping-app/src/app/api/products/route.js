import { NextResponse } from "next/server";

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
];

export async function GET(request) {
  console.log('###get')
  return NextResponse.json(products)
}

export async function POST(request) {
  console.log('####POST###');
  const {title, price, image} = await request.json();

  products.push({
    title,
    image,
    price
  })

  return NextResponse.json({
    success: true
    })
}
"use client"

import Header from './components/Header'

export default async function Home() {
  const data = await (await fetch("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")).json()
 console.log(data);
 
 return <>
  <Header/>
  </>
  

   
}

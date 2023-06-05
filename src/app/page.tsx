"use client"

import {IResponseData} from '../types/ResponseApi'

import Header from './components/Header'
import Main from './components/Main';

export default async function Home() {
  const data :IResponseData = await (await fetch("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")).json() 
   
 
 return <>
  <Main data={data} />
  </>
  

   
}

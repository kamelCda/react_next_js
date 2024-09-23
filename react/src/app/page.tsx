'use client'


import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/MyButton";
import Profile from "@/components/profile";
import Products from "@/components/Products";
import { useState } from "react";


export default function Home() {


  const [count,setCount]=useState(0);
    
    
    function handleClick(){
      setCount(count+1);
     }
  
    
  return (
    <main>
      
      <h1>ceci est un test</h1>
      <MyButton count={count} onClick={handleClick}/> 
      <MyButton count={count} onClick={handleClick}/> 
      <Profile/>
      <Products/>
    </main>
   
  );
}

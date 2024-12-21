"use client"
import React, { useEffect } from 'react'
import Explore from "@/components/Explore";
import { useRouter } from 'next/navigation';
const page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log("token")
    console.log(token)
    if (!token) {
      router.replace('/login'); // Redirect to login if token is missing
    } 
  }, [router]);
  return (
    <div>
      <Explore/>
    </div>
  )
}

export default page

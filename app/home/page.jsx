import React from 'react'
import Banner from "@/components/home/Banner";

import KeyFeautures from "@/components/home/KeyFeautures";
import Howitwork from "@/components/home/Howitwork";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function page() {
  return (
    <div>
      <Header/>
        <Banner />
        <KeyFeautures />
        <Howitwork />
    
    </div>
  )
}

export default page
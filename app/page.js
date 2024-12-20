import Banner from "@/components/home/Banner";
import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import KeyFeautures from "@/components/home/KeyFeautures";
import Howitwork from "@/components/home/Howitwork";
export default function Home() {
  return (
    <>
    <Banner />
    <div className="bg-primary   flex items-center justify-center flex-col
    ">
    <h1 className="text-center text-4xl font-bold pt-4  text-secendry">Key Features</h1>
    <KeyFeautures />
    </div>
    <Howitwork />
 
{/* <LoginForm /> */}
    </>
  );
}

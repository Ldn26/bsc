import Banner from "@/components/Banner";
import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import KeyFeautures from "@/components/KeyFeautures";

export default function Home() {
  return (
    <>
    <Banner />
    <div className="bg-primary flex items-center justify-center flex-col
    ">
    <h1 className="text-center text-4xl font-bold  text-secendry">Key Features</h1>
    <KeyFeautures />
    </div>
{/* <LoginForm /> */}
    </>
  );
}

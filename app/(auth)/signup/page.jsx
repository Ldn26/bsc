import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegulareUserForm from "../../../components/signup/RegulareUserForm";
import HostelsForm from "../../../components/signup/HostelsFrom";
export default function page() {
  return (

<div className="h-[calc(100vh-88px)]">
<h1 className="text-center font-bold   text-[28px] mt-12 ">Sign Up </h1>
      <Tabs defaultValue="Hostel" className="w-[600px]  mt-5 mx-auto mb-20">
        <TabsList className="w-full bg-primary text-white flex items-center justify-center ">
        <TabsTrigger value="Hostel" className="w-1/2 font-bold ">
            Hostel
          </TabsTrigger>
          <TabsTrigger value="User" className="w-1/2 font-bold ">
        User{" "}
          </TabsTrigger>
    
        </TabsList> 
        <TabsContent value="Hostel"  >
          {/* <ClientForm /> */}
          <HostelsForm />

        </TabsContent>
        <TabsContent value="User">
          {/* <WorkerForm /> */}
          <RegulareUserForm />
        </TabsContent>
      </Tabs>
</div>


//   <div  className="   h-[calc(100vh-88px)] flex items-center justify-center flex-col bg-white "> 



// <Tabs defaultValue="account" className="w-[400px]">
// <div className="flex bg-primary  p-12     ">
// <TabsList>
//     <TabsTrigger value="account">Account</TabsTrigger>
//     <TabsTrigger value="password">Password</TabsTrigger>
//   </TabsList>
// </div>

//   <TabsContent value="account">Make changes to your account here.</TabsContent>
//   <TabsContent value="password">Change your password here.</TabsContent>
// </Tabs>
//   </div>




  );
}

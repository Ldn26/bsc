import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegulareUserForm from "../../../components/signup/RegulareUserForm";
import HostelsForm from "../../../components/signup/HostelsFrom";
import Header from "@/components/Header";
export default function page() {
  return (
<>
<Header/>

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


</>


  );
}

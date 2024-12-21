"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
// import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
function LoginForm() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  // const onSubmitUser = async (data) => {
  //   const obj = {
  //     login: data.email,
  //     password: data.password,
  //     role: 'resident',
  //   };
  //   console.log(obj);
  //   try {
  //     const response = await axios.post('https://smartcity-w5yq.onrender.com/users/login', obj);

  //     if (!response.data) {
  //       Swal.fire({
  //         title: 'Username or password does not exist',
  //         icon: 'error',
  //         toast: true,
  //         timer: 4000,
  //         position: 'top-right',
  //         timerProgressBar: false,
  //         showConfirmButton: false,
  //         showCancelButton: true,
  //       });
  //       return;
  //     }

  //     const responseData = response.data;
  //     console.log("responseData");
  //     console.log(responseData);
  //     localStorage.setItem('authToken', JSON.stringify(responseData.accessToken)); // jwt encoded
  //     Swal.fire({
  //       title: 'Login Successful',
  //       icon: 'success',
  //       toast: true,
  //       timer: 4000,
  //       position: 'top-right',
  //       timerProgressBar: false,
  //       showConfirmButton: false,
  //       showCancelButton: true,
  //     });

  //     router.push('/explore');
  //     console.log('Logged in successfully');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const onSubmitUser = async (data) => {
    const obj = {
      login: data.email,
      password: data.password,
      role: 'resident',
    };
    console.log(obj);
    try {
      const response = await fetch('https://smartcity-w5yq.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
  
      if (!response.ok) {
        Swal.fire({
          title: 'Username or password does not exist',
          icon: 'error',
          toast: true,
          timer: 4000,
          position: 'top-right',
          timerProgressBar: false,
          showConfirmButton: false,
          showCancelButton: true,
        });
        return;
      }
  
      const responseData = await response.json();
      console.log("responseData");
      console.log(responseData);
      localStorage.setItem('authToken', JSON.stringify(responseData.accessToken)); // jwt encoded
      Swal.fire({
        title: 'Login Successful',
        icon: 'success',
        toast: true,
        timer: 4000,
        position: 'top-right',
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
  
      router.push('/explore');
      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmiHostel = async (data) => {
    const obj = {
      login: data.email,
      password: data.password,
      role: 'hauberge',
    };
    console.log(obj);
    try {
      const response = await axios.post('https://smartcity-w5yq.onrender.com/users/login', obj);

      if (!response.data) {
        Swal.fire({
          title: 'Username or password does not exist',
          icon: 'error',
          toast: true,
          timer: 4000,
          position: 'top-right',
          timerProgressBar: false,
          showConfirmButton: false,
          showCancelButton: true,
        });
        return;
      }

      const responseData = response.data;
      console.log(responseData);
      localStorage.setItem('authToken', JSON.stringify(responseData.accessToken)); // jwt encoded
      Swal.fire({
        title: 'Login Successful',
        icon: 'success',
        toast: true,
        timer: 4000,
        position: 'top-right',
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });

      router.push('/haubegdash');
      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
  };
  return (
<div className="flex items-center justify-center flex-col h-[calc(100vh-88px)]">
<h1 className="text-center font-bold   text-[28px] mt-12 ">Log in  </h1>
      <Tabs defaultValue="Hostel" className="w-[600px]  mt-5 mx-auto mb-20">
        <TabsList className="w-full bg-primary text-white flex items-center justify-center ">
        <TabsTrigger value="Hostel" className="w-1/2 font-bold ">
            Hostel
          </TabsTrigger>
          <TabsTrigger value="User" className="w-1/2 font-bold ">
        User{" "}
          </TabsTrigger>
    
        </TabsList> 
        <TabsContent value="Hostel" >
        <form
          onSubmit={handleSubmit(onSubmiHostel)}
          className="px-1 my-2 gap-4 items-center  mt-12 flex flex-col"
        >
          <div>
            <input
              type="text" 
              
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="placeholder:text-gray-400 font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
              />
              {!show ? (
                <FaEyeSlash
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(true);
                  }}
                />
              ) : (
                <FaEye
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.password?.message}
              </p>
            )}
          </div>
   
          <button
            type="submit"
            className="py-3 px-7 w-[450px] text-sm font-medium bg-primary text-white hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Log in
          </button>
        </form> 

        </TabsContent>
        <TabsContent value="User">
           <form
          onSubmit={handleSubmit(onSubmitUser)}
          className="px-1 my-2 gap-4 items-center  mt-12 flex flex-col"
        >
          <div>
            <input
              type="text" 
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="placeholder:text-gray-400 font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
              />
              {!show ? (
                <FaEyeSlash
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(true);
                  }}
                />
              ) : (
                <FaEye
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.password?.message}
              </p>
            )}
          </div>
   
          <button
            type="submit"
            className="py-3 px-7 w-[450px] text-sm font-medium bg-primary text-white hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Log in
          </button>
        </form> 

        </TabsContent>
      </Tabs>
</div>
  );
}

export default LoginForm;
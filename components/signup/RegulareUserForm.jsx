"use client"
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function UserForm() {
 
  const router = useRouter();
    const [showRepeat, setShowRepeat] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [show, setShow] = useState(false);
  const Services = ["Private", "Agency", "Club"];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const handleSelectJob = (value) => {
    setSelectedJob(value);
    setValue("Job", value);
  };
  const password = watch("password");


  const onSubmit = async (data) => {
    const obj = {


    //   {
    //     "role" : "idk" ,            
    //     "type " :  "private" ,
    //     "nom" :  "youcefldn"  , 
    //     "email" : "4t4554@gmail.com" ,
    //     "password" : "ert4"  , 
    //     "telephone"   : "3534"
    // }
      role : "fahmni fiha t3men hadi " , 
      nom: data.name,
      email: data.email,
      type :  data.Job , 
      password: data.password,
      telephone: Number(data.number),

    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
        Swal.fire({
          title: "Username Already  exist",
          icon: "error",
          toast: true,
          timer: 4000,
          position: "top-right",
          timerProgressBar: false,
          showConfirmButton: false,
          showCancelButton: true,
        });
        return;
      }

      const responseData = await response.json();
    //   setUser(responseData);
      console.log(responseData.jwt);
      localStorage.setItem("authToken", JSON.stringify(responseData.jwt)); //jwt encoded
      Swal.fire({
        title: "Sign-Up Successful",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
      router.push("/workerDh");
      console.log("Sign in  in successfully");
    } catch (error) {
      console.error(error);
    }
  };

 

  

  return (
    <div className="flex justify-center my-12 items-center">
      <div className=" flex-col justify-center border w-[500px] flex   md:ml-10 ">
        <div className="flex items-center justify-center">
          <h1 className="text-secendFont my-2  text-center  pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
            Welcome User
          </h1>
          <HiSparkles className="text-yellow-400 text-ce" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  px-1  my-2 gap-4 items-center flex flex-col"
        >
          <div>
            <input
              type="text"
              placeholder="User name"
              {...register("name", {
                required: "username is required",
              })}
              className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
            />
            {errors.name && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.name?.message}
              </p>
            )}
          </div>
{/* Password  */}
          <div>
            <div className="flex relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                className="placeholder:text-grayColor   font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
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
              {/* Repeat Password */}
              <div>
                <div className="flex relative">
                  <input
                    type={`${showRepeat ? "text" : "password"}`}
                    placeholder="Repeat Password"
                    {...register("repeatPassword", {
                      required: "Repeat password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
                  />
                  {!showRepeat ? (
                    <FaEyeSlash
                      className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                      onClick={() => {
                        setShowRepeat(true);
                      }}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                      onClick={() => {
                        setShowRepeat(false);
                      }}
                    />
                  )}
                </div>
                {errors.repeatPassword && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.repeatPassword?.message}
                  </p>
                )}
              </div>


          {/* Email  */}
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
              className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
{/* Phone Number */}
          <div>
            <input
              type="text"
              placeholder="Phone number +213"
              {...register("Number", {
                required: "Phone number is required",
        
              })}
              className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
            />
            {errors.Number && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.number?.message}
              </p>
            )}
          </div>
{/* Select how u are  */}
          <div>
            <Select onValueChange={handleSelectJob}>
              <SelectTrigger
                {...register("Job")}
                className="w-[450px] hover:border-secendry hover:shadow-lg text-sm p-3 shadow-sm outline-none bg-white font-mainfont duration-200"
              >
                <SelectValue placeholder="user type" />
              </SelectTrigger>
              <SelectContent
                position="bottom"
                className="bg-secendry   rounded-xl"
              >
                {Services.map((el, index) => (
                  <SelectItem
                    key={index}
                    value={el}
                    className=" font-semibold text-mainfont text-white"
                  >
                    {el}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
  

          <button
            type="submit"
            className="py-2 px-7  w-[450px] text-sm  font-medium  bg-primary text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

// Export the WorkerForm component
export default UserForm;
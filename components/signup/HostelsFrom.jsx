"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineUploadFile } from "react-icons/md";
import { HiMiniPhoto } from "react-icons/hi2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function HostelForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const handleNext = async () => {
    const isValid = await trigger(["name", "password", "repeatPassword", "email", "number"]);
    if (isValid) {
      setActiveTab("file");
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("Numero", Number(data.number));
    formData.append("location", data.location);
    formData.append("roomnbr", data.roomnbr);
    formData.append("offert", data.offert);
    formData.append("hostelPhotos", data.hostelPhotos[0]);
    formData.append("documentations", data.documentations[0]);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
        Swal.fire({
          title: "Username Already exists",
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
      console.log(responseData.jwt);
      localStorage.setItem("authToken", JSON.stringify(responseData.jwt)); // jwt encoded
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
      router.push("/workerDash");
      console.log("Sign in successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-12 items-center">
      <div className="flex-col justify-center border items-center w-[500px] flex md:ml-10">
        <div className="flex items-center justify-center">
          <h1 className="text-secendFont my-2 text-center pl-5 lg:text-4xl text-blueColor whitespace-nowrap font-bold tracking-wide text-xl p-2">
            Welcome Hostel
          </h1>
          <HiSparkles className="text-yellow-400 text-ce" />
        </div>

        <Tabs
          defaultValue="info"
          value={activeTab}
          onValueChange={setActiveTab}
          className="items-center justify-center flex-col mt-5 mx-auto mb-20"
        >
          <TabsList className="w-full bg-transparent flex items-center justify-center">
            <TabsTrigger
              value="info"
              className={`bg-transparent underline-offset-1 transition-all underline ${
                activeTab === "info" ? " scale-110  " : "no-underline"
              }`}
            >
              Hostel informations
            </TabsTrigger>
            <TabsTrigger
              value="file"
              className={`bg-transparent underline-offset-1 transition-all underline ${
                activeTab === "file" ? "scale-110" : "no-underline"
              }`}
            >
              Files and Details
            </TabsTrigger>
          </TabsList>
          <TabsContent value="file">
            {/* Files Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-1 my-2 gap-4 items-center flex flex-col"
            >
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
                {errors.location && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.location?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Rooms Number"
                  {...register("roomnbr", {
                    required: "Room number is required",
                  })}
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
                />
                {errors.roomnbr && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.roomnbr?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Offert"
                  {...register("offert", {
                    required: "Offert number is required",
                  })}
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
                {errors.offert && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.offert?.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between gap-8 w-full">
                <div className="flex gap-4 flex-col">
                  <h1 className="font-bold">Hostel Photos</h1>
                  <div className="flex-col items-center p-4 justify-center border rounded-xl hover:scale-110 transition-all relative">
                    <MdOutlineUploadFile size={40} className="text-center ml-4" />
                    <h1 className="text-xs mt-2">Upload photos</h1>
                    <input
                      type="file"
                      {...register("hostelPhotos")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          console.log(file.name);
                          // Handle the file upload here
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold">Documentations</h1>
                  <div className="flex-col items-center p-4 justify-center border rounded-xl hover:scale-110 transition-all relative">
                    <HiMiniPhoto size={40} className="text-center ml-4" />
                    <h1 className="text-xs mt-2">Upload document</h1>
                    <input
                      type="file"
                      {...register("documentations")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          console.log(file.name);
                          // Handle the file upload here
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="py-2 px-7 w-[450px] text-sm font-medium bg-primary text-white hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </TabsContent>
          <TabsContent value="info">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-1 my-2 gap-4 items-center flex flex-col"
            >
              {/* Hostel name */}
              <div>
                <input
                  type="text"
                  placeholder="Hostel name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
                {errors.name && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              {/* Email */}
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
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
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
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                  className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
                {errors.number && (
                  <p className="text-red-400 mt-1 ml-4 text-sm">
                    {errors.number?.message}
                  </p>
                )}
              </div>

              {/* Password */}
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
                    className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-200"
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

              <button
                type="button"
                onClick={handleNext}
                className="py-2 px-7 w-[450px] text-sm font-medium bg-primary text-white hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
              >
                Next
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default HostelForm;
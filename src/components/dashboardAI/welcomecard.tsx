"use client";
import React, { useEffect, useState } from "react";
import { userFullName } from "@/actions/auth";
import Image from "next/image";

const Welcomecard = () => {
  const [fullname, setFullname] = useState<string | null>(null);

  useEffect(() => {
    const fetchFullname = async () => {
      try {
        const response = await userFullName();
        if (response.status === 200 && response.fullname) {
          setFullname(response.fullname);
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchFullname();
  }, []);

  if (!fullname) return <p>User..</p>;

  return (
    <div className="m-4 rounded-xl min-h-[20vh] dashboard-welcome-card sm:w-[80%] md:w-[97%] ">
      <div className="flex flex-row items-center">
        <div>
          <Image
            src="/images/welcome-dashboard.png"
            height={200}
            width={200}
            alt="image"
          />
        </div>
        <div >
          <h1 className="text-md md:text-5xl font-bold font-serif text-white">Hello {fullname}</h1>
          <h2 className="text-sm md:text-3xl  pt-1 text-white font-sans">Welcome back to Data<span className="text-red-600 font-bold">Query</span>Ai Dashboard</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Welcomecard;

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { blogPosts } from "@/constants/blog-posts";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { getMonthName } from "@/lib/utils";
import parse from 'html-react-parser'

const LeftsearchPage = () => {
    return ( <div>
        <div className="text-center ">
            <h1 className="font-bold pt-2 text-xl">Users</h1>
            <div className=" pr-3 flex flex-row  overflow-x-hidden hover:overflow-x-scroll mr-5 ml-5">
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2 m-2">
                    <Image src="/images/piyush.jpg" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avtar12.png" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avtar25.png" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avtar2.png" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/michael.jpg" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avtar4.png" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avatar24.jpeg" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/avatar21.jpeg" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
                <div className="bg-indigo-200 rounded-xl p-2 w-fit pb-2  m-2">
                    <Image src="/images/piyush.jpg" height={150} width={150} alt="'image" className="rounded-xl" />
                    <button className="bg-indigo-600 rounded-sm pt-1 pb-1 pl-2 pr-2 text-sm font-bold mt-2 text-white">Profile</button>
                </div>
            </div>
        </div>
       <div className="text-center">
        <h1 className="font-bold pt-2 text-xl">Recents Tech News</h1>
        <div className="overflow-y-scroll max-h-[47vh]">
        <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link href={`${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt="post featured image"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(new Date(post.createdAt).getMonth())}{' '}
                    {new Date(post.createdAt).getDate()}{' '}
                    {new Date(post.createdAt).getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100) + '...')}
                </div>
              </Card>
            </Link>
          ))}
      </section>
        </div>
       </div>
    </div> );
}
 
export default LeftsearchPage;
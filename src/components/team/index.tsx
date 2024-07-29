import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub  } from 'react-icons/fa';

const Team = () => {
    return (
      <div id="team">
        <div className='text-center mt-10'>
            <h1 className='text-4xl font-bold font-serif '>Team</h1>
            <hr className='w-40 h-1 mx-auto my-2 bg-red-800 border-0 rounded  shadow-2xl'>
            </hr>
            <p className='my-3 text-xl font-mono'>Meet the Brilliant Minds Behind DataQueryAI</p>
            <div className="flex flex-row justify-center mt-12 flex-wrap pl-4 pr-4">
                <div className='m-2 cursor-pointer'>
                    <Image src="/images/piyush.jpg" height={150} width={150} alt='team-image' className='rounded-full hover:border-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500'/>
                <h1 className='font-bold'>Piyush Sharma</h1>
                <p className='text-sm font-light '>CTO</p>
                <div className="flex justify-center sm:justify-center space-x-2 py-2">
                <Link href="https://www.instagram.com/piyushsharma5321/"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/piyushsharmanova/"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
                </div>
                </div>
                <div className='m-2 cursor-pointer'>
                    <Image src="/images/ashwin.jpg" height={150} width={150} alt='team-image' className=' hover:border-2 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600'/>
                <h1 className='font-bold'>Ashwin</h1>
                <p className='text-sm font-light '>Product Manager</p>
                <div className="flex justify-center sm:justify-center space-x-2 py-2">
                <Link href="https://www.instagram.com/piyushsharma5321/"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/piyushsharmanova/"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
                </div>
                </div>
                <div className='m-2 cursor-pointer'>
                    <Image src="/images/ravi1.png" height={200} width={150} alt='team-image' className='mt-5  hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500'/>
                <h1 className='font-bold'>Ravi Jat</h1>
                <p className='text-sm font-light'>Backend Developer</p>
                <div className="flex justify-center sm:justify-center space-x-2 py-2">
                <Link href="https://www.instagram.com/piyushsharma5321/"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/piyushsharmanova/"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
                </div>
                </div>
                <div className='m-2 cursor-pointer'>
                    <Image src="/images/michael.jpg" height={150} width={150} alt='team-image' className='rounded-r-lg hover:border-2 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500'/>
                <h1 className='font-bold'>Michael</h1>
                <p className='text-sm font-light '>Accountant</p>
                <div className="flex justify-center sm:justify-center space-x-2 py-2">
                <Link href="https://www.instagram.com/piyushsharma5321/"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/piyushsharmanova/"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
                </div>
                </div>

            </div>
            
            
        </div>
        
      </div>
   );
};

export default Team;
import Image from "next/image";
import React from "react";

const SearchPage = () => {
    return ( <div className="flex flex-col">
        <div>
        <h1 className="font-bold text-2xl ">Blog</h1>
        <div>
        <Image src="/images/dash-card-1.jpg" width={150} height={200} alt="icon" />
        <div></div>
        </div>
        </div>
        <div>
        <h1>Data Query History</h1>
        <div>
        <Image src="/images/dash-card-1.jpg" width={150} height={200} alt="icon" />
        </div>
        </div>
        <div>
        <h1>Document Page</h1>
        <div>
        <Image src="/images/dash-card-1.jpg" width={150} height={200} alt="icon" />
        </div>
        </div>
    </div> );
}
 
export default SearchPage;
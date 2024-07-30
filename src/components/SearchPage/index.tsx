import Image from "next/image";
import React from "react";
import SearchPagefunction from "./SearchPage";
import LeftsearchPage from "./searchPageLeft";

const SearchPage1 = () => {
    return ( <div className="flex  flex-col md:flex-row p-3 bg-indigo-100">
       <div className="min-w-[62vw] bg-white h-[86vh] mr-3 rounded-lg">
          <div>
            <LeftsearchPage />
          </div>
       </div>
       <div className="min-w-[29wh] h-[86vh] ">
        <SearchPagefunction />
       </div>
    </div> );
}
 
export default SearchPage1;
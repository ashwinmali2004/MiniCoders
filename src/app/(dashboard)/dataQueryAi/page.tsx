import DataQueryAi from "@/components/dataqueryAi";
import DataAichat2 from "@/components/dataqueryai2/Pages";
import InfoBar from "@/components/infobar";

const Page = () => {
    return ( <div>
        <InfoBar />
       <div className="pt-[140px] md:pt-[90px]">
        <div className="mt-5">
        {/* <DataQueryAi /> */}
        <DataAichat2 />
        </div>
        </div>
    </div> );
}
 
export default Page;
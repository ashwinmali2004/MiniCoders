import InfoBar from "@/components/infobar";
import SearchPage1 from "@/components/SearchPage";


const Page = () => {
    return ( <div>
        <InfoBar />
        <div className="pt-[140px] md:pt-[90px]">
            <div className="mt-2">
        <SearchPage1 />
        </div>
        </div>
    </div> );
}
 
export default Page;
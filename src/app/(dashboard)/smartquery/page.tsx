import InfoBar from "@/components/infobar";
import SQLQueryGenerator from "@/components/smartQuery/smartQuery";

const Page = () => {
    return ( <div>
        <InfoBar />
        <div className="pt-[140px] md:pt-[90px]">
        <SQLQueryGenerator />
        </div>
    </div> );
}
 
export default Page;
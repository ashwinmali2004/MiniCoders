import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";


const Sidesheet = () => {
    return (
  <Sheet>
<div>
  <SheetTrigger className="text-white bg-gradient-to-r from-purple-600 via- to-cyan-500 font-bold p-1 pl-2 pr-3 rounded-md hover:shadow-lg hover:shadow-cyan-500" >Team</SheetTrigger>
</div>
  
  
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Over Team Member</SheetTitle>
      <SheetDescription>
        <Image src="/images/piyush.jpg" height={200} width={200} alt="piyush"  className="rounded-full"/>
        <h1>panding_design_work</h1>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  );
}
 
export default Sidesheet;

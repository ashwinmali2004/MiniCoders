import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Sidesheet = () => {
  return (
    <Sheet>
      <div>
        <SheetTrigger className="text-white bg-gradient-to-r from-purple-600 via- to-cyan-500 font-bold p-1 pl-2 pr-3 rounded-md hover:shadow-lg hover:shadow-cyan-500">
          Team
        </SheetTrigger>
      </div>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-bold text-center">
            Over Team Member
          </SheetTitle>
          <SheetDescription>
           
            <div className="pl-10 mt-40">
            <Carousel className="max-w-[250px] " >
              <CarouselContent>
                <CarouselItem className=" ">
                  {" "}
                  <div className="pl-2">
                    {" "}
                    <Image
                      src="/images/id-card-2.png"
                      height={400}
                      width={250}
                      alt="piyush"
                      className=""
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className=" ">
                  {" "}
                  <div className="pl-2">
                  <Image
                    src="/images/id-card-3.png"
                    height={400}
                    width={250}
                    alt="ashwin"
                    className=""
                  />
                  </div>
                </CarouselItem>
                <CarouselItem className="items-center">
                  {" "}
                  <div className="pl-2">
                  <Image
                    src="/images/id-card-1.png"
                    height={400}
                    width={250}
                    alt="Ravi"
                    className=""
                  />
                  </div>
                </CarouselItem>
                <CarouselItem className="items-center">
                  {" "}
                  <div className="pl-2">
                  <Image
                    src="/images/id-card-4.png"
                    height={400}
                    width={250}
                    alt="piyush"
                    className=""
                  />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-gradient-to-r from-blue-700 via to-purple-700 text-white" />
              <CarouselNext className="bg-gradient-to-r from-blue-700 via to-purple-700 text-white"/>
            </Carousel>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidesheet;

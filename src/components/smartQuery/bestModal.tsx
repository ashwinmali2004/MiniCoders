import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Separator } from "../ui/separator";
  
const QueryModal = () => {
    return ( <div>
        <Dialog>
  <DialogTrigger className="p-2 bg-gray-300 rounded bg-gradient-to-r from-purple-600 via to to-cyan-400 text-white hover:shadow-xl hover:shadow-purple-500">Best Practices
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <div className="flex flex-row min-w-[120wh] min-h-[80vh]">
            <div> <h1 className="text-green-600 text-3xl font-bold"> Dos</h1></div>
            
            <div className="ml-40 "><h1 className="text-red-600 text-3xl font-bold">Don not</h1></div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div> );
}
 
export default QueryModal;
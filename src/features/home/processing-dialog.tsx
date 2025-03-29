import { WordRotate } from "@/components/magicui/word-rotate"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"

interface ModalProps{
    open:boolean,
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>
}
export function WaitingDialog({open,setOpen}:Readonly<ModalProps>) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
  
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Processing your transaction</DialogTitle>
          <DialogDescription>
            Please wait your transactions are being processed. This may take a few
            minutes.
          </DialogDescription>
        </DialogHeader>
<div>
<WordRotate
  className="text-xl  text-black dark:text-white"
  words={["Processing Transaction...", "Please Wait...", "Verifying Payment..."]}
/>

</div>
        <DialogFooter>
   
            <DialogClose asChild >
            <Button  variant="outline">
            Cancel
            </Button>
            </DialogClose>
       
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

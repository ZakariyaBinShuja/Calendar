import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlertDialogDemo } from "./Save"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Save Task</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Task Have Been Save Successfully</SheetTitle>
          
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
               Name
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Note
            </Label>
            <Input id="username"  className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
           <AlertDialogDemo/>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}



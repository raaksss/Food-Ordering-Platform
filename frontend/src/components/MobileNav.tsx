import { Menu } from "lucide-react"
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "./ui/sheet"
import React from 'react'
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to WeEat.com!</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
                </SheetContent>
    </Sheet>
  )
}

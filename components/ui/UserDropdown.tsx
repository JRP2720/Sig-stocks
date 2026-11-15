'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import NavItems from "@/app/NavItems";
import { Button } from "@/components/ui/button";


const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async() => {
        router.push( "/signin" );
    }

    const user = { name: "John Doe", email: "Yayaya@ya.com" };


  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant = 'ghost' className = "flex items-center gap-3 text-gray-4 hover: yellow-500">
                <Avatar className = "w-8 h-8">
                    <AvatarFallback className = "bg-yellow-500 text-Yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className = "hidden md:flex flex-col items-start">
                    <span className = "text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className = "text-gray-400">
            <DropdownMenuGroup>
                <DropdownMenuLabel>
                    <div className = "flex relative items-center gap-3 py-2">
                        <Avatar className = "w-10 h-10">
                            <AvatarFallback className = "bg-yellow-500 text-Yellow-900 text-sm font-bold">
                            {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className = "flex flex-col">
                            <span className = "text-base font-medium text-gray-400">
                            {user.name}
                            </span>
                            <span className = "text-sm text-gray-500"> {user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className = "bg-gray-600"/>
            <DropdownMenuGroup>
                <DropdownMenuItem onClick = {handleSignOut} className = "text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className = "mr-2 h-4 w-4 hidden sm:block" />
                    LogOut
                </DropdownMenuItem>
                 <DropdownMenuSeparator className = "hidden sm:block bg-gray-600"/>
                 <nav className = "sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default UserDropdown
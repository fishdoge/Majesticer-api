"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X} from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
// import { ConnectButton,useCurrentAccount,useCurrentWallet   } from '@mysten/dapp-kit';
import { ConnectButton} from '@mysten/dapp-kit';

import SignAndLogin from './signMessage'


export default function Navbar() {

    // const currentAccount = useCurrentAccount();
    // const { connectionStatus } = useCurrentWallet();

    // const currectAddress =()=>{
    //     console.log(currentAccount.address)
    // }

    useEffect(()=>{

    },[])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800  backdrop-blur-sm">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/suimmv2.png"
              alt="SUI Data Analytics"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-xl">Majesticer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white bg-blue-400 h-12">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link href="/dashboard" className="group grid gap-1">
                        <div className="text-sm font-medium text-black group-hover:text-blue-400">
                          Analytics Dashboard
                        </div>
                        {/* <div className="text-sm text-black group-hover:text-gray-300">
                          Comprehensive blockchain analytics and insights
                        </div> */}
                      </Link>
                      <Link href="#" className="group grid gap-1">
                        <div className="text-sm font-medium text-black group-hover:text-blue-400">
                          API Access
                        </div>
                        {/* <div className="text-sm text-black group-hover:text-gray-300">
                          Direct access to our data through REST API
                        </div> */}
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button>
                <ConnectButton  className='h-12 bg-slate-500 ' />
            </Button>
            <SignAndLogin/>

          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden" size="icon">
                <Menu className="h-6 w-6 text-gray-300" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-900 border-gray-800 p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                      <Image
                        src="/suimmv2.png"
                        alt="SUI Data Analytics"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <span className="text-white font-bold">SUI Data</span>
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-gray-300" />
                      </Button>
                    </SheetTrigger>
                  </div>
                </div>
                <div className="flex-1 overflow-auto py-4">
                  <div className="flex flex-col space-y-1">
                    <Link
                      href="#"
                      className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      Documentation
                    </Link>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-800">
                    <Button>
                        <ConnectButton className="h-10 bg-blue"/>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}


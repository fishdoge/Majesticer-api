"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Wallet } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleConnectWallet = async () => {
    // 模擬連接錢包
    setIsWalletConnected(true)
  }

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800  backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/suimm.png"
              alt="SUI Data Analytics"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-white font-bold">SUI Data</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-white">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link href="#" className="group grid gap-1">
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

            {/* Wallet Connection */}
            {!isWalletConnected ? (
              <Button
                onClick={handleConnectWallet}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            ) : (
              <Button
                onClick={handleDisconnectWallet}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white"
              >
                <Wallet className="mr-2 h-4 w-4" />
                0x1234...5678
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
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
                        src="/placeholder.svg?height=32&width=32"
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
                  {!isWalletConnected ? (
                    <Button
                      onClick={handleConnectWallet}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      Connect Wallet
                    </Button>
                  ) : (
                    <Button
                      onClick={handleDisconnectWallet}
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:text-white"
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      0x1234...5678
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}


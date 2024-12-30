"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {

    const openGitHub =()=>{
        window.open("https://github.com/fishdoge/Majesticer-api", "majesticer");
    }

    const openLinkin =()=>{
        window.open("https://jp.linkedin.com/company/hongwangtech", "majesticer");
    }

    return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">SUI Data Analytics</h3>
            <p className="text-gray-400 text-sm">
              Professional blockchain data analytics and insights for the SUI ecosystem
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                    <Github className="h-5 w-5" onClick={openGitHub} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" onClick={openLinkin}/>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Data Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  API Reference
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex space-x-2">
              {/* <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              /> */}
              <Button variant="secondary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Majesticer, SUI Data Analytics. All rights reserved.
            </p>
            <div className="flex space-x-6">

              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


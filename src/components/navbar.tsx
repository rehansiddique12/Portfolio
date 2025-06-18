"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Animatedbutton } from "./animatedArrow";



export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Projects",
      link: "#",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="border border-gray-500 mt-5">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
            <NavbarButton className="bg-transparent shadow-none"><Animatedbutton/></NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 hover:bg-black/30 px-3 rounded-3xl  w-full dark:text-neutral-300 "
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                
                className="w-full"
              >
                <Animatedbutton/>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
 
      {/* Navbar */}
    </div>
  );
}
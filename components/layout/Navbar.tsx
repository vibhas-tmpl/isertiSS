"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Search,
  Phone,
} from "lucide-react";

const navItems = [
  "Products",
  "Solutions",
  "Partners",
  "Customers",
  "Research",
  "Company",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/75 font-inter backdrop-blur-sm">
      <div className="global-container">
        <div className="flex items-center justify-between py-5 lg:mx-[40px] lg:pr-8">

          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-9">

            {/* Logo */}
            <div className="relative aspect-[150/45] w-25 shrink-0">
              <Image
                src="/hero1/Icertislogo.svg"
                alt="Icertis Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="group flex items-center gap-1.5 text-foreground transition-colors duration-300 hover:text-primary"
                >
                  <span className="font-inter text-[12.26px] font-medium leading-[150%] tracking-normal">
                    {item}
                  </span>

                  <ChevronDown
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>
              ))}
            </nav>

          </div>

          {/* Desktop Request Demo Button */}
          <button
            type="button"
            className="group hidden shrink-0 items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-foreground lg:flex"
          >
            <span className="font-inter text-[12.26px] font-semibold leading-[17.52px] tracking-normal">
              Request Demo
            </span>

            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">

            {/* Phone Button */}
            <a
              href="/contact"
              aria-label="Contact us"
              className="text-foreground transition-colors hover:text-primary"
            >
              <Phone size={15} strokeWidth={1.2} />
            </a>

            {/* Search Button */}
            <button
              type="button"
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground transition-colors hover:text-primary"
            >
              <Search size={21} strokeWidth={1.8} />
            </button>

            {/* Hamburger Menu */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground transition-colors hover:text-primary"
            >
              {isMenuOpen ? (
                <X size={25} strokeWidth={1.8} />
              ) : (
                <Menu size={25} strokeWidth={1.8} />
              )}
            </button>


          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isSearchOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-full rounded-lg border border-secondary bg-white px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 top-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-background shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-secondary px-5 py-5">

          <div className="relative aspect-[150/45] w-25 shrink-0">
            <Image
              src="/hero1/Icertislogo.svg"
              alt="Icertis Logo"
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-foreground transition-colors hover:text-primary"
          >
            <X size={25} />
          </button>

        </div>

        {/* Drawer Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item} className="border-b border-secondary">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-between py-5 text-foreground transition-colors hover:text-primary"
                >
                  <span className="font-inter text-sm font-medium">
                    {item}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className="-rotate-90"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="border-t border-secondary p-5">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-4 text-white transition-colors duration-300 hover:bg-[#20161B]"
          >
            <span className="font-inter text-sm font-semibold">
              Request Demo
            </span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

      </aside>
    </header>
  );
}

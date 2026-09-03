"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextData } from "@/code/Contexts/Provider";

const navItems = [
  { label: "HOME", page: "/" },
  {
    label: "PRACTICE AREAS",
    dropdown: [
      { name: "CRIMINAL DEFENSE", id: "#criminaldefense", page: "/criminaldefense" },
      { name: "ELDER LAW", id: "#elderlaw", page: "/elderlaw" },
      { name: "PERSONAL INJURY", id: "#personalinjury", page: "/personalinjury" },
    ],
  },
  { label: "TESTIMONIALS", page: "/testimonials" },
  {
    label: "MORE",
    dropdown: [
      { name: "REVIEWS", id: "#review", page: "/" },
      { name: "GALLERY", id: "#gallery", page: "/" },
      { name: "LOCATION", id: "#location", page: "/" },
    ],
  },
];

type DropdownItem = { name: string; id: string; page: string };

type NavItem = {
  label: string;
  page?: string;
  dropdown?: DropdownItem[];
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.2 7.2 10 12l4.8-4.8 1.4 1.4-6.2 6.2-6.2-6.2 1.4-1.4Z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const previousScrollY = useRef(0);
  const pathname = usePathname();
  const { setScroll, setSectionHash } = useContextData();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > previousScrollY.current;

      setScroll(currentScrollY);
      setIsHidden(currentScrollY > 50 && isScrollingDown);
      previousScrollY.current = currentScrollY;
    };

    previousScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScroll]);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const handleSectionLink = (event: React.MouseEvent<HTMLAnchorElement>, item: DropdownItem) => {
    if (pathname !== item.page) {
      setSectionHash(item.id);
      closeMenu();
      return;
    }

    event.preventDefault();
    document.querySelector(item.id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full px-2 pt-2 transition-transform duration-300 ease-in-out sm:px-3 sm:pt-3 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl border-[3px] border-black bg-[#E23D28] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-3 px-2 py-2 sm:px-4">
          <Link href="/" onClick={closeMenu} className="shrink-0" aria-label="Better Call Saul home">
            <img
              src="/assets/saul_logo_black.png"
              alt="Better Call Saul"
              className="h-11 w-auto object-contain sm:h-14"
            />
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            <p className="whitespace-nowrap font-headline-lg text-base -rotate-1 uppercase leading-none tracking-wider text-yellow-300 [text-shadow:2px_2px_0_#000] sm:text-2xl xl:text-3xl">
              Albuquerque&apos;s <span className="text-white">#1</span> <span className="text-[#89ACE7]">Attorney</span>
            </p>
          </div>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
            {navItems.map((item: NavItem) =>
              item.dropdown ? (
                <div className="relative" key={item.label}>
                  <button
                    type="button"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className="flex cursor-pointer duration-300 items-center gap-1 border-[3px] border-black bg-yellow-300 px-3 py-2 font-label-bold text-xs tracking-wide text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <Chevron open={openMenu === item.label} />
                  </button>
                  {openMenu === item.label && <Dropdown items={item.dropdown} onSelect={handleSectionLink} />}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.page ?? "/"}
                  onClick={closeMenu}
                  className="border-[3px] border-black bg-yellow-300 duration-300 px-3 py-2 font-label-bold text-xs tracking-wide text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <a
            href="tel:+15551234567"
            className="hidden duration-300 rotate-[3deg] items-center gap-2 border-[3px] border-black bg-[#3A5F94] px-4 py-2 font-headline-lg text-xl leading-none tracking-tight text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:flex"
          >
            <img src="/assets/phone.svg" alt="" className="h-5 w-5" />
            CALL NOW!
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="border-[3px] border-black bg-yellow-300 p-2 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              {mobileOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t-[3px] border-black bg-yellow-300 p-3 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item: NavItem) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between border-[3px] border-black bg-black px-3 py-2 text-left font-label-bold text-sm text-yellow-300"
                      aria-expanded={openMenu === item.label}
                    >
                      {item.label}
                      <Chevron open={openMenu === item.label} />
                    </button>
                    {openMenu === item.label && <Dropdown items={item.dropdown} onSelect={handleSectionLink} mobile />}
                  </div>
                ) : (
                  <Link key={item.label} href={item.page ?? "/"} onClick={closeMenu} className="border-[3px] border-black bg-yellow-300 px-3 py-2 font-label-bold text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                    {item.label}
                  </Link>
                ),
              )}
              <a href="tel:+15551234567" className="flex items-center justify-center gap-2 border-[3px] border-black bg-[#3A5F94] px-3 py-3 text-center font-headline-lg text-2xl leading-none text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <img src="/assets/phone.svg" alt="" className="h-6 w-6" />
                CALL NOW!
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Dropdown({ items, onSelect, mobile = false }: { items: DropdownItem[]; onSelect: (event: React.MouseEvent<HTMLAnchorElement>, item: DropdownItem) => void; mobile?: boolean }) {
  return (
    <div className={`${mobile ? "mt-2" : "absolute left-0 top-full z-10 mt-2 w-56"} border-[3px] border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
      {items.map((item) => (
        <Link key={item.id} href={item.page === "/" ? item.id : item.page} onClick={(event) => onSelect(event, item)} className="block border-b-2 border-black px-2 py-2 font-label-bold text-xs text-black last:border-b-0 hover:bg-[#E23D28] hover:text-white">
          {item.name}
        </Link>
      ))}
    </div>
  );
}

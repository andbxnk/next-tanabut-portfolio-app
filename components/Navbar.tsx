"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ fontFamily: "var(--font-fira-code)" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl text-blue-600 flex items-center gap-1"
        >
          <span className="text-gray-400">{"<"}</span>
          TW. Portfolio
          <span className="text-gray-400">{"/>"}</span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link
            href="/"
            className={`${isActive("/") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            AboutMe
          </Link>
          <Link
            href="/me/skills"
            className={`${isActive("/me/skills") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            Skills
          </Link>
          <Link
            href="/me/projects"
            className={`${isActive("/me/projects") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            Projects
          </Link>
          <Link
            href="/me/gallery"
            className={`${isActive("/me/gallery") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact") ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-500 transition-colors"}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

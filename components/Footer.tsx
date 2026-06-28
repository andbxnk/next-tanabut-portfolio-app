'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="border-t border-gray-200 bg-white py-16 mt-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* ส่วน Branding */}
          <div className="flex flex-col gap-4">
            <h3 className="font-prompt text-xl font-bold text-gray-900 tracking-tight">
              Tanabut Watayakone
            </h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
              Front-end Developer & Creative Coder. Passionate about building seamless digital experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-prompt font-semibold text-gray-900">Navigation</h4>
            <nav className="flex flex-col gap-2 font-sans text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 hover:translate-x-1 transition-all">Home</Link>
              <Link href="/about" className="hover:text-blue-600 hover:translate-x-1 transition-all">About Me</Link>
              <Link href="/me/skills" className="hover:text-blue-600 hover:translate-x-1 transition-all">Skills</Link>
              <Link href="/me/projects" className="hover:text-blue-600 hover:translate-x-1 transition-all">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 hover:translate-x-1 transition-all">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-prompt font-semibold text-gray-900">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/andbxnk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-2 bg-gray-50 rounded-full hover:bg-gray-900 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="font-sans text-xs text-gray-400 mt-2">
              Let's build something great together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-100 pt-8 text-center">
          <p className="font-sans text-sm text-gray-400">
            © {new Date().getFullYear()} Tanabut Watayakone. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
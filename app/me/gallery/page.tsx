'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Zoom from 'react-medium-image-zoom';

export default function Gallery() {
  const images = [
    "/code1.png", "/code2.png", "/code3.png", 
    "/code4.png", "/code5.png", "/code6.png"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-10 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold font-prompt text-gray-900 border-l-4 border-blue-600 pl-4">
          Gallery
        </h1>
        <p className="font-sarabun text-gray-500 mt-2 pl-4">
          บรรยากาศการเขียนโค้ดและโปรเจกต์ของผม
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {images.map((src, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg cursor-zoom-in"
          >
            {/* ห่อ Image ด้วย Zoom Component */}
            <Zoom>
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Zoom>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
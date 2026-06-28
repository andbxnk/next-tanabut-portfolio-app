'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Zoom from 'react-medium-image-zoom'; // อย่าลืม import อันนี้

export default function Projects() {
  const projects = [
    {
      name: "Money Tracker Application",
      detail: "พัฒนาแอปพลิเคชันบันทึกรายรับ-รายจ่ายบนมือถือ เขียน Logic ฟังก์ชันการคำนวณพื้นฐาน และจัดการระบบ State ภายในแอปพลิเคชัน",
      tech: "React Native (Expo), JavaScript",
      role: "Mobile Developer",
      year: "2024",
      image: "/money.webp" 
    },
    {
      name: "Store Directory Apps",
      detail: "พัฒนาแอปแนะนำร้านเค้กด้วย Flutter และแอปแนะนำร้านกาแฟด้วย React Native เพื่อศึกษาการจัดโครงสร้าง Layout",
      tech: "Flutter, React Native, Dart",
      role: "Mobile Developer",
      year: "2024",
      image: "/cake.webp"
    },
    {
      name: "Thai Hotline App",
      detail: "พัฒนาแอปพลิเคชันรวบรวมเบอร์โทรศัพท์สายด่วนฉุกเฉินในประเทศไทย เพื่ออำนวยความสะดวกในการติดต่อกรณีเร่งด่วน",
      tech: "Flutter, Dart",
      role: "Mobile Developer",
      year: "2025",
      image: "/hotline.webp"
    }
  ];

  return (
    <div className="py-16 max-w-5xl mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12 font-prompt border-l-4 border-blue-600 pl-4"
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
          >
            {/* ส่วนรูปภาพ - ห่อด้วย Zoom */}
            <div className="relative w-full md:w-1/3 aspect-[9/16] md:aspect-[3/4] bg-gray-50 cursor-zoom-in">
              <Zoom>
                <Image 
                  src={proj.image} 
                  alt={proj.name} 
                  fill 
                  className="object-cover"
                />
              </Zoom>
            </div>

            {/* ส่วนข้อมูล */}
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-prompt text-gray-900">{proj.name}</h2>
                <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-bold">
                  {proj.year}
                </span>
              </div>
              <p className="text-gray-600 font-sarabun mb-6 leading-relaxed">
                {proj.detail}
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-gray-900 font-bold">Role:</span> {proj.role}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  <span className="text-gray-900 font-bold">Tech:</span> {proj.tech}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2 font-prompt">Tanabut Watayakone</h1>
        <h2 className="text-2xl text-blue-600 mb-4 font-prompt">Front-end Developer / Web Developer</h2>
        <p className="text-gray-600 mb-6 font-sarabun leading-relaxed">
          นักศึกษาสาขาเทคโนโลยีดิจิทัลและนวัตกรรม มีทักษะความรู้ด้านการพัฒนา Mobile Application และโครงสร้างพื้นฐานไอที พร้อมเปิดรับโอกาสใหม่ๆ ในการเรียนรู้และทำงาน
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">รู้จักฉันเพิ่มเติม</Link>
          <Link href="/me/projects" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">ดูผลงาน</Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        {/* 2. Image Optimization */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image 
            src="/profile.jpg" 
            alt="Tanabut Watayakone Profile" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
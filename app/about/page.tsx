import { 
  User, 
  GraduationCap, 
  Target, 
  Zap, 
  Lightbulb, 
  Gamepad2 
} from 'lucide-react';

export default function About() {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 font-prompt text-gray-900 flex items-center gap-3">
        <User className="w-8 h-8 text-blue-600" />
        About Me
      </h1>
      
      {/* ประวัติส่วนตัว */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 transition-all hover:shadow-md">
        <h2 className="text-xl font-bold mb-4 font-prompt text-blue-800 flex items-center gap-2">
          ประวัติส่วนตัว
        </h2>
        <p className="font-sarabun text-gray-600 leading-relaxed">
          สไตล์การทำงานเน้นทำความเข้าใจรายละเอียดและกระบวนการอย่างชัดเจนเพื่อลงมือปฏิบัติงานและส่งมอบผลงานได้อย่างถูกต้อง มีความตั้งใจและพร้อมปรับตัวในการเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ
        </p>
      </section>

      {/* ประวัติการศึกษา */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-bold mb-6 font-prompt text-blue-800 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> ประวัติการศึกษา
        </h2>
        <div className="space-y-6 border-l-2 border-blue-100 pl-6">
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
            <h3 className="font-bold text-gray-900">มหาวิทยาลัยเอเชียอาคเนย์ (SAU)</h3>
            <p className="text-sm text-blue-600 font-medium">กำลังศึกษา | ปริญญาตรี คณะศิลปศาสตร์และวิทยาศาสตร์</p>
            <p className="text-gray-500 text-sm">สาขาเทคโนโลยีดิจิทัลและนวัตกรรม</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-400 rounded-full border-4 border-white" />
            <h3 className="font-bold text-gray-900">วิทยาลัยเทคโนโลยีการจัดการเพชรเกษม (PM-TECH)</h3>
            <p className="text-sm text-blue-600 font-medium">สำเร็จการศึกษา | ปวส. และ ปวช.</p>
            <p className="text-gray-500 text-sm">สาขาเทคโนโลยีสารสนเทศ</p>
          </div>
        </div>
      </section>

      {/* Grid 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Career Objective */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-bold mb-4 font-prompt text-blue-800 flex items-center gap-2">
            <Target className="w-5 h-5" /> Career Objective
          </h2>
          <p className="font-sarabun text-gray-600 leading-relaxed text-sm">
            ต้องการพัฒนาตนเองในสายงาน Front-end / Web Developer โดยนำความรู้ด้าน React, Next.js และ Mobile App มาสร้างสรรค์ผลงานที่มีประสิทธิภาพ
          </p>
        </div>

        {/* Strengths */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-bold mb-4 font-prompt text-blue-800 flex items-center gap-2">
            <Zap className="w-5 h-5" /> จุดแข็ง (Strengths)
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {['เรียนรู้ไว พร้อมปรับตัวรับเทคโนโลยีใหม่', 'เน้นความเข้าใจที่ชัดเจนก่อนลงมือทำ', 'มีความรู้ครอบคลุมทั้ง Software และ Hardware'].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-bold mb-4 font-prompt text-blue-800 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> ความสนใจ (Interests)
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Emerging Tech', 'Game Dev', 'Server Mgmt', 'Web Dev'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-bold mb-4 font-prompt text-blue-800 flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" /> งานอดิเรก (Hobbies)
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            {['เล่นเกม', 'ดูหนัง/ซีรีส์', 'ถ่ายรูป', 'ฟังเพลง'].map((hobby) => (
              <div key={hobby} className="p-2 bg-gray-50 rounded-lg text-center">
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
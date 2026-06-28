import SkillCard from "@/components/SkillCard";

export default function Skills() {
  const skillsData = [
    { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Flutter"] },
    { category: "Backend", skills: ["Node.js", "Express", "Python", "Java"] },
    { category: "Database", skills: ["MySQL", "Supabase"] },
    { category: "Tools & IT Tech", skills: ["Git", "GitHub", "VS Code", "PC Assembly", "Networking (LAN)", "Game Server Setup"] }
  ];

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 font-prompt border-b-2 border-blue-600 pb-2 inline-block">Skills & Expertise</h1>
      <p className="font-sarabun mb-8 text-gray-600">ทักษะความเชี่ยวชาญทั้งด้านการพัฒนาซอฟต์แวร์และการจัดการโครงสร้างพื้นฐานไอที</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((data, idx) => (
          <SkillCard key={idx} category={data.category} skills={data.skills} />
        ))}
      </div>
    </div>
  );
}
interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      
      <h3 className="text-lg font-bold mb-4 font-prompt text-gray-800 border-l-4 border-blue-500 pl-3">
        {category}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            // ใช้ group-hover เพื่อเปลี่ยนสีตาม hover ของการ์ด
            className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-100 
                       transition-colors duration-300 
                       group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
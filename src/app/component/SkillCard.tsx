interface SkillCardProps {
  skill: string;
  level?: string; // Optional: beginner, intermediate, advanced
  icon?: React.ReactNode; // Optional icon
}

export default function SkillCard({ skill, level, icon }: SkillCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
      {icon && <div className="mb-3 text-gray-600">{icon}</div>}
      <h3 className="text-lg font-semibold text-slate-800">{skill}</h3>
      
    </div>
  );
}

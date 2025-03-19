import React from "react";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  preload: false,
});

interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

interface SkillCardProps {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "Django", level: "Advanced" },
      { name: "Machine Learning", level: "Intermediate" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Kotlin/Mobile", level: "Expert" },
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Data Analysis", level: "Advanced" },
    ],
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ category, items }) => (
  <div
    className={`${afacad.className} bg-white p-6 rounded-lg shadow-md border border-gray-200`}
  >
    <h3 className="text-xl font-semibold mb-4 text-black">{category}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-black">{item.name}</span>
            <span className="text-sm text-black">{item.level}</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full">
            <div
              className="h-1 bg-[#db8607] rounded-full transition-all duration-500"
              style={{
                width:
                  item.level === "Expert"
                    ? "95%"
                    : item.level === "Advanced"
                    ? "85%"
                    : item.level === "Intermediate"
                    ? "70%"
                    : "50%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillSet: React.FC = () => {
  return (
    <div id="skills" className={`${afacad.className} max-w-6xl mx-auto p-4`}>
      <h2 className="text-4xl font-bold mb-6 text-center py-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillCategory, index) => (
          <SkillCard
            key={index}
            category={skillCategory.category}
            items={skillCategory.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;

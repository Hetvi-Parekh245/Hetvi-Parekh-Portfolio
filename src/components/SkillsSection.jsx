import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
    //WebDevelopment
    { name: "HTML/CSS", level: 95, categories: "WebDevelopment" },
    { name: "JavaScript", level: 90, categories: "WebDevelopment" },
    { name: "React", level: 80, categories: "WebDevelopment" },
    { name: "TailwindCss", level: 70, categories: "WebDevelopment" },
    { name: "Node.js", level: 70, categories: "WebDevelopment" },
    { name: "Express", level: 70, categories: "WebDevelopment" },
    { name: "Django", level: 70, categories: "WebDevelopment" },

    //Python
    { name: "Django", level: 90, categories: "Python Development" },
    { name: "NumPy", level: 90, categories: "Python Development" },
    { name: "Pandas", level: 90, categories: "Python Development" },
    { name: "Matplotlib", level: 90, categories: "Python Development" },
    { name: "SeaBorn", level: 90, categories: "Python Development" },

    //Data Analytics
    { name: "Advanced Excel", level: 80, categories: "Data Analytics" },
    { name: "MySQL", level: 90, categories: "Data Analytics" },
    { name: "PostgreSQL", level: 85, categories: "Data Analytics" },
    { name: "Python", level: 90, categories: "Data Analytics" },
    { name: "Tableau", level: 75, categories: "Data Analytics" },


    //Tools
    { name: "Git/GitHub", level: 90, categories: "tools" },
    { name: "VS Code", level: 95, categories: "tools" },
    { name: "Jupyter Notebook", level: 95, categories: "tools" },
    { name: "Tableau", level: 75, categories: "tools" },
    { name: "PowerBi", level: 65, categories: "tools" },
];

const categories = ["all", "WebDevelopment", "Python Development", "Data Analytics", "tools"];

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.categories === activeCategory
    );
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/20 text-forground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-fall bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-lgrow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </section>
    );
};
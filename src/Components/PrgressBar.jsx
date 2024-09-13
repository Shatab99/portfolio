import { useState, useEffect } from 'react';

const PrgressBar = () => {
    const [skills] = useState([
        { title: 'HTML', percent: 95 },
        { title: 'CSS', percent: 70 },
        { title: 'Tailwind CSS', percent: 90 },
        { title: 'React', percent: 80 },
        { title: 'JavaScript', percent: 83 },
        { title: 'TypeScript', percent: 85 },
        { title: 'Node JS', percent: 73 },
        { title: 'Express JS', percent: 88 },
        { title: 'MongoDB', percent: 82 },
        { title: 'Python', percent: 75 },
    ]);

    const [currentSkill, setCurrentSkill] = useState(null);
    const [circumference, setCircumference] = useState(2 * Math.PI * 120);

    useEffect(() => {
        setCircumference(2 * Math.PI * 120);
    }, []);

    return (
        <main className="grid text-[#C2410C] place-content-center">
            <section className="mb-6 p-2 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">

                <div className="flex items-center justify-center">
                    <svg className="transform -rotate-90 w-72 h-72">
                        <circle
                            cx="145"
                            cy="145"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            className="text-[#FDD6A9]"
                        />
                        <circle
                            cx="145"
                            cy="145"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={currentSkill ? circumference - (currentSkill.percent / 100) * circumference : 0}
                            className="text-[#EA580C] transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <span className={`absolute ${currentSkill ? "text-5xl" : 'text-xl'}`}>{`${currentSkill? currentSkill.percent : "Click to Check"}%`}</span>
                </div>

                <div className="flex flex-col items-center  lg:grid lg:grid-cols-2 gap-4">

                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className={`btn btn-sm  text-[#EA580C] hover:border-[#EA580C] hover:bg-[#C2410C] ${currentSkill?.title === skill?.title ? 'font-bold bg-[#C2410C] text-white' : 'btn-outline'
                                }`}
                            onClick={() => setCurrentSkill(skill)}
                        >
                            {skill.title}
                        </button>
                    ))}
                </div>

            </section>
        </main>
    );
};

export default PrgressBar;

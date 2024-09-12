import { useEffect } from "react";
import { useState } from "react";


const Exprerience = () => {

    const [timeDifference, setTimeDifference] = useState({});

    useEffect(() => {
        // Target date: June 2, 2023, 12pm (Note: months are zero-based in JavaScript)
        const updateTime = () => {
            const targetDate = new Date(2023, 5, 2, 12);

            // Current date
            const currentDate = new Date();

            // Calculate the difference in milliseconds
            const differenceMs = currentDate - targetDate;

            // Convert milliseconds to a readable format
            const yearsDiff = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365));
            const monthsDiff = Math.floor((differenceMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const daysDiff = Math.floor((differenceMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hoursDiff = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minsDiff = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
            const secsDiff = Math.floor((differenceMs % (1000 * 60)) / 1000);

            // Construct the difference string
            const differenceString = {
                yearsDiff, monthsDiff, daysDiff, hoursDiff, minsDiff, secsDiff
            };

            // Set the difference string to state
            setTimeDifference(differenceString);
        }

        updateTime()

        const timeInterval = setInterval(updateTime, 1000)
        return () => clearInterval(timeInterval)

    }, []);

    return (
        <div className="max-w-3xl mx-auto space-y-5">
            <h1 className="text-3xl font-bold text-center ">My Experience </h1>
            <div className="border-4 border-[#FFBE00] p-4 rounded-lg flex flex-col items-center gap-6 shadow-2xl ">
                <div className="border-2 border-[#FFDE7F] p-4 rounded-lg flex flex-col items-center gap-3">
                    <p className="font-semibold">My Running Experience In <span className="font-bold text-[#EA580C]">Full </span>Stack</p>
                    <p className="text-2xl font-bold">
                        <span className="text-purple-800 text-4xl">{timeDifference.yearsDiff}</span> Years <span className="text-4xl text-[#D0410C]">{timeDifference.monthsDiff}</span> Months <span className="text-4xl text-purple-800">{timeDifference.daysDiff}</span> Days <span className="text-4xl text-[#D0410C]">{timeDifference.hoursDiff}</span> Hours <span className="text-4xl text-purple-800">{timeDifference.minsDiff}</span> Mins <span className="text-4xl text-[#D0410C]">{timeDifference.secsDiff}</span> Secs
                    </p>
                </div>
                <div className="flex items-center justify-around gap-10">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">Starting Date  </p>
                        <p className="text-2xl font-bold animate-pulse">June 02 2023</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">Status </p>
                        <p className="text-2xl font-bold animate-bounce">Still Exploring</p>
                    </div>
                    <a href="#projects" title="See Projects" className="flex flex-col items-center hover:bg-slate-100 p-2 rounded-lg">
                        <p className="text-lg font-semibold">Number Of Full Stack Projects </p>
                        <p className="text-2xl font-bold  text-[#D0410C]" >4</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Exprerience;
import { useState } from "react";
import { FaVenus, FaSeedling, FaMoon, FaSun, FaLeaf } from "react-icons/fa";
import CalendarInputs from "./CalendarInputs";
import FertilityOverview from "./FertilityOverview";
import DailyCalendar from "./DailyCalendar";
import FertilityInfo from "./FertilityInfo";

export default function FertilityCalendar() {
    const [startDate, setStartDate] = useState("");
    const [cycleLength, setCycleLength] = useState(28);
    const [results, setResults] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    const calculateFertility = () => {
        if (!startDate || isNaN(cycleLength)) {
            alert("Please fill in the data correctly.");
            return;
        }

        const start = new Date(startDate);
        const ovulationDay = new Date(start);
        ovulationDay.setDate(start.getDate() + cycleLength - 14);

        const fertileStart = new Date(ovulationDay);
        fertileStart.setDate(ovulationDay.getDate() - 5);

        const fertileEnd = new Date(ovulationDay);
        fertileEnd.setDate(ovulationDay.getDate() + 1);

        const nextPeriod = new Date(start);
        nextPeriod.setDate(start.getDate() + cycleLength);

        const days = [];
        for (let i = 0; i < cycleLength; i++) {
            const currentDay = new Date(start);
            currentDay.setDate(start.getDate() + i);

            let status = "safe";
            let label = "Safe Period";
            let icon = <FaLeaf className="text-sage" />;
            let description = "Low chance of pregnancy";

            if (currentDay.toDateString() === ovulationDay.toDateString()) {
                status = "ovulation";
                label = "Ovulation";
                icon = <FaSun className="text-blossom" />;
                description = "Highest fertility";
            } else if (currentDay >= fertileStart && currentDay <= fertileEnd) {
                status = "fertile";
                label = "Fertile Window";
                icon = <FaSeedling className="text-lavender" />;
                description = "High fertility";
            } else if (i < 8) {
                status = "period";
                label = "Menstruation";
                icon = <FaMoon className="text-peach" />;
                description = "Menstrual phase";
            }

            days.push({
                date: new Date(currentDay),
                status,
                label,
                icon,
                description,
                isToday: currentDay.toDateString() === new Date().toDateString()
            });
        }

        setResults({
            days,
            ovulationDate: ovulationDay,
            fertileWindow: { start: fertileStart, end: fertileEnd },
            nextPeriod
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-moonlight to-white p-4 max-w-5xl mx-auto">
            <header className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-soft">
                    <FaVenus className="text-3xl text-blossom" />
                    <h1 className="text-4xl font-playfair font-bold bg-gradient-to-r from-blossom to-lavender bg-clip-text text-transparent">
                        Bloom Cycle
                    </h1>
                </div>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto font-poppins font-medium">
                    Your natural cycle companion
                </p>
            </header>

            <CalendarInputs
                startDate={startDate}
                setStartDate={setStartDate}
                cycleLength={cycleLength}
                setCycleLength={setCycleLength}
                calculateFertility={calculateFertility}
            />

            {results && (
                <>
                    <FertilityOverview
                        nextPeriod={results.nextPeriod}
                        fertileWindow={results.fertileWindow}
                        ovulationDate={results.ovulationDate}
                    />
                    <DailyCalendar days={results.days} />
                </>
            )}

            <FertilityInfo showInfo={showInfo} setShowInfo={setShowInfo} />
        </div>
    );
}
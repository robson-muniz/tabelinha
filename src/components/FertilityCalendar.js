import { useState } from "react";
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
            let label = "Safe period";
            let emoji = "🟢";
            let description = "Low chance of pregnancy";

            if (currentDay.toDateString() === ovulationDay.toDateString()) {
                status = "ovulation";
                label = "Ovulation (Very fertile)";
                emoji = "🔴";
                description = "Highest chance of pregnancy";
            } else if (currentDay >= fertileStart && currentDay <= fertileEnd) {
                status = "fertile";
                label = "Fertile window";
                emoji = "🟡";
                description = "High chance of pregnancy";
            } else if (i < 8) {
                status = "period";
                label = "Menstruation";
                emoji = "🔵";
                description = "Menstrual phase";
            }

            days.push({
                date: new Date(currentDay),
                status,
                label,
                emoji,
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
        <div className="p-4 max-w-3xl mx-auto font-sans">
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
                🌸 Fertility Calendar
            </h1>

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
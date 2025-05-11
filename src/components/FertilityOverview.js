import { FaRegCalendarCheck, FaSeedling, FaEgg } from "react-icons/fa";

export default function FertilityOverview({
                                              nextPeriod,
                                              fertileWindow,
                                              ovulationDate
                                          }) {
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-soft">
            <h3 className="text-xl font-playfair font-semibold mb-6 text-blossom">
                Cycle Overview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Next Period Card */}
                <div className="bg-moonlight p-4 rounded-xl border border-lavender/20">
                    <div className="flex items-center gap-2 mb-2 text-blossom">
                        <FaRegCalendarCheck className="text-xl" />
                        <h4 className="font-poppins font-medium">Next Period</h4>
                    </div>
                    <p className="text-2xl font-playfair font-bold text-gray-700">
                        {formatDate(nextPeriod)}
                    </p>
                </div>

                {/* Fertile Window Card */}
                <div className="bg-moonlight p-4 rounded-xl border border-lavender/20">
                    <div className="flex items-center gap-2 mb-2 text-lavender">
                        <FaSeedling className="text-xl" />
                        <h4 className="font-poppins font-medium">Fertile Window</h4>
                    </div>
                    <p className="text-2xl font-playfair font-bold text-gray-700">
                        {formatDate(fertileWindow.start)} - {formatDate(fertileWindow.end)}
                    </p>
                </div>

                {/* Ovulation Card */}
                <div className="bg-moonlight p-4 rounded-xl border border-lavender/20">
                    <div className="flex items-center gap-2 mb-2 text-peach">
                        <FaEgg className="text-xl" />
                        <h4 className="font-poppins font-medium">Ovulation</h4>
                    </div>
                    <p className="text-2xl font-playfair font-bold text-gray-700">
                        {formatDate(ovulationDate)}
                    </p>
                </div>
            </div>
        </div>
    );
}
import { FaRegCalendarAlt, FaSeedling } from "react-icons/fa";

export default function CalendarInputs({
                                           startDate,
                                           setStartDate,
                                           cycleLength,
                                           setCycleLength,
                                           calculateFertility
                                       }) {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <label className="block text-sm font-poppins font-medium text-blossom">
                        <FaRegCalendarAlt className="inline mr-2 mb-1" />
                        First Day
                    </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="font-poppins border-2 border-lavender/20 rounded-xl p-3 w-full bg-white focus:border-blossom focus:ring-0"
                        max={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-poppins font-medium text-blossom">
                        <FaSeedling className="inline mr-2 mb-1" />
                        Cycle Length
                    </label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            min="21"
                            max="45"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(parseInt(e.target.value) || 28)}
                            className="font-poppins border-2 border-lavender/20 rounded-xl p-3 w-20 bg-white focus:border-blossom focus:ring-0"
                        />
                        <span className="ml-3 text-blossom/80 font-medium">days</span>
                    </div>
                </div>
            </div>

            <button
                onClick={calculateFertility}
                className="w-full bg-gradient-to-r from-blossom to-lavender text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-poppins font-semibold hover:scale-[1.02]"
            >
                Generate Cycle Map
            </button>
        </div>
    );
}
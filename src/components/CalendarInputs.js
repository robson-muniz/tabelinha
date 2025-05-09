export default function CalendarInputs({
                                           startDate,
                                           setStartDate,
                                           cycleLength,
                                           setCycleLength,
                                           calculateFertility
                                       }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        First day of last period:
                    </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        max={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cycle length (days):
                    </label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            min="21"
                            max="45"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(parseInt(e.target.value) || 28)}
                            className="border border-gray-300 p-2 w-20 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                        <span className="ml-2 text-gray-500">days</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        Typical range: 21-35 days
                    </div>
                </div>
            </div>

            <button
                onClick={calculateFertility}
                className="w-full bg-pink-600 text-white px-4 py-3 rounded-md hover:bg-pink-700 transition-colors font-medium shadow-sm"
            >
                Calculate Fertility Window
            </button>
        </div>
    );
}
export default function FertilityInfo({ showInfo, setShowInfo }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-800">
                    About Fertility Tracking
                </h3>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-pink-600 hover:text-pink-800"
                >
                    {showInfo ? 'Hide' : 'Show'} Info
                </button>
            </div>

            {showInfo && (
                <div className="text-gray-600 space-y-3">
                    <p>
                        <strong>Menstruation (🔵):</strong> The first days of your cycle when you have your period.
                    </p>
                    <p>
                        <strong>Fertile Window (🟡):</strong> The 6 days leading up to and including ovulation when pregnancy is possible.
                    </p>
                    <p>
                        <strong>Ovulation (🔴):</strong> When an egg is released from the ovary (typically day 14 of a 28-day cycle).
                    </p>
                    <p>
                        <strong>Safe Period (🟢):</strong> Days when pregnancy is less likely (though not impossible).
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Note: This calendar provides estimates only. The rhythm method is not 100% reliable for birth control. Consult your healthcare provider for family planning advice.
                    </p>
                </div>
            )}
        </div>
    );
}
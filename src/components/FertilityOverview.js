export default function FertilityOverview({
                                              nextPeriod,
                                              fertileWindow,
                                              ovulationDate
                                          }) {
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Your Fertility Overview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                    <h4 className="font-medium text-pink-800 mb-1">Next Period</h4>
                    <p className="text-2xl font-bold text-pink-600">
                        {formatDate(nextPeriod)}
                    </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h4 className="font-medium text-yellow-800 mb-1">Fertile Window</h4>
                    <p className="text-2xl font-bold text-yellow-600">
                        {formatDate(fertileWindow.start)} - {formatDate(fertileWindow.end)}
                    </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-800 mb-1">Ovulation Day</h4>
                    <p className="text-2xl font-bold text-red-600">
                        {formatDate(ovulationDate)}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default function DailyCalendar({ days }) {
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h4 className="font-medium text-gray-700 mb-3">Daily Details</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Day
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Notes
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {days.map((day, index) => (
                        <tr
                            key={index}
                            className={`${day.isToday ? 'bg-blue-50' : ''} ${
                                day.status === 'ovulation' ? 'bg-red-50' :
                                    day.status === 'fertile' ? 'bg-yellow-50' : ''
                            }`}
                        >
                            <td className="px-4 py-3 whitespace-nowrap">
                                {formatDate(day.date)}
                                {day.isToday && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Today</span>}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                Day {index + 1}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      day.status === 'ovulation' ? 'bg-red-100 text-red-800' :
                          day.status === 'fertile' ? 'bg-yellow-100 text-yellow-800' :
                              day.status === 'period' ? 'bg-blue-100 text-blue-800' :
                                  'bg-green-100 text-green-800'
                  }`}>
                    {day.emoji} {day.label}
                  </span>
                            </td>
                            <td className="px-4 py-3">
                                <span className="text-sm text-gray-600">{day.description}</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
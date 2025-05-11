export default function DailyCalendar({ days }) {
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <h4 className="font-playfair text-xl font-semibold mb-4 text-blossom">
                Daily Breakdown
            </h4>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200/50">
                    <thead className="bg-moonlight">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-poppins text-blossom">
                            Date
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-poppins text-blossom">
                            Day
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-poppins text-blossom">
                            Status
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-poppins text-blossom">
                            Description
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/30">
                    {days.map((day, index) => (
                        <tr
                            key={index}
                            className={`${day.isToday ? 'bg-blossom/5' : ''} ${
                                day.status === 'ovulation' ? 'bg-blossom/5' :
                                    day.status === 'fertile' ? 'bg-lavender/5' : ''
                            }`}
                        >
                            <td className="px-4 py-3 whitespace-nowrap font-poppins">
                                <div className="flex items-center gap-2">
                                    {formatDate(day.date)}
                                    {day.isToday && (
                                        <span className="text-xs bg-blossom/10 text-blossom px-2 py-1 rounded-full">
                        Today
                      </span>
                                    )}
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap font-poppins">
                                Day {index + 1}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-lavender/20">
                                    {day.icon}
                                    <span className="font-poppins text-sm">{day.label}</span>
                                </div>
                            </td>
                            <td className="px-4 py-3 font-poppins text-gray-600">
                                {day.description}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
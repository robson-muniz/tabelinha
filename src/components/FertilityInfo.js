import { FaInfoCircle, FaVenusDouble, FaLeaf } from "react-icons/fa";

export default function FertilityInfo({ showInfo, setShowInfo }) {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mt-6 shadow-soft">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-playfair font-semibold text-blossom flex items-center gap-2">
                    <FaVenusDouble />
                    Cycle Education
                </h3>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-blossom hover:text-lavender flex items-center gap-2 font-poppins"
                >
                    <FaInfoCircle />
                    {showInfo ? 'Hide' : 'Show'} Details
                </button>
            </div>

            {showInfo && (
                <div className="text-gray-600 space-y-4 font-poppins">
                    <div className="p-4 bg-moonlight rounded-lg">
                        <div className="flex items-center gap-2 text-blossom mb-2">
                            <FaLeaf />
                            <h4 className="font-medium">Menstruation Phase</h4>
                        </div>
                        <p className="text-sm">
                            Days 1-7: Your menstrual period occurs when pregnancy doesn't happen.
                            The uterus sheds its lining, and hormone levels are low.
                        </p>
                    </div>

                    <div className="p-4 bg-moonlight rounded-lg">
                        <div className="flex items-center gap-2 text-lavender mb-2">
                            <FaLeaf />
                            <h4 className="font-medium">Fertile Window</h4>
                        </div>
                        <p className="text-sm">
                            Days 8-14: Estrogen rises, preparing your body for potential pregnancy.
                            This is when conception is most likely to occur.
                        </p>
                    </div>

                    <div className="p-4 bg-moonlight rounded-lg">
                        <div className="flex items-center gap-2 text-peach mb-2">
                            <FaLeaf />
                            <h4 className="font-medium">Ovulation Phase</h4>
                        </div>
                        <p className="text-sm">
                            Around Day 14: An egg is released from the ovaries.
                            This is your most fertile day with the highest chance of conception.
                        </p>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        Note: This tool provides estimates based on the calendar method.
                        Individual cycles may vary. Always consult a healthcare professional
                        for medical advice.
                    </p>
                </div>
            )}
        </div>
    );
}
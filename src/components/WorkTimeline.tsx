import React, { useState } from 'react';

const timelineData = [
    //{ id: 1, date: 'May 25 - Aug 25', title: 'Adobe', desc: 'Software Engineering Intern', color: 'bg-pink-500' },
    { id: 2, date: 'Jun 24 - Aug 24', title: 'M&T Bank', desc: 'Software Engineering Intern', color: 'bg-pink-400' },
    { id: 3, date: 'Aug 23 - Aug 24', title: 'YC - Page One Lab', desc: 'Full-Stack Developer', color: 'bg-pink-300' },
    { id: 4, date: 'Jun 23 - Aug 23', title: 'Autodocs LLC', desc: 'QA Intern', color: 'bg-pink-200' },
];

const Timeline = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const closeModal = () => {
        setSelectedMilestone(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                {timelineData.map((milestone, index) => (
                    <div
                        key={milestone.id}
                        className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                            }`}
                    >
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-pink-800 shadow-xl w-8 h-8 rounded-full min-w-fit p-2">
                            <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                        </div>
                        <button

                            className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl ${milestone.color} text-white cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${milestone.color.split('-')[1]}-400`}
                        >
                            <h3 className="mb-3 font-bold text-xl">{milestone.title}</h3>
                            <h4 className="mb-1 font-style: italic font-normal text-m">{milestone.desc}</h4>
                            <h5 className="font-light text-sm">{milestone.date}</h5>
                        </button>
                    </div>
                ))}
            </div>

            {selectedMilestone && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={closeModal}>
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
                        <div className="mt-3 text-center">
                            <div className="mt-2 px-7 py-3">
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="closeModal"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timeline;
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkspacePremium } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';

const Timeline = ({ education, experience }) => {
    const [activeTab, setActiveTab] = React.useState('education');

    return (
        <section id="#timeline">
            <div className="container py-10 mx-auto text-center">
                <div className="flex flex-col sm:flex-row justify-center mt-12">
                    <h1 className="text-3xl font-medium text-black md:text-4xl mb-10 p-4">Timeline</h1>
                </div>
                <div className="w-full mx-auto ">
                    <div className="flex justify-center space-x-4">
                        <button
                            className={`timeline-tab ${
                                activeTab === 'education' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                            } hover:bg-gray-800 hover:text-white rounded-lg px-4 py-2`}
                            onClick={() => setActiveTab('education')}
                        >
                            Education
                        </button>
                        <button
                            className={`timeline-tab ${
                                activeTab === 'experience' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
                            } hover:bg-gray-800 hover:text-white rounded-lg px-4 py-2`}
                            onClick={() => setActiveTab('experience')}
                        >
                            Experience
                        </button>
                    </div>
                    <VerticalTimeline lineColor="#2978b5">
                        {activeTab === 'education' &&
                            education.map((item) => (
                                <VerticalTimelineElement
                                    key={item._id}
                                    className="vertical-timeline-element--education"
                                    date={`${new Date(item.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - ${new Date(item.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
                                    iconStyle={{ backgroundColor: '#fcfcfc', color: '#2978b5', padding: '15px', border: '3px solid #2978b5' }}
                                    icon={<MdSchool />}
                                    dateClassName="font-bold text-black"
                                    contentStyle={{
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        color: '#444',
                                    }}
                                    contentArrowStyle={{ borderRight: '16px solid  rgb(33, 150, 243)' }}
                                >
                                    <div className="vertical-timeline-content border-4 border-purple-900 p-4">
                                        <h1 className="font-bold text-blue-700 text-2xl underline mb-2">{item.jobTitle}</h1>
                                        <div className="flex justify-center gap-2 items-center mb-2">
                                            <h3 className="font-bold text-purple-800 text-xl vertical-timeline-element-title">{item.company_name}</h3>
                                            <h3 className="vertical-timeline-element-subtitle font-semibold text-purple-500 text-xl">
                                                ({item.jobLocation})
                                            </h3>
                                        </div>

                                        <h4 className="text-lg font-bold text-start">Area of Responsibility:</h4>
                                        <ul className="list-disc list-outside text-gray-600 text-start px-5">
                                            {item.bulletPoints.map((bulletPoint, index) => (
                                                <li key={index}>{bulletPoint}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </VerticalTimelineElement>
                            ))}
                        {activeTab === 'experience' &&
                            experience.map((item) => (
                                <VerticalTimelineElement
                                    key={item._id}
                                    className="vertical-timeline-element--education"
                                    date={`${new Date(item.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - ${new Date(item.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
                                    iconStyle={{ backgroundColor: '#fcfcfc', color: '#2978b5', padding: '15px', border: '3px solid #2978b5' }}
                                    icon={<MdWorkspacePremium />}
                                    dateClassName="font-bold text-black"
                                    contentStyle={{
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#ffffff',
                                        textAlign: 'center',
                                        color: '#444',
                                    }}
                                    contentArrowStyle={{ borderRight: '16px solid  rgb(33, 150, 243)' }}
                                >
                                    <div className="vertical-timeline-content border-4 border-purple-900 p-4">
                                        <h1 className="font-bold text-blue-700 text-2xl underline mb-2">{item.jobTitle}</h1>
                                        <div className="flex justify-center gap-2 items-center mb-2">
                                            <h3 className="font-bold text-purple-800 text-xl vertical-timeline-element-title">{item.company_name}</h3>
                                            <h3 className="vertical-timeline-element-subtitle font-semibold text-purple-500 text-xl">
                                                ({item.jobLocation})
                                            </h3>
                                        </div>

                                        <h4 className="text-lg font-bold text-start">Area of Responsibility:</h4>
                                        <ul className="list-disc list-outside text-gray-600 text-start px-5">
                                            {item.bulletPoints.map((bulletPoint, index) => (
                                                <li key={index}>{bulletPoint}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </VerticalTimelineElement>
                            ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

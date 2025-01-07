'use client';
import { useState } from 'react';
import { Container } from './Container';
import EducationTimeline from '@/components/EducationTimeline';
import WorkTimeline from '@/components/WorkTimeline';
import { AnimatedImage } from '@/components/WalkingCat';

const tabs = [
  { name: 'Work', key: 'work' },
  { name: 'Education', key: 'education' },
];

export default function Example() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <section
      id="experience"
      aria-label="experience"
      className="bg-white py-20 sm:py-32 relative"
    >
      <div className="absolute top-0 left-0 w-full h-48 overflow-hidden">
        {/* {AnimatedImage()} */}
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <nav
            aria-label="Tabs"
            className="isolate flex justify-center divide-x divide-gray-200 rounded-lg shadow"
          >
            {tabs.map((tab, tabIdx) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`group relative min-w-0 flex-1 px-6 py-4 text-sm font-medium focus:z-10 ${activeTab === tab.key
                  ? 'text-gray-900 bg-pink-100'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  } ${tabIdx === 0 ? 'rounded-l-lg' : ''} ${tabIdx === tabs.length - 1 ? 'rounded-r-lg' : ''}`}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 ${activeTab === tab.key ? 'bg-pink-300' : 'bg-transparent'
                    }`}
                />
              </button>
            ))}
          </nav>
          <div className="mt-8">
            {activeTab === 'education' && <div className="text-left">{EducationTimeline()}</div>}
            {activeTab === 'work' && <div>{WorkTimeline()}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}

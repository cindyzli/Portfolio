'use client';
import { useState } from 'react';
import { Container } from './Container';
import EducationTimeline from '@/components/EducationTimeline';
import WorkTimeline from '@/components/WorkTimeline';

const COLLAPSED_HEIGHT = 680;

const tabs = [
  { name: 'Work', key: 'work' },
  { name: 'Education', key: 'education' },
];

export default function Example() {
  const [activeTab, setActiveTab] = useState('work');
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="experience"
      aria-label="experience"
      className="relative bg-gray-950 py-20 sm:py-32"
    >
      <div className="absolute top-0 left-0 w-full h-48 overflow-hidden">
        {/* {AnimatedImage()} */}
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <nav
            aria-label="Tabs"
            className="isolate flex justify-center divide-x divide-white/10 overflow-hidden rounded-2xl bg-white/5 shadow ring-1 ring-white/10"
          >
            {tabs.map((tab, tabIdx) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setExpanded(false);
                }}
                className={`group relative min-w-0 flex-1 px-6 py-4 text-sm font-medium focus:z-10 ${activeTab === tab.key
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                  } ${tabIdx === 0 ? 'rounded-l-lg' : ''} ${tabIdx === tabs.length - 1 ? 'rounded-r-lg' : ''}`}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 ${activeTab === tab.key ? 'bg-gradient-to-r from-pink-400 to-fuchsia-400' : 'bg-transparent'
                    }`}
                />
              </button>
            ))}
          </nav>

          <div className="relative mt-8">
            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: expanded ? '3000px' : `${COLLAPSED_HEIGHT}px` }}
            >
              {activeTab === 'education' && (
                <div className="text-left">
                  <EducationTimeline />
                </div>
              )}
              {activeTab === 'work' && (
                <div>
                  <WorkTimeline />
                </div>
              )}
            </div>

            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent" />
            )}

            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="relative z-10 mx-auto mt-4 flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
            >
              {expanded ? (
                <>
                  Show less
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  Click to see more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

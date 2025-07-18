import React from 'react';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className='flex flex-col '>
      {/* Hero Section */}
      <div className='flex xl:flex-row flex-col md:gap-[7rem] gap-[3rem] justify-between items-center'>
        <div className='flex-1'>
          <div className="md:text-[18px] font-regular text-white">
            Hey there! I&apos;m Marouane Boufarouj, Software Engineer from Morocco.
          </div>
          <p className="text-gray-400 leading-relaxed md:text-[16px] text-[14px]">
            Currently a Research Assistant at Oracle, graduated in June 2025 as a State Engineer 
            in Software and Data Engineering from ENSA Khouribga.
          </p>
        </div>
        
        <div className="flex flex-col items-center flex-shrink-0">
          <Image 
            src="/images/PPD1.JPEG" 
            alt="Marouane Boufarouj" 
            width={400} 
            height={240}
            className="rounded-xl object-cover hover:grayscale transition-all duration-300"
          />
          <p className="font-comico italic text-[10px] text-gray-500 mt-3">
            Me (leftmost) and my friends :)
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="text-center max-w-3xl mx-auto mt-[3rem]">
        <h2 className="text-2xl font-bold text-white mb-6 font-comico">My Goal</h2>
        <p className="text-lg text-gray-300 leading-relaxed italic">
          &ldquo;Work on something that positively impacts many people, alongside smart individuals you can learn from, in a supportive environment and get paid while doing it.&rdquo;
        </p>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-3 gap-8 text-center mt-[5rem]'>
        <div>
          <div className="text-2xl font-bold text-white font-comico">9+</div>
          <div className="text-gray-400 text-sm">Months at Oracle</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white font-comico">Top 5%</div>
          <div className="text-gray-400 text-sm">Programming Contest</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white font-comico">Tech Lead</div>
          <div className="text-gray-400 text-sm">Dataverse Event at ENSA</div>
        </div>
      </div>

      {/* What I Do */}
      <div className="mt-[8rem]">
        <h2 className="text-3xl font-bold text-white mb-12 text-center font-comico">
          What I Do
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-white mb-3">Research</h3>
            <p className="text-gray-400 text-sm">
              AI code review systems and vector database optimization at Oracle
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Build</h3>
            <p className="text-gray-400 text-sm">
              Full-stack applications with modern tech stacks and ML integration
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-3">Compete</h3>
            <p className="text-gray-400 text-sm">
              Programming contests and leading technical communities
            </p>
          </div>
        </div>
      </div>


               {/* Timeline */}
        <div className='mt-[8rem]'>
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-comico">
            My Journey
          </h2>
          <div className="w-full overflow-x-auto">
            <div className="relative min-w-[800px] px-8">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-700"></div>
              
              {/* Timeline Items */}
              <div className="flex justify-between relative">
                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2022</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Contest Debut</h4>
                  <p className="text-xs text-gray-300">33rd, Competitive Programming (MNPC)</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2023</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Chess Champion</h4>
                  <p className="text-xs text-gray-300">ENSA Khouribga</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2023</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Top 5%</h4>
                  <p className="text-xs text-gray-300">14th, Competitive Programming (MNPC)</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2024</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Oracle OIP</h4>
                  <p className="text-xs text-gray-300">Vector DB Research</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2024</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Tech Lead</h4>
                  <p className="text-xs text-gray-300">Dataverse 2.0</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2025</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Graduated</h4>
                  <p className="text-xs text-gray-300">State Engineer</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-4"></div>
                  <div className="text-xs text-gray-400 mb-2">2025</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Oracle PFE</h4>
                  <p className="text-xs text-gray-300">AI Code Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className='mt-[8rem]'>
          <h2 className="text-3xl font-bold text-white mb-9 text-center font-comico">
            What I know
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Java', icon: '☕', color: '#f89820' },
              { name: 'Python', icon: '🐍', color: '#3776ab' },
              { name: 'Rust', icon: '🦀', color: '#dea584' },
              { name: 'C/C++', icon: '⚡', color: '#00599c' },
              { name: 'JS', icon: '🟨', color: '#f7df1e' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="group relative px-4 py-2 text-white cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.icon}
                  </span>
                  <span className="group-hover:font-semibold transition-all duration-300">
                    {tech.name}
                  </span>
                </div>
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
};

export default MainContent; 
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { projects } from '../data/projects';
import { withBase } from '../lib/utils';

const featuredWorkItems = [
  { to: '/project/capstone#capstone-group-poster.jpg', src: withBase('/images/Capstone/capstone-group-poster.jpg'), alt: 'IXL Team with poster' },
  { to: '/project/capstone#apl-shirts-group.jpg', src: withBase('/images/Capstone/apl-shirts-group.jpg'), alt: 'IXL APL shirts group' },
  { to: '/project/capstone#poster-full-closeup.jpg', src: withBase('/images/Capstone/poster-full-closeup.jpg'), alt: 'IXL poster closeup' },
  { to: '/project/capstone#interview-session-bw.jpg', src: withBase('/images/Capstone/interview-session-bw.jpg'), alt: 'IXL interview session' },
  { to: '/project/capstone#avery-with-poster.jpg', src: withBase('/images/Capstone/avery-with-poster.jpg'), alt: 'Avery with IXL poster' },
  { to: '/project/gravity#Crazy%208%27s%20Sketching.PNG', src: withBase('/images/gravity/Crazy%208%27s%20Sketching.PNG'), alt: 'GravityDrive Sketching' },
  { to: '/project/gravity#Group%20Skecthing%20.JPG', src: withBase('/images/gravity/Group%20Skecthing%20.JPG'), alt: 'GravityDrive Group Sketching 1' },
  { to: '/project/gravity#Group%20Skecthing%203.JPG', src: withBase('/images/gravity/Group%20Skecthing%203.JPG'), alt: 'GravityDrive Group Sketching 3' },
  { to: '/project/gravity#Group%20Sketching%202.JPG', src: withBase('/images/gravity/Group%20Sketching%202.JPG'), alt: 'GravityDrive Group Sketching 2' },
  { to: '/project/gravity#On-Site%20Project%20Breifing.jpg', src: withBase('/images/gravity/On-Site%20Project%20Breifing.jpg'), alt: 'GravityDrive On-Site Briefing' },
  { to: '/project/gravity#On-Site%20Project%20Discussions.jpg', src: withBase('/images/gravity/On-Site%20Project%20Discussions.jpg'), alt: 'GravityDrive Discussions' },
  { to: '/project/gravity#On-Site%20Project%20Observation.jpg', src: withBase('/images/gravity/On-Site%20Project%20Observation.jpg'), alt: 'GravityDrive Observation' },
  // keep a couple existing highlights
  { to: '/project/our#final.png', src: withBase('/images/purdueour/final.png'), alt: 'Purdue OUR' },
  { to: '/project/apl#Picture1.png', src: withBase('/images/johns/Picture1.png'), alt: 'Johns Hopkins APL' }
];

export function Home() {
  const capstoneProjects = projects.filter((proj) => proj.projectType === 'Capstone Project');
  const sponsoredProjects = projects.filter((proj) => !proj.projectType || proj.projectType === 'Sponsored Project');
  const homeWorkProjects = [...capstoneProjects, ...sponsoredProjects];
  const randomizedFeaturedWorkItems = useMemo(
    () => [...featuredWorkItems].sort(() => Math.random() - 0.5),
    []
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="pt-7 px-7">
        <h1 className="font-display font-black text-[clamp(40px,8.5vw,104px)] leading-[0.95] text-green uppercase tracking-tight">
          Avery <span className="inline-block animate-[spin_8s_linear_infinite] text-[0.7em] align-middle ml-1.5">🌟</span><br/>Dellinger III
        </h1>
      </div>

      

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 border-b-2 md:border-b-3 border-blue/40 md:border-blue mt-0">
        <div className="flex-none w-full md:w-[340px] p-8 md:p-12 bg-[#efe8dc] border-r-0 md:border-r-2 border-dark/20 flex flex-col justify-center items-center text-center">
          <div className="font-serif italic text-[clamp(22px,2.8vw,36px)] text-[#3d2b14] leading-[1.2] mb-5">
            "I design for the moment I see users <em className="not-italic text-[#7a5535]">smile</em>."
          </div>
          <div className="text-xs tracking-widest uppercase text-[#7a5535]/70 font-semibold">
            Avery Dellinger III — UX Designer, Purdue '26
          </div>
        </div>
        
        <div className="flex-1 flex items-stretch w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {[{
              title: "Hey, I'm Avery",
              text: "UX Designer focused on human-centered solutions. I balance curiosity with craft to create useful, approachable products.",
              cardClass: 'bg-[#ffd85c] border-dark',
              titleClass: 'text-dark',
              textClass: 'text-[#3f3322]',
              barClass: 'bg-dark'
            },{
              title: "I Ask a lot of Questions",
              text: "Research-led work: interviews, observation, and synthesis drive the product decisions I make with teams.",
              cardClass: 'bg-[#1a3fcc] border-dark',
              titleClass: 'text-white',
              textClass: 'text-blue-100',
              barClass: 'bg-yellow'
            },{
              title: "Sketch first, Digital second",
              text: "Early, rapid sketching helps me iterate fast and communicate ideas before polishing visuals.",
              cardClass: 'bg-[#e86a1a] border-dark',
              titleClass: 'text-white',
              textClass: 'text-orange-100',
              barClass: 'bg-yellow'
            },{
              title: "Teams make Better Work",
              text: "I prioritize clear communication and collaborative problem solving to help teams ship confident designs.",
              cardClass: 'bg-[#22a35b] border-dark',
              titleClass: 'text-white',
              textClass: 'text-green-100',
              barClass: 'bg-yellow'
            }].map((item) => (
              <div key={item.title} className={`p-6 flex flex-col items-start md:items-center text-left md:text-center gap-2.5 border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 ${item.cardClass}`}>
                <div className={`h-1.5 w-10 rounded mb-3 md:mx-auto ${item.barClass}`} />
                <div className={`font-display font-bold text-xs tracking-wide mb-1 ${item.titleClass}`}>{item.title}</div>
                <div className={`text-[13px] leading-[1.65] ${item.textClass}`}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-7 pt-10">
        <div className="rounded-[28px] border-[3px] border-dark bg-[#f8f3e8] p-6 md:p-8 shadow-[6px_6px_0_var(--color-dark)]">
          <div className="font-display font-bold text-[11px] tracking-[0.16em] uppercase text-orange mb-3">What I bring</div>
          <h2 className="font-display font-black text-[clamp(22px,3.8vw,34px)] text-dark leading-[1.05] mb-5">
            Designing with curiosity, clarity, and care.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Research-led thinking',
                text: 'I translate user questions into strong product direction through interviews, observations, and synthesis.'
              },
              {
                title: 'Collaborative leadership',
                text: 'I help teams stay aligned, make decisions clearly, and move work forward with confidence.'
              },
              {
                title: 'Thoughtful prototyping',
                text: 'I turn complex ideas into polished, testable experiences that feel useful and human.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[20px] border-2 border-dark bg-white p-4">
                <div className="font-display font-bold text-[13px] text-blue mb-2">{item.title}</div>
                <div className="text-[13px] leading-[1.7] text-[#555]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h2 className="font-display font-bold text-[clamp(22px,4.5vw,40px)] text-blue text-center pb-3.5 border-b-3 border-blue mx-7">All Work</h2>
        <div className="overflow-x-auto overflow-y-visible p-7 pb-8 thin-scrollbar">
          <div className="flex gap-4 w-max mx-auto">
            {homeWorkProjects.map((proj, index) => (
              (() => {
                const cardNumber = String(index + 1).padStart(2, '0');
                const cardTerm = proj.id === 'capstone' ? 'Year Long' : proj.semester.split(' ')[0];

                return (
              <Link 
                key={proj.id} 
                to={`/project/${proj.id}`}
                className="w-[260px] shrink-0 border-[3px] border-dark bg-white cursor-pointer transition-all duration-200 shadow-[4px_4px_0_var(--color-dark)] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_var(--color-dark)] flex flex-col"
              >
                <div className={`h-[150px] flex items-center justify-center overflow-hidden project-banner ${proj.bgClass} p-4`}>
                  {proj.id === 'gravity' && (
                    <img src={withBase('/images/gravity/GravityDriveLogo.jpg')} alt="GravityDrive Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'apl' && (
                    <img src={withBase('/images/johns/JohnsHopkinsLogo.png')} alt="Johns Hopkins APL Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'our' && (
                    <img src={withBase('/images/purdueour/OURLogo.jpg')} alt="Purdue OUR Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'donate' && (
                    <img src={withBase('/images/donate/DonateEquityLogo.png')} alt="Donate Equity Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'pg' && (
                    <img src={withBase('/images/proctor/P&GLogo.png')} alt="P&G Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'capstone' && (
                    <img src={withBase('/images/Capstone/image.png')} alt="Capstone Project" className="max-w-[100%] max-h-[100%] object-contain" />
                  )}
                  {!['gravity', 'apl', 'our', 'donate', 'pg', 'capstone'].includes(proj.id) && (
                    <div className="text-center text-white/90 px-4">
                      <div className="font-display font-black text-[18px] leading-tight">{proj.title}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-80">{proj.projectType || 'Project'}</div>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-[10px] tracking-[0.14em] text-orange font-semibold mb-1 uppercase">{cardNumber} · {cardTerm}</div>
                  <div className="font-display font-bold text-[13px] leading-[1.3] text-dark mb-1.5">{proj.title}</div>
                  <div className="text-[11px] text-muted leading-[1.5]">{proj.semester}<br/>{proj.focus}</div>
                  <span className="inline-block mt-auto pt-3 text-[10px] font-semibold tracking-widest uppercase text-blue after:content-['\2192']">More info</span>
                </div>
              </Link>
            );
            })()
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h2 className="font-serif font-bold text-[clamp(22px,4vw,34px)] text-[#5c3a0a] px-7 pb-3">Highlighted Work</h2>
        <div className="overflow-hidden w-full">
          <div className="flex gap-2.5 px-7 pb-4 w-max animate-[scroll-loop_130s_linear_infinite] hover:[animation-play-state:paused]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-2.5">
                {randomizedFeaturedWorkItems.map((item) => (
                  <Link key={`${item.to}-${i}`} to={item.to} className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
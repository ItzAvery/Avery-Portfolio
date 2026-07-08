import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';

export function Work() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="pt-6 px-7 pb-4 border-b-[3px] border-blue">
        <h1 className="font-display font-bold text-[clamp(20px,4vw,32px)] text-blue text-center">Sponsored Projects</h1>
      </div>
      
      <div className="pb-12">
        {projects.map((proj, index) => {
          const isEven = index % 2 !== 0; // 0-indexed, so 1, 3 are even visually
          
          return (
            <div key={proj.id} className={`border-b-[3px] border-blue grid grid-cols-1 sm:grid-cols-2 min-h-[360px] ${isEven ? 'sm:[direction:rtl]' : ''}`}>
              <div className={`p-8 sm:p-7 flex flex-col justify-center ${isEven ? 'sm:border-l-[3px] sm:border-r-0 [direction:ltr]' : 'sm:border-r-[3px]'} border-blue border-b-[3px] sm:border-b-0`}>
                <div className="font-display font-black text-6xl text-blue/10 leading-none mb-1">{proj.number}</div>
                <div className="inline-block px-2.5 py-1 bg-orange text-white text-[10px] font-bold tracking-widest uppercase mb-3 self-start">
                  {proj.semester}
                </div>
                <h2 className="font-display font-bold text-[clamp(16px,2.5vw,22px)] leading-[1.2] text-dark mb-3.5 whitespace-pre-line">
                  {proj.title}:<br/>{proj.subtitle.split(' for ')[0]}
                </h2>
                <p className="text-[13px] text-[#444] leading-[1.8] mb-3">
                  {proj.overview.split('.')[0]}.
                </p>
                <ul className="list-none mb-4">
                  {proj.process.slice(0, 2).map((step, i) => (
                    <li key={i} className="text-xs text-[#555] leading-[1.7] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-blue before:text-[10px] before:top-0.5">
                      {step.desc}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/project/${proj.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue tracking-wide mt-auto w-fit hover:gap-2.5 transition-all after:content-['\2192']"
                >
                  More info
                </Link>
              </div>
              
              <Link to={`/project/${proj.id}`} className={`flex items-center justify-center min-h-[200px] sm:min-h-[320px] p-0 cursor-pointer hover:opacity-90 ${isEven ? '[direction:ltr]' : ''}`}>
                <div className={`w-full h-full min-h-[200px] sm:min-h-[300px] flex items-center justify-center flex-col gap-4 p-7 ${proj.bgClass}`}>
                  {proj.id === 'gravity' && (
                    <img src="/images/gravity/GravityDriveLogo.jpg" alt="GravityDrive Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'apl' && (
                    <img src="/images/johns/JohnsHopkinsLogo.png" alt="Johns Hopkins APL Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'our' && (
                    <img src="/images/purdueour/OURLogo.jpg" alt="Purdue OUR Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'donate' && (
                    <img src="/images/donate/DonateEquityLogo.png" alt="Donate Equity Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                  {proj.id === 'pg' && (
                    <img src="/images/proctor/P&GLogo.png" alt="P&G Logo" className="max-w-[80%] max-h-[80%] object-contain" />
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
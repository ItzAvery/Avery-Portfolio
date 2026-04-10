import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';

export function Home() {
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

      <div className="flex flex-col md:flex-row items-start gap-0 border-b-3 border-blue mt-0">
        <div className="flex-none w-full md:w-[340px] p-8 md:p-12 bg-blue flex flex-col justify-center items-start">
          <div className="font-serif italic text-[clamp(22px,2.8vw,36px)] text-white leading-[1.2] mb-5">
            "I design for the moment I see users <em className="not-italic text-yellow">smile</em>."
          </div>
          <div className="text-xs tracking-widest uppercase text-white/55 font-semibold">
            Avery Dellinger III — UX Designer, Purdue '26
          </div>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row overflow-x-auto hide-scrollbar w-full">
          <div className="flex-none md:w-[220px] p-8 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-blue flex flex-col gap-2.5">
            <div className="text-[26px] leading-none">👋</div>
            <div className="font-display font-bold text-xs text-dark tracking-wide">Hey, I'm Avery</div>
            <div className="text-[13px] text-[#555] leading-[1.65]">
              I'm a senior UX designer at Purdue who genuinely loves making people's lives a little easier. I got into this field because I believe technology should work <em className="not-italic font-medium">for</em> people, not the other way around.
            </div>
          </div>
          <div className="flex-none md:w-[220px] p-8 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-blue flex flex-col gap-2.5">
            <div className="text-[26px] leading-none">❓</div>
            <div className="font-display font-bold text-xs text-dark tracking-wide">I ask a lot of questions</div>
            <div className="text-[13px] text-[#555] leading-[1.65]">
              Good design starts with curiosity. I've spent the last few years getting really comfortable in interviews, workshops, and synthesis sessions, learning to listen before I design.
            </div>
          </div>
          <div className="flex-none md:w-[220px] p-8 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-blue flex flex-col gap-2.5">
            <div className="text-[26px] leading-none">✍️</div>
            <div className="font-display font-bold text-xs text-dark tracking-wide">Sketch first, pixel second</div>
            <div className="text-[13px] text-[#555] leading-[1.65]">
              I sketch constantly on paper, on my iPad, on whatever's nearby. My best ideas always start as messy scribbles, and I've learned to love that part of the process.
            </div>
          </div>
          <div className="flex-none md:w-[220px] p-8 md:p-6 flex flex-col gap-2.5">
            <div className="text-[26px] leading-none">🤝</div>
            <div className="font-display font-bold text-xs text-dark tracking-wide">Teams make better work</div>
            <div className="text-[13px] text-[#555] leading-[1.65]">
              I've led teams, taken notes at sponsor meetings, and worked through disagreements in group chats. I genuinely think collaboration makes everything better including bettering myself.
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h2 className="font-display font-bold text-[clamp(22px,4.5vw,40px)] text-blue text-center pb-3.5 border-b-3 border-blue mx-7">Sponsored Projects</h2>
        <div className="overflow-x-auto overflow-y-visible p-7 pb-8 thin-scrollbar">
          <div className="flex gap-4 w-max">
            {projects.map((proj) => (
              <Link 
                key={proj.id} 
                to={`/project/${proj.id}`}
                className="w-[260px] shrink-0 border-3 border-dark bg-white cursor-pointer transition-all duration-200 shadow-[4px_4px_0_var(--color-dark)] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_var(--color-dark)] flex flex-col"
              >
                <div className={`h-[150px] flex items-center justify-center overflow-hidden ${proj.bgClass} p-4`}>
                  {proj.id === 'gravity' && (
                    <img src="/images/gravity/GravityDriveLogo.jpg" alt="Gravity Drive Logo" className="max-w-[80%] max-h-[80%] object-contain" />
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
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-[10px] tracking-[0.14em] text-orange font-semibold mb-1 uppercase">{proj.number} · {proj.semester.split(' ')[0]}</div>
                  <div className="font-display font-bold text-[13px] leading-[1.3] text-dark mb-1.5">{proj.title}</div>
                  <div className="text-[11px] text-muted leading-[1.5]">{proj.semester}<br/>{proj.focus}</div>
                  <span className="inline-block mt-auto pt-3 text-[10px] font-semibold tracking-widest uppercase text-blue after:content-['_\u2192']">More info</span>
                </div>
              </Link>
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
                <Link to="/project/our#final.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/purdueour/final.png" alt="Purdue OUR" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/apl#Picture1.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/johns/Picture1.png" alt="Johns Hopkins APL" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/donate#image_1.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/donate/image_1.png" alt="Donate Equity" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/our#final2.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/purdueour/final2.png" alt="Purdue OUR" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/apl#Picture2.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/johns/Picture2.png" alt="Johns Hopkins APL" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/donate#image_2.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/donate/image_2.png" alt="Donate Equity" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/our#final3.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/purdueour/final3.png" alt="Purdue OUR" className="w-full h-full object-cover" />
                </Link>
                <Link to="/project/apl#Picture3.png" className="w-[180px] h-[125px] shrink-0 border-2 border-dark overflow-hidden bg-[#e8e4de] block hover:opacity-80 transition-opacity">
                  <img src="/images/johns/Picture3.png" alt="Johns Hopkins APL" className="w-full h-full object-cover" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

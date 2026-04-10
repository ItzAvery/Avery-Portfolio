import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="bg-brown pt-11 px-7 pb-9 relative overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(245,200,0,0.18)_0%,transparent_65%)] rounded-full"></div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-yellow mb-4 font-semibold relative z-10">UX Designer · Researcher · Purdue University</div>
        <h1 className="font-display font-black text-[clamp(28px,6vw,64px)] text-white leading-[0.95] tracking-tight mb-3.5 uppercase relative z-10">
          Avery<br/><span className="text-yellow">Dellinger III</span>
        </h1>
        <p className="font-serif text-[clamp(14px,2.5vw,20px)] text-white/75 italic mb-6 leading-[1.4] relative z-10">
          Designing for people.<br/>Research-driven. Prototype-tested.
        </p>
        <div className="flex flex-wrap gap-2.5 relative z-10">
          <a href="mailto:dellingeravery@gmail.com" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide no-underline transition-transform hover:-translate-y-0.5 border-2 border-white/25 bg-orange text-white">
            ✉ dellingeravery@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/avery-dellinger-iii-3b267b252/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide no-underline transition-transform hover:-translate-y-0.5 border-2 border-white/25 bg-[#0077b5] text-white">
            in LinkedIn
          </a>
        </div>
      </div>

      <div className="w-full overflow-hidden border-b-3 border-dark bg-gradient-to-br from-[#b8cfe8] to-[#5a82b0] min-h-[360px] relative">
        <img 
          src="/images/profile/Dellinger_Avery.png" 
          alt="Avery Dellinger III" 
          className="w-full h-[480px] object-cover object-[center_20%] block"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="p-7 md:p-9">
        <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">About Me</p>
        <p className="text-sm leading-[1.8] text-[#333] mb-9">
          Senior at Purdue University majoring in UX Design (BS in Computer Graphic Technology, Polytechnic Institute), graduating May 2026. I specialize in user research, facilitation, and high-fidelity prototyping, turning complex problems into clear human-centered solutions. I've led research teams across health tech, equity fintech, AI safety, and consumer goods.
        </p>

        <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">Education</p>
        <div className="border-2 border-dark bg-white p-4 mb-9 flex justify-between items-start flex-wrap gap-2.5">
          <div>
            <div className="font-display font-bold text-[clamp(12px,2vw,16px)] text-dark mb-1">Purdue University</div>
            <div className="text-xs text-muted mb-1">BS in Computer Graphic Technology — UX Design</div>
            <div className="text-xs text-muted mb-1">Polytechnic Institute · West Lafayette, IN · Expected May 2026</div>
            <div className="mt-2">
              <div className="text-[11px] text-green font-semibold mb-0.5">Dean's List : Fall 2022</div>
              <div className="text-[11px] text-green font-semibold mb-0.5">Semester Honors: Spr 2024, Spr 2025, Fall 2025</div>
              <div className="text-[11px] text-blue font-semibold">Purdue Summer Start Program</div>
            </div>
          </div>
        </div>

        <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">UX Skills</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {['User Research', 'Research Synthesis', 'Interaction Design', 'Information Architecture', 'Facilitation & Leadership', 'Persona Development', 'Prototype Storytelling', 'Workshop Facilitation', 'Concept Testing', 'Competitive Analysis', 'SME Interviews', 'High-Fidelity Prototyping'].map(skill => (
            <span key={skill} className="px-3.5 py-1.5 bg-[#eef0f8] text-blue text-xs font-semibold rounded-md tracking-wide">{skill}</span>
          ))}
        </div>

        <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">Software Tools</p>
        <div className="flex flex-wrap gap-2 mb-9">
          {['Figma', 'FigJam', 'Canva', 'Miro', 'Photoshop'].map(tool => (
            <span key={tool} className="px-3.5 py-1.5 bg-[#fdf2ea] text-orange text-xs font-semibold rounded-md tracking-wide">{tool}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
          <div>
            <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">UX Sponsored Project Experience</p>
            
            <Link to="/project/gravity" className="block mb-5 pb-5 border-b border-[#e8e4de] cursor-pointer transition-colors rounded hover:bg-[#eef0f8] p-3 -mx-3 group">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3] group-hover:text-blue">Gravity Drive</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Spring 2026 · Now</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">UX Designer · UX Studio</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Building interactive prototype for Landcare Operations Centers.</li>
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Translating user needs into role-based workflows and dashboards.</li>
              </ul>
              <div className="text-[11px] text-blue font-bold tracking-wide mt-1.5">View sponsored project →</div>
            </Link>

            <Link to="/project/apl" className="block mb-5 pb-5 border-b border-[#e8e4de] cursor-pointer transition-colors rounded hover:bg-[#eef0f8] p-3 -mx-3 group">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3] group-hover:text-blue">Johns Hopkins APL</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Fall 2025</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">Sponsored Project Lead · UX Studio</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Facilitated 4 of 7 SME interviews; directed 5-person team on AI misuse research.</li>
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Led value matrix workshops and synthesis to define problem framework.</li>
              </ul>
              <div className="text-[11px] text-blue font-bold tracking-wide mt-1.5">View sponsored project →</div>
            </Link>

            <Link to="/project/our" className="block mb-5 pb-5 border-b border-[#e8e4de] cursor-pointer transition-colors rounded hover:bg-[#eef0f8] p-3 -mx-3 group">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3] group-hover:text-blue">Purdue OUR</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Spring 2025</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">UX Designer · UX Studio</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Led comparative analysis across 9 universities.</li>
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Designed mid-fidelity pages improving hierarchy and readability.</li>
              </ul>
              <div className="text-[11px] text-blue font-bold tracking-wide mt-1.5">View sponsored project →</div>
            </Link>

            <Link to="/project/donate" className="block mb-5 pb-5 border-b border-[#e8e4de] cursor-pointer transition-colors rounded hover:bg-[#eef0f8] p-3 -mx-3 group">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3] group-hover:text-blue">Donate Equity</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Fall 2024</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">UX Designer · UX Studio</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Redesigned onboarding flow to reduce user drop-off.</li>
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Led sponsor prioritization workshops for dashboard features.</li>
              </ul>
              <div className="text-[11px] text-blue font-bold tracking-wide mt-1.5">View sponsored project →</div>
            </Link>

            <Link to="/project/pg" className="block mb-5 pb-5 border-b border-[#e8e4de] cursor-pointer transition-colors rounded hover:bg-[#eef0f8] p-3 -mx-3 group">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3] group-hover:text-blue">P&G × Amazon</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Spring 2024</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">UX Designer · UX Studio</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Championed the Grooming Quiz from concept to final prototype.</li>
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Led Figma storytelling and cross-team alignment for grooming sub-team.</li>
              </ul>
              <div className="text-[11px] text-blue font-bold tracking-wide mt-1.5">View sponsored project →</div>
            </Link>

          </div>
          
          <div>
            <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue">Work Experience</p>
            
            <div className="mb-5 pb-5 border-b border-[#e8e4de]">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3]">White Birch Lodge</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Jun–Aug 2024 · 2025</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">Staffer → Fulltime Kitchen Chef</div>
              <div className="text-[11px] text-muted mb-1.5">Elk Rapids, MI</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Promoted to Chef: prepared meals for 100+ guests daily, led diverse team.</li>
              </ul>
            </div>

            <div className="mb-5 pb-5 border-b border-[#e8e4de]">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3]">Helium Comedy Club</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">May 2023 – Jun 2024</div>
              </div>
              <div className="text-xs text-blue font-semibold mb-1.5">Kitchen Staff</div>
              <div className="text-[11px] text-muted mb-1.5">Indianapolis, IN</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Maintained quality during high-demand late-night hours.</li>
              </ul>
            </div>

            <p className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2 border-b-2 border-blue mt-6">Volunteer Work</p>
            
            <div className="mb-5 pb-5">
              <div className="flex justify-between items-start flex-wrap gap-1 mb-0.5">
                <div className="font-display font-bold text-[13px] text-dark leading-[1.3]">Irvington Vinyl & Books</div>
                <div className="text-[11px] text-muted tracking-wide font-medium whitespace-nowrap">Apr 2021 – Jul 2022</div>
              </div>
              <div className="text-[11px] text-muted mb-1.5">Indianapolis, IN</div>
              <ul className="list-none">
                <li className="text-xs text-[#444] leading-[1.65] pl-3.5 relative mb-1 before:content-['\2192'] before:absolute before:left-0 before:text-orange before:text-[9px] before:top-0.5">Organized supply data and reorganized stock for efficiency.</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="flex gap-3.5 flex-wrap mt-8">
          <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-xs border-3 border-dark cursor-pointer shadow-[4px_4px_0_var(--color-dark)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-dark)] tracking-wide no-underline bg-blue text-white">
            View my work →
          </Link>
          <a href="mailto:dellingeravery@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-xs border-3 border-dark cursor-pointer shadow-[4px_4px_0_var(--color-dark)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-dark)] tracking-wide no-underline bg-yellow text-dark">
            Email me ✉
          </a>
        </div>
      </div>
    </motion.div>
  );
}

import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { hash } = useLocation();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add a subtle highlight effect
          element.style.transition = 'box-shadow 0.5s ease';
          element.style.boxShadow = '0 0 0 4px var(--color-blue)';
          setTimeout(() => {
            element.style.boxShadow = 'none';
          }, 2000);
        }
      };
      // Delay to ensure framer-motion animations have settled
      setTimeout(scrollToElement, 400);
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, hash]);

  if (!project) {
    return <div className="p-8">Sponsored project not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      key={id}
    >
      <div className="min-h-[320px] flex items-end relative overflow-hidden">
        <div className={`absolute inset-0 ${project.bgClass}`}></div>
        <div className="relative z-10 p-9 w-full">
          <Link to="/work" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors mb-4 before:content-['\2190']">
            All sponsored projects
          </Link>
          <div className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 ${project.tagColor}`}>
            {project.semester} {project.id === 'gravity' ? '· Current' : ''}
          </div>
          <h1 className="font-display font-black text-[clamp(28px,5vw,60px)] text-white leading-none tracking-tight mb-2">
            {project.title}
          </h1>
          <div className="font-serif italic text-[clamp(15px,2.5vw,22px)] text-white/75">
            {project.subtitle}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap border-b-2 border-blue bg-white">
        <div className="flex-1 min-w-[100px] md:min-w-[120px] p-4 md:px-5 md:py-4 border-r border-[#ddd]">
          <div className="text-[9px] tracking-[0.15em] uppercase text-muted mb-1 font-semibold">Semester</div>
          <div className="font-display font-bold text-xs text-dark leading-[1.3]">{project.semester}</div>
        </div>
        <div className="flex-1 min-w-[100px] md:min-w-[120px] p-4 md:px-5 md:py-4 border-r border-[#ddd]">
          <div className="text-[9px] tracking-[0.15em] uppercase text-muted mb-1 font-semibold">Client</div>
          <div className="font-display font-bold text-xs text-dark leading-[1.3]">{project.client}</div>
        </div>
        <div className="flex-1 min-w-[100px] md:min-w-[120px] p-4 md:px-5 md:py-4 border-r border-[#ddd]">
          <div className="text-[9px] tracking-[0.15em] uppercase text-muted mb-1 font-semibold">Team Size</div>
          <div className="font-display font-bold text-xs text-dark leading-[1.3]">{project.teamSize}</div>
        </div>
        <div className="flex-1 min-w-[100px] md:min-w-[120px] p-4 md:px-5 md:py-4 border-r border-[#ddd]">
          <div className="text-[9px] tracking-[0.15em] uppercase text-muted mb-1 font-semibold">Focus</div>
          <div className="font-display font-bold text-xs text-dark leading-[1.3]">{project.focus}</div>
        </div>
        <div className="flex-1 min-w-[100px] md:min-w-[120px] p-4 md:px-5 md:py-4">
          <div className="text-[9px] tracking-[0.15em] uppercase text-muted mb-1 font-semibold">
            {project.status ? 'Status' : 'My Role'}
          </div>
          <div className={`font-display font-bold text-xs leading-[1.3] ${project.statusColor || 'text-dark'}`}>
            {project.status || project.myRole}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 max-w-[900px] mx-auto">
        <div className="mb-12">
          <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2.5 border-b-2 border-blue">Overview</div>
          {project.roleBadge && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange text-white text-[11px] font-bold tracking-wide uppercase rounded mb-4">
              {project.roleBadge}
            </div>
          )}
          <p className="text-[15px] leading-[1.85] text-[#333] mb-4">
            {project.overview}
          </p>
        </div>

        {project.teamwork && (
          <div className="mb-12">
            <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2.5 border-b-2 border-blue">Teamwork & Leadership</div>
            <p className="text-[15px] leading-[1.85] text-[#333] mb-4">
              {project.teamwork}
            </p>
            {project.quote && (
              <div className="border-l-4 border-yellow p-4 md:px-5 md:py-4 my-4 bg-[#fffdf0]">
                <p className="font-serif italic text-[15px] text-[#555] leading-[1.7]">{project.quote}</p>
              </div>
            )}
            {project.teamworkBullets && (
              <ul className="list-none mb-4">
                {project.teamworkBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-[#444] leading-[1.75] pl-5 relative mb-2 before:content-['\2192'] before:absolute before:left-0 before:text-blue before:text-[11px] before:top-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mb-12">
          <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2.5 border-b-2 border-blue">The Challenge</div>
          <div className="bg-[#eef0f8] border-l-4 border-blue p-5 md:px-6 md:py-5 my-4">
            <p className="text-sm leading-[1.75] text-[#333]" dangerouslySetInnerHTML={{ __html: project.challenge.replace(/(multiple distinct user roles|massive, ill-defined problem space|intimidating and opaque|genuinely novel and complex concept|too much choice creates paralysis)/, '<strong>$1</strong>') }} />
          </div>
          {project.challengeBullets && (
            <ul className="list-none mb-4">
              {project.challengeBullets.map((bullet, i) => (
                <li key={i} className="text-sm text-[#444] leading-[1.75] pl-5 relative mb-2 before:content-['\2192'] before:absolute before:left-0 before:text-blue before:text-[11px] before:top-1">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-12">
          <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2.5 border-b-2 border-blue">My Process</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            {project.process.map((step, i) => (
              <div key={i} className="border-2 border-dark p-5 bg-white">
                <div className="font-display font-black text-3xl text-blue/10 leading-none mb-2">{step.num}</div>
                <div className="font-display font-bold text-[11px] uppercase tracking-wide text-dark mb-1.5">{step.title}</div>
                <div className="text-xs text-[#555] leading-[1.6]">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-blue mb-4 pb-2.5 border-b-2 border-blue">Process Artifacts</div>
          
          {project.media ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              {project.media.map((item: any, i: number) => (
                <div key={i} id={item.src.split('/').pop()} className={`bg-[#e8e4de] border-2 border-dashed border-[#bbb] flex flex-col items-center justify-center text-[#999] text-xs text-center relative overflow-hidden ${item.fullWidth ? 'sm:col-span-2' : 'aspect-[4/3]'}`}>
                  {item.type === 'video' ? (
                    <video 
                      src={item.src} 
                      controls 
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.caption || ''} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 flex items-center justify-center gap-2">
                      <span className="font-semibold text-[11px] uppercase tracking-widest">{item.caption}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              <div className="aspect-[4/3] bg-[#e8e4de] border-2 border-dashed border-[#bbb] flex flex-col items-center justify-center gap-2 text-[#999] text-xs text-center p-4 relative overflow-hidden">
                <div className="font-semibold text-[11px] uppercase tracking-widest">Early Sketches</div>
              </div>
              <div className="aspect-[4/3] bg-[#e8e4de] border-2 border-dashed border-[#bbb] flex flex-col items-center justify-center gap-2 text-[#999] text-xs text-center p-4 relative overflow-hidden">
                <div className="font-semibold text-[11px] uppercase tracking-widest">Workflow Mapping</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t-3 border-blue pt-7 px-7 bg-cream">
        <p className="text-[10px] tracking-[0.14em] uppercase text-muted mb-4 font-semibold">More sponsored projects</p>
        <div className="overflow-x-auto thin-scrollbar">
          <div className="flex gap-3 w-max pb-5">
            {projects.map(p => (
              <Link 
                key={p.id} 
                to={`/project/${p.id}`}
                className={`w-[180px] shrink-0 border-2 border-dark bg-white transition-all duration-150 ${p.id === id ? 'opacity-40 cursor-default pointer-events-none' : 'cursor-pointer shadow-[3px_3px_0_var(--color-dark)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-dark)]'}`}
              >
                <div className={`h-20 flex items-center justify-center overflow-hidden ${p.bgClass} p-2`}>
                  {p.id === 'gravity' && <img src="/images/gravity/GravityDriveLogo.jpg" alt="Gravity Drive Logo" className="max-w-[80%] max-h-[80%] object-contain" />}
                  {p.id === 'apl' && <img src="/images/johns/JohnsHopkinsLogo.png" alt="Johns Hopkins APL Logo" className="max-w-[80%] max-h-[80%] object-contain" />}
                  {p.id === 'our' && <img src="/images/purdueour/OURLogo.jpg" alt="Purdue OUR Logo" className="max-w-[80%] max-h-[80%] object-contain" />}
                  {p.id === 'donate' && <img src="/images/donate/DonateEquityLogo.png" alt="Donate Equity Logo" className="max-w-[80%] max-h-[80%] object-contain" />}
                  {p.id === 'pg' && <img src="/images/proctor/P&GLogo.png" alt="P&G Logo" className="max-w-[80%] max-h-[80%] object-contain" />}
                </div>
                <div className="p-2.5">
                  <div className="font-display font-bold text-[10px] leading-[1.3] text-dark mb-0.5">{p.title}</div>
                  <div className="text-[10px] text-muted">{p.semester}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

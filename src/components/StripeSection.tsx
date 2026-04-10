export function StripeSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(90deg, var(--color-green-stripe) 0px, var(--color-green-stripe) 36px, #fff 36px, #fff 72px)' }}></div>
      <div className="relative z-10 py-16 px-7 text-center">
        <a 
          href="mailto:dellingeravery@gmail.com" 
          className="inline-block font-display font-bold text-[clamp(20px,4.5vw,40px)] text-blue bg-[#dde8ff] py-5 px-10 border-3 border-dark no-underline shadow-[5px_5px_0_var(--color-dark)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_var(--color-dark)]"
        >
          Let's work together
        </a>
      </div>
    </div>
  );
}

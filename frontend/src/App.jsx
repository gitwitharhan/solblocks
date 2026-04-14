import React from 'react';
import bg from './assets/bg.png';
import frame from './assets/Frame 1.png';
import jigsaw from './assets/jigsaw.png';
import arrow from './assets/arrow.png';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0F141E] text-white overflow-x-hidden font-sans pb-16">
      <div
        className="absolute inset-0 bg-cover bg-top z-0 mix-blend-screen opacity-60"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F141E]/90 via-[#0F141E]/70 to-[#0F141E] z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col pt-6">

        <nav className="flex items-center justify-between px-6 md:px-12 w-full pt-4">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <mask id="e-cutout">
                  <rect width="30" height="30" fill="white" />
                  <rect x="13" y="8" width="20" height="4.5" fill="black" />
                  <rect x="13" y="17.5" width="20" height="4.5" fill="black" />
                </mask>
                <circle cx="15" cy="15" r="14" fill="#FF8C22" mask="url(#e-cutout)" />
              </svg>
              <span className="text-[1.4rem] font-[800] tracking-tight text-white mb-0.5">Stake</span>
            </div>
            <div className="hidden lg:flex gap-8 text-[15px] text-[#D1D5DB] font-medium tracking-wide">
              <a href="#" className="hover:text-white transition">Properties</a>
              <a href="#" className="hover:text-white transition">Digital Assets</a>
              <a href="#" className="hover:text-white transition">Stake & Earn</a>
            </div>
          </div>
          <div className="flex items-center gap-8 text-[15px] font-bold">
            <a href="#" className="hover:text-white text-white/90 transition tracking-wide">Login</a>
            <a href="#" className="bg-[#FF8C22] hover:bg-[#F58017] transition-colors px-6 py-2.5 rounded-full text-white shadow-lg shadow-orange-500/20 tracking-wide">Sign Up</a>
          </div>
        </nav>

        <main className="flex-1 flex flex-col items-center mt-24 px-4 w-full animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-[5rem] font-[800] leading-[1.05] mb-6 tracking-[-0.03em] text-white">
              Discover <span className="text-[#FF8C22]">high-growth</span><br />
              property investments
            </h1>
            <p className="text-[#D1D5DB] text-[1.1rem] mb-10 max-w-[650px] mx-auto leading-relaxed tracking-wide font-medium">
              Join the CEG Equity Token batch. Start building your portfolio with<br className="hidden md:block" /> fractional ownership of global assets.
            </p>
            <button className="bg-[#FF8C22] hover:bg-[#F58017] transition-transform duration-300 ease-out transform hover:-translate-y-0.5 hover:scale-[1.02] px-10 py-3.5 rounded-[12px] text-white font-[700] text-[1rem] flex items-center justify-center gap-2 mx-auto shadow-[0_25px_60px_rgba(255,140,34,0.22)]">
              Start Earning Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-16 w-full flex flex-col items-center relative px-4 text-left max-w-[1250px] mx-auto">
            <div className="relative w-full rounded-[36px] border border-white/10 bg-[#0C1526]/95 p-6 md:p-8 shadow-[0_45px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,140,34,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_22%)]"></div>
              <div className="relative flex flex-col xl:flex-row items-center gap-10">
                <div className="relative w-full xl:w-[55%] flex justify-center xl:justify-end">
                  <div className="relative w-full max-w-[720px] rounded-[32px] overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out hover:scale-[1.01]">
                    <img src={frame} alt="Property Puzzle Base" className="w-full h-auto object-cover" />
                    <img src={jigsaw} alt="Individual Puzzle Piece" className="absolute z-30 w-[30%] bottom-[12%] right-[22%] -rotate-[12deg] transition-transform duration-700 ease-out hover:-translate-y-1 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]" />
                    <img src={arrow} alt="Arrow pointer" className="absolute -right-[18%] md:-right-[14%] bottom-[16%] w-[48%] md:w-[42%] z-20 transition-transform duration-700 ease-out hover:-translate-x-2" />
                  </div>
                </div>

                <div className="w-full xl:w-[45%] flex flex-col items-start relative mt-10 xl:mt-0 xl:pl-10">
                  <h2 className="text-[3rem] md:text-[3.8rem] font-[800] leading-[1.05] tracking-tight mb-6 text-white">
                    Access<br />
                    premium<br />
                    property<br />
                    ownership<br />
                    <span className="text-[#FF8C22]">for $150</span>
                  </h2>
                  <p className="text-[#D1D5DB] leading-relaxed tracking-wide font-medium text-[1rem] max-w-[520px]">
                    Build your portfolio with fractional ownership in premium assets and earn while the market grows.
                  </p>

                  <div className="mt-8 inline-flex flex-col gap-3 rounded-[24px] border border-white/10 bg-[#131A2C]/90 px-6 py-5 shadow-[0_35px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:shadow-[0_45px_80px_rgba(255,140,34,0.18)] hover:-translate-y-0.5">
                    <div className="flex items-center gap-2.5 text-[#D1D5DB] text-[15px] font-medium tracking-wide">
                      <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="e-cutout-tiny">
                          <rect width="30" height="30" fill="white" />
                          <rect x="13" y="8" width="20" height="4.5" fill="black" />
                          <rect x="13" y="17.5" width="20" height="4.5" fill="black" />
                        </mask>
                        <circle cx="15" cy="15" r="14" fill="#FF8C22" mask="url(#e-cutout-tiny)" />
                      </svg>
                      All Time Returns
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[2rem] font-[800] tracking-tight text-white leading-none">AED 165,000</span>
                      <span className="text-[#4ADE80] text-[15px] font-[800] bg-[#4ADE80]/[0.15] px-3 py-1 rounded-full leading-none">+111%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 w-full rounded-[32px] border border-white/10 bg-[#111827]/95 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
                  <h3 className="text-[#FF8C22] font-[800] text-[1.25rem] tracking-tight">Price Progression (200 Tokens)</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white text-[#192233] px-3.5 py-1.5 rounded-full text-[0.75rem] font-[800] tracking-wide">SOLD OUT 1-3</div>
                    <div className="bg-[#0f172a] text-[#4ADE80] border border-[#4ADE80]/20 px-3.5 py-1.5 rounded-full text-[0.75rem] font-[800] tracking-wide">ACTIVE 4</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                  {[
                    { batch: 1, price: '$4,000', state: 'sold' },
                    { batch: 2, price: '$4,250', state: 'sold' },
                    { batch: 3, price: '$4,500', state: 'sold' },
                    { batch: 4, price: '$4,750', state: 'active' },
                    { batch: 5, price: '$5,000', state: 'upcoming' },
                    { batch: 6, price: '$5,250', state: 'upcoming' },
                  ].map((item) => (
                    <div
                      key={item.batch}
                      className={`rounded-[22px] p-5 min-h-[114px] flex flex-col justify-between transition-all duration-300 ease-out ${item.state === 'active'
                        ? 'bg-[#1F2B43] border border-[#FF8C22] shadow-[0_0_30px_rgba(255,140,34,0.15)] hover:-translate-y-1'
                        : 'bg-[#101824] border border-[#1F2435] hover:bg-[#121c30] hover:-translate-y-1'}`
                      }
                    >
                      <span className={`text-[12px] font-[800] tracking-[0.18em] uppercase ${item.state === 'active' ? 'text-[#FF8C22]' : 'text-[#8C94A3]'}`}>
                        Batch {item.batch}
                      </span>
                      <span className={`text-[1.35rem] font-[800] tracking-tight ${item.state === 'active' ? 'text-[#FF8C22]' : 'text-white'}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

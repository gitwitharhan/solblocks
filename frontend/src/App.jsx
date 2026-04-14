import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0F141E] text-white overflow-x-hidden font-sans pb-16">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-top z-0 mix-blend-screen opacity-50"
        style={{ backgroundImage: "url('/assets/bg.png')" }}
      ></div>
      
      {/* Dark gradient overlay to make text pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F141E]/80 via-[#0F141E]/60 to-[#0F141E] z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col pt-6">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 md:px-12 w-full pt-4">
          <div className="flex items-center gap-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* Stake Logo Icon SVG accurate to screenshot */}
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <mask id="e-cutout">
                  <rect width="30" height="30" fill="white" />
                  <rect x="13" y="8" width="20" height="4.5" fill="black" />
                  <rect x="13" y="17.5" width="20" height="4.5" fill="black" />
                </mask>
                <circle cx="15" cy="15" r="14" fill="#FF8C22" mask="url(#e-cutout)"/>
              </svg>
              <span className="text-[1.4rem] font-[800] tracking-tight text-white mb-0.5">Stake</span>
            </div>
            {/* Nav links */}
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

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center mt-24 px-4 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-[5rem] font-[800] leading-[1.05] mb-6 tracking-[-0.03em] text-white">
              Discover <span className="text-[#FF8C22]">high-growth</span><br/>
              property investments
            </h1>
            <p className="text-[#D1D5DB] text-[1.1rem] mb-10 max-w-[650px] mx-auto leading-relaxed tracking-wide font-medium">
              Join the CEG Equity Token batch. Start building your portfolio with<br className="hidden md:block"/> fractional ownership of global assets.
            </p>
            <button className="bg-[#FF8C22] hover:bg-[#F58017] transition-colors px-10 py-3.5 rounded-[12px] text-white font-[700] text-[1rem] flex items-center justify-center gap-2 mx-auto">
              Start Earning Now 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Puzzle Image Section */}
          <div className="mt-16 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 relative px-4 text-left max-w-[1250px] mx-auto min-h-[500px]">
             
             {/* Left Jigsaw Image Container */}
             <div className="relative w-full lg:w-[55%] flex justify-end">
                <div className="relative inline-block w-full max-w-[700px]">
                    <img 
                      src="/assets/Frame 1.png" 
                      alt="Property Puzzle Base" 
                      className="w-full h-auto object-contain z-10" 
                    />
                    <img 
                      src="/assets/jigsaw.png" 
                      alt="Individual Puzzle Piece" 
                      className="absolute z-30 w-[30%] bottom-[12%] right-[24%] -rotate-[12deg] drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" 
                    />
                    {/* Arrow overlapping right edge */}
                    <img 
                      src="/assets/arrow.png" 
                      alt="Arrow pointer" 
                      className="absolute -right-[22%] md:-right-[18%] bottom-[18%] w-[45%] md:w-[40%] z-20" 
                    />
                </div>
             </div>
             
             {/* Right Value Proposition */}
             <div className="w-full lg:w-[45%] flex flex-col items-start relative mt-16 lg:mt-0 lg:pl-12">
                
                <h2 className="text-[3rem] md:text-[3.8rem] font-[800] leading-[1.05] tracking-tight mb-8 text-white">
                  Access <br/>
                  premium <br/>
                  property <br/>
                  ownership <br/>
                  <span className="text-[#FF8C22]">for $150</span>
                </h2>
                
                {/* Returns Floating Badge */}
                <div className="bg-[#1A2130] border border-[#2D364A] rounded-[16px] px-6 py-5 inline-flex flex-col gap-1.5 shadow-2xl relative z-10 w-fit">
                  <div className="flex items-center gap-2.5 text-[#D1D5DB] text-[15px] font-medium tracking-wide">
                     <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="e-cutout-tiny">
                          <rect width="30" height="30" fill="white" />
                          <rect x="13" y="8" width="20" height="4.5" fill="black" />
                          <rect x="13" y="17.5" width="20" height="4.5" fill="black" />
                        </mask>
                        <circle cx="15" cy="15" r="14" fill="#FF8C22" mask="url(#e-cutout-tiny)"/>
                     </svg>
                     All Time Returns
                  </div>
                  <div className="flex items-center gap-4 mt-0.5">
                    <span className="text-[2rem] font-[800] tracking-tight text-white leading-none">AED 165,000</span>
                    <span className="text-[#4ADE80] text-[15px] font-[800] bg-[#4ADE80]/[0.15] px-2 py-0.5 rounded leading-none relative -top-0.5">+111%</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Bottom Tokens Section */}
           <div className="mt-12 w-full px-4 text-left max-w-[1250px] mx-auto pb-8">
             <div className="bg-[#181d29]/90 border border-[#272E3F] rounded-[24px] p-8 md:p-10 shadow-2xl backdrop-blur-md">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                   <h3 className="text-[#FF8C22] font-[800] text-[1.3rem] tracking-tight">Price Progression (200 Tokens)</h3>
                   <div className="flex gap-3 text-[12px] font-[800] tracking-wide uppercase">
                     <div className="bg-white text-[#192233] px-3.5 py-1.5 rounded shadow border border-gray-200">SOLD OUT 1-3</div>
                     <div className="bg-white text-[#4ADE80] px-3.5 py-1.5 rounded shadow border border-gray-200">ACTIVE 4</div>
                   </div>
                </div>

                {/* Tokens Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 w-full">
                  
                  {[
                    {batch: 1, price: "$4,000", state: "sold"},
                    {batch: 2, price: "$4,250", state: "sold"},
                    {batch: 3, price: "$4,500", state: "sold"},
                    {batch: 4, price: "$4,750", state: "active"},
                    {batch: 5, price: "$5,000", state: "upcoming"},
                    {batch: 6, price: "$5,250", state: "upcoming"},
                  ].map((item) => (
                    <div 
                      key={item.batch} 
                      className={`rounded-[14px] p-5 flex flex-col justify-center h-[100px] items-start transition-all
                        ${item.state === 'active' 
                            ? 'bg-[#1D2533] border border-[#FF8C22] shadow-[0_0_15px_rgba(255,140,34,0.15)] ring-1 ring-[#FF8C22]' 
                            : 'bg-[#151A24] border border-[#232B3B]'}
                      `}
                    >                      
                      <span className={`text-[12px] font-bold tracking-wide mb-0.5 ${item.state === 'active' ? 'text-[#FF8C22]' : 'text-[#8C94A3]'}`}>
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

        </main>
      </div>
    </div>
  );
}

export default App;

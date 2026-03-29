
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Network, Activity, ShieldAlert, ChevronRight, Zap, Target } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0A1628] font-sans text-white selection:bg-[#14B8A6] selection:text-[#0A1628]">
      {/* Background Noise overlay for the whole page */}
      <div className="noise-bg mix-blend-overlay fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Background Orbs for Depth */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-[#0F766E] opacity-20 blur-[120px] mix-blend-screen z-0 animate-pulse transition-all duration-1000"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-[#0369A1] opacity-20 blur-[150px] mix-blend-screen z-0 transition-all duration-1000"></div>

      <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-50">
        <div className="font-mono text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <Activity size={24} className="text-[#14B8A6]" />
          <span>GetMy<span className="text-[#14B8A6]">Market</span></span>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="glass-card px-6 py-2 rounded-lg font-mono text-sm font-semibold tracking-wide text-white flex items-center gap-2 hover:bg-[#14B8A6]/10"
        >
          ENTER TERMINAL <ChevronRight size={16} />
        </button>
      </nav>

      {/* Massive Typographic Hero */}
      <main className="relative pt-32 pb-20 px-8 lg:px-24 h-screen flex flex-col justify-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20"
        >
          <h1 className="text-[clamp(4rem,10vw,12rem)] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/10 uppercase mb-6 mix-blend-plus-lighter relative">
            Agentic
            <br />
            Intelligence
            <span className="absolute -bottom-4 left-2 w-32 h-2 bg-[#14B8A6] skew-x-12"></span>
          </h1>
        </motion.div>

        {/* Floating Data Panels (Z-Axis Depth) */}
        <div className="absolute right-[5%] top-[20%] w-full max-w-md pointer-events-none hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl backdrop-blur-3xl transform translate-x-12 -translate-y-8"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-[#14B8A6] border border-[#14B8A6]/30 px-2 py-1 rounded">LIVE SIGNAL FEED</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-3 text-white/80">
                <Zap size={14} className="text-yellow-400" /> [10:42 AM] Parsing Q3 Earnings... 94% Bullish
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <ShieldAlert size={14} /> [10:41 AM] Regulatory Filing 8-K Detected
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Network size={14} className="text-blue-400" /> [10:39 AM] Social Sentiments matching target
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mt-8 relative z-30"
        >
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-10 border-l-2 border-[#0F766E] pl-6">
            Autonomous ingestion of earnings transcripts, filings, and news. Let the LLM surface why the market moves.
          </p>
          <div className="flex flex-wrap gap-4">
             <button 
                onClick={() => navigate('/dashboard')}
                className="bg-[#0369A1] hover:bg-[#0EA5E9] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_#0369A1] hover:shadow-[0_0_60px_-10px_#0EA5E9] flex items-center gap-3"
              >
                Access Risk Dashboard
                <Target size={20} />
             </button>
             <button className="glass-card px-8 py-4 rounded-xl text-white font-semibold transition-all">
                Read the Docs
             </button>
          </div>
        </motion.div>
      </main>

      {/* Feature fragments (scrolling down to Features) */}
      <div className="relative w-full px-8 lg:px-24 pb-32 z-10">
        <div className="flex flex-col gap-24">
          {/* Feature 1: Asymmetric split */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-[#14B8A6] text-xs font-bold tracking-widest bg-[#14B8A6]/10 px-3 py-1 rounded inline-block mb-4">01 / AUTONOMOUS SCRAPING</span>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">Uncover sentiment before the street.</h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Constantly scanning earnings transcripts, Form 8-K filings, and breaking news. We extract and parse unstructured text instantly so you never miss a critical swing in sentiment.
              </p>
            </div>
            <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-[#14B8A6]/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-mono text-sm text-white/50 space-y-4">
                <div className="flex items-center gap-3"><Zap size={16} className="text-[#14B8A6]" /> <span className="text-white">Processing</span> transcription_HDFC_Q3.pdf</div>
                <div className="pl-7 text-[#14B8A6]"><span className="animate-pulse">_</span> Extracting forward-looking statements</div>
                <div className="pl-7 text-white/80">"Margin expansion expected by 12bps..."</div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10"><Target size={16} className="text-yellow-400" /> Sentiment scored: <span className="text-green-400 font-bold">94% POSITIVE</span></div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Asymmetric reversed */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-[#0369A1]/20 relative overflow-hidden order-2 lg:order-1 group">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0369A1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold">RELIANCE</span>
                    <span className="text-red-400 font-mono">-1.8%</span>
                  </div>
                  <div className="bg-red-400/20 text-red-100 text-xs px-2 py-1 rounded inline-block">High Risk Detected</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 transform translate-x-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono font-bold">TCS</span>
                    <span className="text-green-400 font-mono">+3.2%</span>
                  </div>
                  <div className="bg-green-400/20 text-green-100 text-xs px-2 py-1 rounded inline-block">Bullish Momentum</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
              <span className="font-mono text-[#0369A1] text-xs font-bold tracking-widest bg-[#0369A1]/10 px-3 py-1 rounded inline-block mb-4">02 / RISK SCORING</span>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">Causal explanation vectors.</h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Don't just see the red or green numbers. The LLM connects price movement to exact source sentences, generating a confidence score so you understand the "why" behind every tick.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Full width brutalist typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 lg:p-20 rounded-3xl border-t-4 border-[#14B8A6] flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F766E]/20 via-transparent to-transparent opacity-50"></div>
            <span className="font-mono text-white/50 text-xs tracking-widest mb-8 uppercase relative z-10">03 / Conversational interface</span>
            <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter relative z-10">Query the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0369A1]">Agent</span> in plain English.</h2>
            <div className="w-full max-w-2xl bg-[#0A1628] border border-white/10 rounded-2xl p-4 flex items-center gap-4 relative z-10 shadow-2xl">
              <span className="text-[#14B8A6] pl-2 font-mono">{">"}</span>
              <input 
                type="text" 
                disabled 
                value="Why is INFOSYS dropping right now?" 
                className="bg-transparent border-none text-white w-full font-mono text-sm focus:outline-none" 
              />
              <button className="bg-[#14B8A6] text-[#0A1628] px-4 py-2 rounded-lg font-bold">SEND</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Deep Footer / CTA */}
      <footer className="relative bg-[#0A1628] border-t border-white/5 pt-24 pb-12 z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#14B8A6]/50 to-transparent"></div>
        <div className="px-8 lg:px-24 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Ready to outpace the market?</h2>
          <button 
             onClick={() => navigate('/dashboard')}
             className="bg-white hover:bg-gray-100 text-[#0A1628] px-10 py-5 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] flex items-center gap-3 group"
           >
             Launch Live Terminal
             <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-24 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-white/40">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-[#14B8A6]" />
              <span>© 2026 GetMyMarket. All rights reserved.</span>
            </div>
            <div className="flex gap-6 uppercase tracking-widest">
              <span className="hover:text-[#14B8A6] cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-[#14B8A6] cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-[#14B8A6] cursor-pointer transition-colors">Twitter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

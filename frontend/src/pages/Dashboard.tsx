import React, { useState, useEffect, useRef } from "react";
import { Terminal, Activity, ChevronRight, Target, TrendingUp, BarChart2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, Cell,
  ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip 
} from "recharts";

// --- EXPANDED FAKE DATA ---

const MOCK_TICKERS = [
  { symbol: "HDFCBANK", price: 1450.2, change: "+2.4%", status: "BULLISH", risk: 24, glow: "text-emerald-500" },
  { symbol: "RELIANCE", price: 2945.1, change: "-1.2%", status: "BEARISH", risk: 68, glow: "text-rose-500" },
  { symbol: "TCS", price: 3890.5, change: "+0.8%", status: "NEUTRAL", risk: 35, glow: "text-amber-500" },
  { symbol: "INFY", price: 1520.0, change: "+4.1%", status: "ANOMALY", risk: 92, glow: "text-emerald-500" },
  { symbol: "ICICIBANK", price: 1045.8, change: "+1.1%", status: "BULLISH", risk: 30, glow: "text-emerald-500" },
  { symbol: "ZOMATO", price: 156.4, change: "-3.4%", status: "BEARISH", risk: 85, glow: "text-rose-500" },
  { symbol: "SBIN", price: 742.1, change: "+0.2%", status: "NEUTRAL", risk: 40, glow: "text-amber-500" },
  { symbol: "ITC", price: 412.3, change: "-0.5%", status: "NEUTRAL", risk: 15, glow: "text-amber-500" },
  { symbol: "TATAMOTORS", price: 921.0, change: "+1.8%", status: "BULLISH", risk: 55, glow: "text-emerald-500" }
];

const MOCK_EVENTS = [
  { time: "14:23:01", pair: "INFY", event: "Q3 call: 'Margin expansion beyond guidance'.", type: "SENTIMENT_SPIKE" },
  { time: "14:21:45", pair: "RELIANCE", event: "Unusual options activity detected in 3000CE.", type: "VOLUME_ANOMALY" },
  { time: "14:18:12", pair: "HDFCBANK", event: "News engine: RBI rate pause priced in.", type: "MACRO_EVENT" },
  { time: "14:10:05", pair: "ZOMATO", event: "Social media sentiment shifted strongly negative.", type: "SOCIAL_SENTIMENT" },
  { time: "14:05:33", pair: "ICICIBANK", event: "FII block deal executed. 2.4M shares.", type: "FLOW_DETECTED" },
  { time: "13:59:12", pair: "SBIN", event: "Retail credit growth slowing per internal circular leak.", type: "NEWS_SCRAPE" },
  { time: "13:45:00", pair: "TCS", event: "US deal wins mentioned in analyst note. Confidence: 88%.", type: "ANALYST_UPGRADE" },
  { time: "13:30:10", pair: "TATAMOTORS", event: "EV Sales reported up 45% YoY in preliminary data.", type: "SUPPLY_CHAIN" }
];

// Combine price and sentiment for dual-axis chart
const MOCK_MAIN_CHART = Array.from({ length: 48 }).map((_, i) => ({
  time: `10:${i.toString().padStart(2, '0')}`,
  price: 1400 + Math.sin(i / 5) * 50 + (Math.random() * 20),
  sentiment: 50 + Math.cos(i / 4) * 30 + (Math.random() * 10)
}));

const MOCK_SECTOR_DATA = [
  { name: "IT", value: 85 },
  { name: "FIN", value: 65 },
  { name: "AUTO", value: 30 },
  { name: "FMCG", value: -10 },
  { name: "PHARMA", value: -25 },
  { name: "METAL", value: 45 },
];

const MOCK_ANOMALY_DATA = Array.from({ length: 30 }).map((_, i) => ({
  time: i,
  variance: Math.random() > 0.8 ? 50 + Math.random() * 50 : Math.random() * 20
}));

// --- TOOLTIP STYLES ---
const customTooltipStyle = {
  backgroundColor: '#000',
  border: '1px solid rgba(16, 185, 129, 0.4)',
  color: '#34d399',
  fontFamily: 'monospace',
  fontSize: '12px'
};

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [chatLog, setChatLog] = useState<{ role: "user" | "agent", content: string, sources?: string[] }[]>([
    { role: "agent", content: "SYSTEM_INIT: GetMyMarket Agentic Core v2.4. Awaiting plain-English query or command." }
  ]);

  const endOfChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query.trim();
    setQuery("");
    setChatLog(prev => [...prev, { role: "user", content: userText }]);

    // Simulate Agentic Inference
    setTimeout(() => {
      let response = "Analyzing data streams...";
      let sources: string[] = [];

      if (userText.toLowerCase().includes("hdfc")) {
        response = `[INFERENCE COMPLETE]\nHDFC Bank shows strong buying signals this week. Analysis of recent earnings call transcripts indicates NIM (Net Interest Margin) expansion of +12bps. Algorithmic detection shows localized institutional accumulation.`;
        sources = ["Source: HDFCBANK_Q3_Call_Transcript", "Source: NSE_Block_Deal_Feed"];
      } else {
        response = `[INFERENCE COMPLETE]\nCross-referencing real-time SEC/NSE filings and global macro news. Signal extraction indicates a neutral stance. Confidence rating: 42%. Need more specific constraints (e.g., 'Is Reliance dropping due to telecom margins?').`;
        sources = ["Source: Base_Parameter_Weights"];
      }

      setChatLog(prev => [...prev, { role: "agent", content: response, sources }]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-emerald-500 font-mono flex flex-col selection:bg-emerald-500 selection:text-black overflow-hidden relative border-8 border-black">
      
      {/* SCANLINE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      {/* HEADER */}
      <header className="border-b border-emerald-900/50 p-4 flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-emerald-400 flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            SYS.GET_MY_MARKET
          </h1>
          <div className="text-xs text-emerald-700 mt-1 uppercase">Agentic Financial Intelligence System // LIVE</div>
        </div>
        <div className="text-right text-xs text-emerald-600">
          <div>NODE: gmm-core-01</div>
          <div className="flex items-center gap-2 justify-end mt-1">
            <span className="w-2 h-2 bg-emerald-500 animate-pulse border border-emerald-300"></span>
            LATENCY: 14ms
          </div>
        </div>
      </header>

      {/* MAIN GRID */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-4 grid-rows-[auto] lg:grid-rows-6 gap-4 p-4 min-h-0">
        
        {/* COL 1, ROW 1-4: WATCHLIST */}
        <div className="lg:col-span-1 lg:row-span-4 border border-emerald-900/40 bg-black/50 p-4 flex flex-col relative group">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500"></div>
          
          <h2 className="text-xs border-b border-emerald-900/40 pb-2 mb-4 uppercase tracking-widest text-emerald-700 font-bold flex items-center gap-2">
            <Target className="w-4 h-4" /> Watchlist & Risk
          </h2>
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {MOCK_TICKERS.map((s, idx) => (
              <div key={idx} className="border border-emerald-900/30 p-2 hover:bg-emerald-950/40 transition-colors cursor-pointer group-hover:border-emerald-700/50">
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${s.glow}`}>{s.symbol}</span>
                  <span className={s.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>{s.price}</span>
                </div>
                <div className="flex justify-between text-[10px] items-center">
                  <span className="text-emerald-700">SIG: {s.status}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-800">RSK</span>
                    <div className="w-16 h-1 bg-gray-900 overflow-hidden">
                      <div className={`h-full ${s.risk > 70 ? 'bg-rose-500' : s.risk > 40 ? 'bg-amber-400' : 'bg-emerald-500'}`} style={{ width: `${s.risk}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COL 2-3, ROW 1-3: MAIN MARKET CHART (Price vs Sentiment) */}
        <div className="lg:col-span-2 lg:row-span-3 border border-emerald-900/40 bg-black/50 p-4 flex flex-col relative relative">
          <div className="flex justify-between items-center border-b border-emerald-900/40 pb-2 mb-2">
            <h2 className="text-xs uppercase tracking-widest flex items-center gap-2 text-emerald-500 font-bold">
              <TrendingUp className="w-4 h-4" /> HDFCBANK: Price & Sentiment Overlay
            </h2>
            <div className="flex gap-2">
              <span className="text-[10px] bg-emerald-900/30 text-emerald-400 px-2 py-0.5 border border-emerald-800/50">1D</span>
              <span className="text-[10px] text-emerald-700 px-2 py-0.5 border border-transparent hover:border-emerald-800/50 cursor-pointer">1W</span>
              <span className="text-[10px] text-emerald-700 px-2 py-0.5 border border-transparent hover:border-emerald-800/50 cursor-pointer">1M</span>
            </div>
          </div>
          <div className="flex-1 w-full h-full min-h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_MAIN_CHART} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#064e3b" vertical={false} />
                <XAxis dataKey="time" stroke="#064e3b" tick={{ fill: '#047857', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" stroke="#064e3b" tick={{ fill: '#047857', fontSize: 10 }} axisLine={false} tickLine={false} domain={['dataMin - 10', 'dataMax + 10']} />
                <YAxis yAxisId="right" orientation="right" stroke="#064e3b" tick={{ fill: '#047857', fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 100]} hide />
                <Tooltip contentStyle={customTooltipStyle} itemStyle={{ color: '#10b981' }} />
                <Area yAxisId="left" type="monotone" dataKey="price" stroke="#10b981" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
                <Line yAxisId="right" type="step" dataKey="sentiment" stroke="#f59e0b" strokeWidth={1} dot={false} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* COL 4, ROW 1-3: LIVE REASONING EVENTS */}
        <div className="lg:col-span-1 lg:row-span-3 border border-emerald-900/40 bg-black/50 p-4 flex flex-col relative">
          <div className="absolute -left-[1px] top-10 w-[2px] h-12 bg-amber-500"></div>
          <h2 className="text-xs border-b border-emerald-900/40 pb-2 mb-4 uppercase tracking-widest flex items-center gap-2 text-amber-500/80 font-bold">
            <Activity className="w-4 h-4" /> Live Reasoning Stream
          </h2>
          <div className="flex-1 space-y-3 overflow-y-auto text-[11px] pr-2 custom-scrollbar">
            {MOCK_EVENTS.map((ev, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.15 }}
                key={i} 
                className="pl-2 border-l border-emerald-900/40 py-1 hover:bg-emerald-950/20 hover:border-amber-500/50 transition-colors"
              >
                <div className="flex justify-between text-emerald-700 mb-1">
                  <span>{ev.time}</span>
                  <span className="text-[9px] border border-emerald-900/50 px-1 bg-black">{ev.type}</span>
                </div>
                <div className="text-emerald-400 font-bold">{ev.pair}</div>
                <div className="text-emerald-600 mt-0.5 leading-relaxed">{ev.event}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COL 1, ROW 5-6: SECTOR HEATMAP */}
        <div className="lg:col-span-1 lg:row-span-2 border border-emerald-900/40 bg-black/50 p-4 flex flex-col">
          <h2 className="text-xs border-b border-emerald-900/40 pb-2 mb-2 uppercase tracking-widest text-emerald-700 font-bold flex items-center gap-2">
            <BarChart2 className="w-4 h-4" /> Sector Momentum
          </h2>
          <div className="flex-1 w-full h-full min-h-[100px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={MOCK_SECTOR_DATA} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis type="number" hide domain={[-50, 100]} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#047857', fontSize: 10 }} />
                <Tooltip cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }} contentStyle={customTooltipStyle} />
                <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                  {MOCK_SECTOR_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#10b981' : '#f43f5e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* COL 2-3, ROW 4-6: CONVERSATIONAL INTERFACE */}
        <div className="lg:col-span-2 lg:row-span-3 border border-emerald-900/40 bg-black/50 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1 px-2 bg-emerald-900/20 text-[10px] text-emerald-500 border-l border-b border-emerald-900/40 flex items-center gap-1">
            <Zap className="w-3 h-3" /> LANGGRAPH ON
          </div>
          <div className="p-3 border-b border-emerald-900/40 text-xs text-emerald-700 uppercase tracking-widest font-bold">
            Interactive AI Console
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {chatLog.map((log, idx) => (
              <div key={idx} className={`flex flex-col max-w-[90%] ${log.role === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}>
                <div className="text-[9px] text-emerald-800 mb-1 uppercase tracking-wider">
                  {log.role === "user" ? 'USER_INPUT' : 'SYSTEM_LOG'}
                </div>
                <div className={`p-3 text-sm leading-relaxed border ${log.role === "user" ? "border-emerald-800/40 bg-emerald-950/20 text-emerald-300" : "border-emerald-500/30 bg-black text-emerald-400"}`}>
                  {log.content}
                </div>
                {log.sources && log.sources.length > 0 && (
                  <div className="flex flex-col gap-1 mt-1.5 text-[10px] text-emerald-600">
                    {log.sources.map((s, i) => (
                      <div key={i} className="flex gap-1 items-center before:content-['>'] before:text-emerald-800">{s}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endOfChatRef} />
          </div>
        </div>

        {/* COL 4, ROW 4-6: ANOMALY SPIKES */}
        <div className="lg:col-span-1 lg:row-span-3 border border-emerald-900/40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjU1LCA2NSwgMC4wNSkiLz48L3N2Zz4=')] p-4 flex flex-col relative grid-pattern">
          <div className="flex justify-between items-start mb-2 border-b border-emerald-900/40 pb-2">
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-bold">Signal Variance</div>
            <div className="text-[9px] text-rose-500 animate-pulse border border-rose-900/50 bg-rose-950/20 px-1 py-0.5">HIGH_NOISE</div>
          </div>
          <div className="flex-1 w-full h-full min-h-[120px] -ml-4 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_ANOMALY_DATA}>
                <CartesianGrid strokeDasharray="2 2" stroke="#064e3b" vertical={false} />
                <Line type="stepBefore" dataKey="variance" stroke="#ef4444" strokeWidth={1.5} dot={<g/>} isAnimationActive={true} />
                <YAxis domain={[0, 100]} hide />
                <Tooltip contentStyle={{ ...customTooltipStyle, borderColor: 'rgba(244, 63, 94, 0.4)', color: '#f43f5e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </main>

      {/* FIXED COMMAND LINE INPUT */}
      <div className="border-t border-emerald-900/50 p-4 bg-black z-10 w-full shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <form onSubmit={handleCommand} className="flex items-center w-full max-w-7xl mx-auto">
          <ChevronRight className="w-5 h-5 text-emerald-500 mr-2 animate-pulse" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="[AWAITING COMMAND] E.g., 'Analyze TATAMOTORS based on recent EV news'"
            className="flex-1 bg-transparent border-none outline-none text-emerald-400 placeholder:text-emerald-900/60 font-mono text-sm w-full"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit" disabled={!query.trim()} className="hidden">Submit</button>
        </form>
      </div>

    </div>
  );
}

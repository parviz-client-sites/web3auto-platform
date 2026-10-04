import { motion } from 'framer-motion';

const features = [
  {
    icon: "🤖",
    title: "AI Trading Bots",
    description: "Machine learning algorithms analyze market patterns 24/7 and execute trades with millisecond precision across DEXs",
    color: "from-cyan-500 to-blue-600",
    metrics: "Avg. ROI: 15-45% monthly"
  },
  {
    icon: "💰",
    title: "Yield Farming Optimizer",
    description: "Automatically rebalance positions across Aave, Compound, Curve to capture highest APY with minimal gas costs",
    color: "from-purple-500 to-pink-600",
    metrics: "Max APY: 120%+"
  },
  {
    icon: "🎨",
    title: "NFT Sniping Engine",
    description: "Monitor OpenSea, Blur, Magic Eden for underpriced NFTs. Auto-buy when conditions match your strategy",
    color: "from-orange-500 to-red-600",
    metrics: "Success rate: 78%"
  },
  {
    icon: "⚡",
    title: "MEV Protection Suite",
    description: "Private transaction routing through Flashbots Protect to prevent front-running and sandwich attacks",
    color: "from-green-500 to-emerald-600",
    metrics: "Saved users $2.1M"
  },
  {
    icon: "📊",
    title: "Multi-Chain Analytics",
    description: "Unified dashboard tracking all DeFi positions across 15+ chains with real-time P&L calculations",
    color: "from-indigo-500 to-purple-600",
    metrics: "Supports 15+ chains"
  },
  {
    icon: "🔐",
    title: "Military-Grade Security",
    description: "Hardware wallet integration, multi-sig support, encrypted key storage with HSM modules",
    color: "from-teal-500 to-cyan-600",
    metrics: "Zero breaches since launch"
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Enterprise-Grade Automation
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional tools designed for serious Web3 investors who want to maximize returns while minimizing risk
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Metrics Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-semibold">{feature.metrics}</span>
              </div>

              {/* Arrow Icon on Hover */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
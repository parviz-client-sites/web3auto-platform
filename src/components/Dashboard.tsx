import { useState } from 'react';
import { motion } from 'framer-motion';

const activeBots = [
  { id: 1, name: 'ETH Arbitrage Bot', status: 'running', profit: '+$234', uptime: '99.8%' },
  { id: 2, name: 'Polygon Yield Farmer', status: 'running', profit: '+$89', uptime: '99.9%' },
  { id: 3, name: 'NFT Sniper v2', status: 'paused', profit: '+$456', uptime: '98.5%' },
  { id: 4, name: 'MEV Protector', status: 'running', profit: 'Saved $67', uptime: '100%' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'bots', label: 'My Bots', icon: '🤖' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'transactions', label: 'Transactions', icon: '📝' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold text-white">
            W3
          </div>
          <span className="text-2xl font-bold text-white">Web3Auto</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-white border border-purple-500/30'
                  : 'text-gray-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-800">
          <div className="p-4 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl border border-purple-500/20">
            <div className="text-sm text-gray-400 mb-2">Current Plan</div>
            <div className="text-white font-bold mb-2">Professional</div>
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-gray-400">Welcome back! Here is your automation performance.</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                + New Bot
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Total Portfolio Value', value: '$47,832', change: '+12.5%', positive: true, icon: '💰' },
                { label: 'Active Bots', value: '7', change: '+2 this week', positive: true, icon: '🤖' },
                { label: 'Today Profit', value: '$342', change: '+8.3%', positive: true, icon: '📈' },
                { label: 'Gas Fees Saved', value: '$128', change: '-5% vs avg', positive: false, icon: '⛽' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`text-sm font-semibold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Active Bots Table */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Active Automation Bots</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm border-b border-slate-800">
                      <th className="pb-4 font-medium">Bot Name</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Profit/Loss</th>
                      <th className="pb-4 font-medium">Uptime</th>
                      <th className="pb-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {activeBots.map((bot) => (
                      <tr key={bot.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 text-white font-medium">{bot.name}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            bot.status === 'running' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {bot.status === 'running' ? '● Running' : '⏸ Paused'}
                          </span>
                        </td>
                        <td className="py-4 text-green-400 font-semibold">{bot.profit}</td>
                        <td className="py-4 text-gray-400">{bot.uptime}</td>
                        <td className="py-4">
                          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mr-4">Configure</button>
                          <button className="text-red-400 hover:text-red-300 text-sm font-medium">Stop</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
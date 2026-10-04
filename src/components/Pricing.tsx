import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for testing automation strategies",
    features: [
      "3 Active Trading Bots",
      "Basic Portfolio Analytics",
      "Email Support (48h response)",
      "Single Chain (Ethereum)",
      "$10K Monthly Trading Volume",
      "Standard MEV Protection",
      "Community Access"
    ],
    cta: "Start 14-Day Free Trial",
    popular: false,
    color: "border-slate-700"
  },
  {
    name: "Professional",
    price: 99,
    description: "For serious traders maximizing returns",
    features: [
      "Unlimited Trading Bots",
      "Advanced Analytics & Reports",
      "Priority Support (4h response)",
      "Multi-Chain (15+ Networks)",
      "$100K Monthly Trading Volume",
      "Premium MEV Protection",
      "API Access",
      "Custom Strategy Builder",
      "Tax Report Generation"
    ],
    cta: "Get Started Now",
    popular: true,
    color: "border-purple-500"
  },
  {
    name: "Enterprise",
    price: null,
    description: "White-label solution for institutions",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Bot Development",
      "White-Label Dashboard",
      "Unlimited Trading Volume",
      "SLA Guarantee (99.99%)",
      "On-Premise Deployment Option",
      "Compliance Reporting",
      "Custom Integrations"
    ],
    cta: "Contact Sales Team",
    popular: false,
    color: "border-slate-700"
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose the plan that matches your automation goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border-2 ${plan.color} ${
                plan.popular ? 'scale-105 shadow-2xl shadow-purple-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.price ? (
                  <>
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </>
                ) : (
                  <span className="text-5xl font-bold text-white">Custom</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {plan.cta}
              </button>

              {plan.price && (
                <p className="text-center text-gray-500 text-xs mt-4">
                  or ${(plan.price * 10).toLocaleString()} yearly (save 2 months)
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 px-8 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#1a1c29] mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col hover:border-purple-200 transition-colors shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-500 text-sm mb-8">Perfect for getting started</p>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-gray-900">$0</span>
            <span className="text-gray-500 font-medium">/Month</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <Check size={18} className="text-green-500" /> {feature}
              </div>
            ))}
          </div>
          <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 rounded-xl transition-colors">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="bg-purple-600 rounded-[2rem] p-10 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full border border-yellow-200">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <p className="text-purple-200 text-sm mb-8">Best for professionals</p>
          <div className="mb-8 flex items-baseline gap-1 text-white">
            <span className="text-5xl font-extrabold">$29</span>
            <span className="text-purple-200 font-medium">/Month</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            {[
              'Access to all premium tools', 
              'Unlimited templates', 
              'Priority support', 
              'Unlimited projects',
              'Cloud sync',
              'Advanced analytics'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white">
                <Check size={18} className="text-white" /> {feature}
              </div>
            ))}
          </div>
          <button className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold py-3 rounded-xl transition-colors">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col hover:border-purple-200 transition-colors shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-8">For teams and businesses</p>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-gray-900">$99</span>
            <span className="text-gray-500 font-medium">/Month</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            {[
              'Everything in Pro', 
              'Team collaboration', 
              'Custom integrations', 
              'Dedicated support',
              'SLA guarantee',
              'Custom branding'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <Check size={18} className="text-green-500" /> {feature}
              </div>
            ))}
          </div>
          <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 rounded-xl transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

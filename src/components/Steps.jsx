
import { UserPlus, Package, Rocket } from 'lucide-react';

const Steps = () => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#1a1c29] mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Start your journey with premium tools in just a few clicks. It's fast, simple, and gives you instant access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative mt-8 md:mt-0 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-4 shadow-lg text-sm">1</div>
            <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 mix-blend-multiply group-hover:scale-110 transition-transform">
              <UserPlus size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-500 text-sm">Sign up in seconds and get access to all our premium products.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative mt-8 md:mt-0 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-4 shadow-lg text-sm">2</div>
            <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 mix-blend-multiply group-hover:scale-110 transition-transform">
              <Package size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-500 text-sm">Browse our library and add the tools you need to your cart.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative mt-8 md:mt-0 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-4 shadow-lg text-sm">3</div>
            <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 mix-blend-multiply group-hover:scale-110 transition-transform">
              <Rocket size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-500 text-sm">Checkout instantly and supercharge your workflow today.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;


const Footer = () => {
  return (
    <footer className="bg-[#111424] text-gray-400 py-16 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
              D
            </div>
            DigiTools
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Press</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14 pb-20">
          {/* Pagedone Column */}
          <div>
            <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
            <ul className="text-lg space-y-6">
              {['Home', 'About', 'Pricing', 'Features', 'Pro Version'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xl text-white font-bold mb-7">Products</h4>
            <ul className="text-lg space-y-6">
              {['Figma UI System', 'Icons Assets', 'Responsive Blocks', 'Components Library', 'Plugin Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
            <ul className="text-lg space-y-6">
              {['FAQs', 'Quick Start', 'Documentation', 'User Guide', 'Plugin Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg space-y-6">
              {['Customer Support', 'Cookies', 'License', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <a href="https://pagedone.io/" className="flex justify-center">
              {/* SVG Logo */}
              <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path data */}
              </svg>
            </a>
            <span className="text-gray-400 text-center lg:text-left">
              © <a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.
            </span>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600 transition-colors duration-300"
                >
                  {/* Social icons */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

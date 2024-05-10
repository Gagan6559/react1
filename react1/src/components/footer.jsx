import React from 'react';
import logo from '../assets/logo.png';
import fblogo from '../assets/fblogo.png';
import iglogo from '../assets/iglogo.jpg';
import linkedinlogo from '../assets/linkedinlogo.png';
import emaillogo from '../assets/emaillogo.png';


const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full mt-12">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="mb-6">
            {/* Replace the text with your company logo */}
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li>
                  <h6 className="mb-3 font-medium text-gray-500">{title}</h6>
                </li>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="/#"
                      className="block py-1.5 text-gray-600 transition-colors hover:text-gray-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-200 py-4 md:flex-row md:justify-between">
          <span className="mb-4 text-center text-gray-700 md:mb-0">
            &copy; {currentYear} <a href="https://go4garage.com/">Go4garage</a>. All
            Rights Reserved.
          </span>
          <div className="flex gap-4 text-gray-700 sm:justify-center">
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <img src={fblogo} alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/go4garage?igsh=dmFpdGdmbnBmaWx3" className="opacity-80 transition-opacity hover:opacity-100">
              <img src={iglogo} alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/go4garage/" className="opacity-80 transition-opacity hover:opacity-100">
              <img src={linkedinlogo} alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <img src={emaillogo} alt="Email" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

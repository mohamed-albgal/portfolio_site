import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../images/alt_logo_malb.svg';
import { resumeURL } from '../../content/home.yaml';
import { name, links } from '../../content/nav.yaml';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const socialsLinks = (
    <div className="mt-5 inline-block self-center">
      <div className="sm:p-0 flex justify-items-end">
        <a className="px-2 pb-4" href="https://linkedin.com/in/mohamed-albgal" target="_blank" rel="noreferrer">
          <img className="h-6" src="../linkedin_logo" alt="LinkedIn" />
        </a>
        <a className="sm:px-3 px-2 pb-4" href="https://github.com/mohamed-albgal" target="_blank" rel="noreferrer">
          <img className="h-6" src="../github_logo" alt="GitHub" />
        </a>
        <a className="px-2" href="mailto:malbgal@gmail.com" target="_blank" rel="noreferrer">
          <img className="h-6" src="../email_icon" alt="Email" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="sm:w-auto w-screen">
      <div className="bg-white shadow-lg rounded-lg hover:shadow-2xl sm:flex sm:flex-row flex-col justify-center flex-wrap z-30 fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl items-center">
        <div className="flex items-center justify-between w-full px-4 pb-4 sm:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 border-2 border-white shadow bg-indigo-100 rounded-full flex items-center justify-center">
              <img className="" src={logo} alt="Logo" />
            </div>
            <p className="text-logo-darkBlue text-base font-extrabold uppercase tracking-widest">{name}</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-indigo-600 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.828 4.828 4.829z" />
              ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
            </svg>
          </button>
        </div>

        {/* Desktop Logo Link */}
        <Link className="hidden sm:inline-block" to="/">
          <div className="lg:absolute left-3 top-5 w-32 h-32 border-white shadow-lg border-2 self-center hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full" id="logo">
            <img className="lg:mt-5" src={logo} alt="Logo" />
          </div>
        </Link>

        {/* Center Navigation Block */}
        <div className={`${isOpen ? 'block' : 'hidden'} sm:inline-block self-center mt-4 sm:mt-14 w-full sm:w-auto text-center sm:text-left px-4 sm:px-0`}>
          <div className="flex-row hidden sm:block">
            <p className="text-logo-darkBlue sm:text-4xl text-xl sm:mb-10 font-extrabold text-center uppercase tracking-widest max-w-screen">
              {name}
            <div className="hidden sm:block"> {socialsLinks} </div>
            </p>
          </div>

          <div id="tags" className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 w-full sm:w-auto py-4 sm:py-0">
            <Link
              to="/"
              activeClassName="activeNavLink"
              className="sm:px-16 px-2 py-1 font-medium text-logo-lightIndigo text-sm uppercase tracking-widest"
            >
              about
            </Link>
            {links.split(',').map(link => (
              <Link
                key={link}
                to={`/${link}`}
                activeClassName="activeNavLink"
                className="sm:px-14 px-2 py-1 font-medium text-logo-lightIndigo text-sm uppercase tracking-widest"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials Block Drawer Element */}
        <div className={`${isOpen ? 'flex' : 'hidden'} sm:hidden justify-center w-full border-t border-gray-100 mt-4`}>
          {socialsLinks}
        </div>

        {/* Desktop Only Social Links Instance */}

        {/* View Résumé Button Wrapper */}
        <div className={`${isOpen ? 'block' : 'hidden'} sm:block sm:bottom-0 mb-3 sm:h-12 lg:mr-8 sm:mr-10 sm:max-w-none max-w-xs text-center rounded-lg shadow-lg self-center lg:absolute right-2 lg:bottom-28 hover:bg-logo-lightIndigo text-logo-darkBlue hover:text-white bg-indigo-200 lg:my-0 mx-auto sm:mx-0 sm:mb-10`}>
          <a target="_blank" href={resumeURL} rel="noreferrer">
            <button className="font-bold text-lg sm:text-base py-3 px-4 tracking-wide">
              View Résumé &rarr;
            </button>
          </a>
        </div>

      </div>

      {/* Main Content Node */}
      <div className="pt-40 sm:max-w-none max-w-sm mx-auto sm:mx-0">
        {children}
      </div>
    </div>
  );
}

export default Layout;

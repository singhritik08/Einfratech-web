import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdown1Clicked, setIsDropdown1Clicked] = useState(false);
  const [isDropdown2Clicked, setIsDropdown2Clicked] = useState(false);

  const [selectedDashboardOption, setSelectedDashboardOption] = useState('Dashboard');
  const [selectedContactOption, setSelectedContactOption] = useState('Contact');

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  const handleDashboardOptionClick = (option) => {
    setSelectedDashboardOption(option);
    setIsDropdown1Open(false);
    setIsDropdown1Clicked(false);
    setIsMobileMenuOpen(false);

    if (option === 'Retail Industry') navigate('/retail');
    if (option === 'Dashboard') navigate('/dashboard');
    if (option === 'Life science') navigate('/lifescience');
    if (option === 'Education') navigate('/education');
    if (option === 'Public Sector') navigate('/publicSector');
    if (option === 'HealthCare') navigate('/healthcare');
  };

  const handleContactOptionClick = (option) => {
    setSelectedContactOption(option);
    setIsDropdown2Open(false);
    setIsDropdown2Clicked(false);
    setIsMobileMenuOpen(false);

    if (option === 'Contact Us') navigate('/ContactPage');
    if (option === 'About Us') navigate('/aboutUs');
    if (option === 'Professional Services') navigate('/professional');
  };

  const handleStaticLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleSignInClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/auth');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDropdown1Click = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown1Clicked(!isDropdown1Open);
  };

  const handleDropdown1MouseEnter = () => {
    setIsDropdown1Open(true);
  };

  const handleDropdown2Click = () => {
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown2Clicked(!isDropdown2Open);
  };

  const handleDropdown2MouseEnter = () => {
    setIsDropdown2Open(true);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setIsDropdown1Open(false);
        setIsDropdown1Clicked(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setIsDropdown2Open(false);
        setIsDropdown2Clicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white h-16 px-4 sm:px-8 py-4 max-w-screen-2xl flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66e8077d6d910_whatsapp_image_2024-09-16_at_3.50.26_pm.jpeg?d=400x400"
          alt="Einfratech"
          className="h-16"
        />
        <h2 className="font-bold text-[#223d57] px-3 sm:px-6 text-lg">Einfratech System</h2>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-[#223d57] text-xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Dashboard Dropdown */}
        <div className="relative" onMouseEnter={handleDropdown1MouseEnter} ref={dropdown1Ref}>
          <button
            className="text-black flex p-1.5 items-center hover:text-gray-600"
            onClick={handleDropdown1Click}
          >
            <h1 className="px-2 text-sm">{selectedDashboardOption}</h1>
            <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
          </button>
          {isDropdown1Open && (
            <div className="absolute bg-white text-black shadow-md rounded-md mt-2 w-40 z-10">
              <ul>
                {['Dashboard', 'Retail Industry', 'Public Sector', 'Life science', 'Education', 'HealthCare'].map(
                  (option) => (
                    <li
                      key={option}
                      className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleDashboardOptionClick(option)}
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Static Links */}
        <div
          className="px-3 text-sm text-black hover:text-gray-600 cursor-pointer"
          onClick={() => handleStaticLinkClick('/customer')}
        >
          Customers
        </div>
        <div
          className="px-3 text-sm text-black hover:text-gray-600 cursor-pointer"
          onClick={() => handleStaticLinkClick('/services')}
        >
          Services
        </div>
        <div
          className="px-3 text-sm text-black hover:text-gray-600 cursor-pointer"
          onClick={() => handleStaticLinkClick('/features')}
        >
          Features
        </div>

        {/* Contact Dropdown */}
        <div className="relative" onMouseEnter={handleDropdown2MouseEnter} ref={dropdown2Ref}>
          <button
            className="text-black flex p-1.5 items-center hover:text-gray-600"
            onClick={handleDropdown2Click}
          >
            <h1 className="px-2 text-sm">{selectedContactOption}</h1>
            <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
          </button>
          {isDropdown2Open && (
            <div className="absolute bg-white text-black shadow-md rounded-md mt-2 w-40 z-10">
              <ul>
                {['Contact Us', 'About Us', 'Professional Services'].map((option) => (
                  <li
                    key={option}
                    className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleContactOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sign In Button */}
        <button
          className="p-1.5 px-4 bg-[#0D6EFD] text-white rounded-md hover:bg-[#0d5ddd] text-sm"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden shadow-lg z-20">
          <div className="flex flex-col p-4 space-y-3">
            {/* Dashboard Dropdown */}
            <div className="relative" ref={dropdown1Ref}>
              <button
                className="text-black flex p-2 w-full text-left hover:text-gray-600"
                onClick={() => setIsDropdown1Open(!isDropdown1Open)}
              >
                <h1 className="text-sm flex-1">{selectedDashboardOption}</h1>
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </button>
              {isDropdown1Open && (
                <div className="bg-white text-black shadow-md rounded-md mt-2 w-full">
                  <ul>
                    {['Dashboard', 'Retail Industry', 'Public Sector', 'Life science', 'Education', 'HealthCare'].map(
                      (option) => (
                        <li
                          key={option}
                          className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => handleDashboardOptionClick(option)}
                        >
                          {option}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Static Links */}
            <div
              className="p-2 text-sm text-black hover:text-gray-600 cursor-pointer w-full text-left"
              onClick={() => handleStaticLinkClick('/customer')}
            >
              Customers
            </div>
            <div
              className="p-2 text-sm text-black hover:text-gray-600 cursor-pointer w-full text-left"
              onClick={() => handleStaticLinkClick('/services')}
            >
              Services
            </div>
            <div
              className="p-2 text-sm text-black hover:text-gray-600 cursor-pointer w-full text-left"
              onClick={() => handleStaticLinkClick('/features')}
            >
              Features
            </div>

            {/* Contact Dropdown */}
            <div className="relative" ref={dropdown2Ref}>
              <button
                className="text-black flex p-2 w-full text-left hover:text-gray-600"
                onClick={() => setIsDropdown2Open(!isDropdown2Open)}
              >
                <h1 className="text-sm flex-1">{selectedContactOption}</h1>
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </button>
              {isDropdown2Open && (
                <div className="bg-white text-black shadow-md rounded-md mt-2 w-full">
                  <ul>
                    {['Contact Us', 'About Us', 'Professional Services'].map((option) => (
                      <li
                        key={option}
                        className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleContactOptionClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              className="p-2 px-4 bg-[#0D6EFD] text-white rounded-md hover:bg-[#0d5ddd] text-sm w-full text-left"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
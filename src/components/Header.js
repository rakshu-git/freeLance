import React, { useState } from 'react';

const Header = () => {
  const [bar, setBar] = useState(false)
  

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Offset in pixels
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setBar(!bar)
  };

  const handleClick = () => {
    setBar(!bar)
  }

  const handleCloseIcon=()=>{
    setBar(!bar)
  }

  return (
    <div>
      <div className='head'>
        <div className='navBar'>
          <h1>Get Together</h1>
          <div className="icon" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="60" height="60" onClick={handleClick}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        <div className='head-1 content'>
          <h1 onClick={() => scrollToSection('places')}>Places</h1>
          <h1 onClick={() => scrollToSection('participants')}>Participants</h1>
          <h1 onClick={() => scrollToSection('schedule')}>Schedule</h1>
          <h1 onClick={() => scrollToSection('games')}>Games</h1>
          <h1 onClick={() => scrollToSection('campfire')}>Contact</h1>
        </div>

        {bar &&
          <div className='navVer'>
            <div style={{height : "80px"}}>
            <svg onClick={handleCloseIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 closeIcon" width={50}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
              </div>
          
           
            <h1 onClick={() => scrollToSection('places')}>Places</h1>
            <h1 onClick={() => scrollToSection('participants')}>Participants</h1>
            <h1 onClick={() => scrollToSection('schedule')}>Schedule</h1>
            <h1 onClick={() => scrollToSection('games')}>Games</h1>
            <h1 onClick={() => scrollToSection('campfire')}>Contact</h1>
          </div>
        }

      </div>
    </div>
  );
};

export default Header;

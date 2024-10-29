import React from 'react';

const Header = () => {
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
      };

  return (
    <div>
      <div className='head'>
        <h1>Get Together</h1>
        <div className='head-1'>
          <h1 onClick={() => scrollToSection('places')}>Places</h1>
          <h1 onClick={() => scrollToSection('participants')}>Participants</h1>
          <h1 onClick={() => scrollToSection('schedule')}>Schedule</h1>
          <h1 onClick={() => scrollToSection('games')}>Games</h1>
          <h1 onClick={() => scrollToSection('campfire')}>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

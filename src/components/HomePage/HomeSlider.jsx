import React, { useState, useEffect, useRef } from 'react';

const HomeSlider = () => {
  const slideContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const slides = slideContainerRef.current.querySelectorAll('.homeslide');

    const goToSlide = (n) => {
      slides[currentSlide].classList.remove('active');
      setCurrentSlide(n);
      slides[n].classList.add('active');
    };

    const nextSlide = () => {
      goToSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const intervalId = setInterval(nextSlide, slideInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentSlide, slideInterval]);

  const handlePrevClick = () => {
    const slides = slideContainerRef.current.querySelectorAll('.homeslide');
    const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.remove('active');
    setCurrentSlide(prevSlideIndex);
    slides[prevSlideIndex].classList.add('active');
  };

  const handleNextClick = () => {
    const slides = slideContainerRef.current.querySelectorAll('.homeslide');
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('active');
    setCurrentSlide(nextSlideIndex);
    slides[nextSlideIndex].classList.add('active');
  };

  return (
    <div className="homeslide-container" id="home" ref={slideContainerRef}>
      <div className="homeslide active">
        <img src="/images/slide1.jpg" alt="Slide 1" />
        <div className="content">
          <h2>Welcome to Simpli amal business solutions</h2>
          <p><i>Empower your business with cutting-edge technology and strategic insights tailored to your needs</i></p>
        </div>
      </div>
      <div className="homeslide">
        <img src="/images/slide2.jpg" alt="Slide 2" />
        <div className="content">
          <h2>Transform your business with us</h2>
          <p><i>Unlock growth potential and streamline operations for unparalleled success in your industry</i></p>
        </div>
      </div>
      <div className="homeslide">
        <img src="/images/slide4.jpg" alt="Slide 3" />
        <div className="content">
          <h2>Discover innovative solutions</h2>
          <p><i>Explore a world of possibilities with our innovative solutions designed to drive efficiency and profitability</i></p>
        </div>
      </div>
      <button onClick={handlePrevClick}>&#8249;</button>
      <button onClick={handleNextClick}>&#8250;</button>
    </div>
  );
};

export default HomeSlider;
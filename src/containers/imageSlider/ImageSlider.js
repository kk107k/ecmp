import { useCallback, useEffect, useRef, useState } from "react";
import "./imageSlider.css"

const slideStyles = {
  width: 2000,
  height: 500,
  backgroundPosition: "center",
  backgroundSize: "cover",
};


const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "25px",
  fontSize: "30px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "25px",
  fontSize: "30px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.6s",
};

const slidesContainerOverflowStyles = {
};




const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(true); // Initialize as true

  const goToPrevious = () => {
    setAnimateSlide(true); // Trigger the animation
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setAnimateSlide(true); // Trigger the animation
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  const handleTransitionEnd = () => {
    setAnimateSlide(false); // Reset animation trigger
  };

  useEffect(() => {
    if (animateSlide) {
      // Trigger animation on page load
      setTimeout(() => {
        setAnimateSlide(false); // Stop the initial animation
      }, 3000); // Adjust the delay as needed
    }
  }, [animateSlide]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(goToNext, 5000); // Adjust the interval as needed

    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);


  return (
    <div style={sliderStyles} className="sliderStyles" >
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
        {slides.map((slide, slideIndex) => (
  <div
    key={slideIndex}
    style={getSlideStylesWithBackground(slideIndex)}
  >
              <div className="slideOverlay" >
                <div className={`slideContainer ${animateSlide ? 'animation-class' : ''}`} onTransitionEnd={handleTransitionEnd}>
              <h1 className="slideHeading">{slide.heading}</h1>
              <p className="slideTitle" dangerouslySetInnerHTML={{ __html: slide.title }}></p>
              <a className="slideButton" href={slide.destination}>{slide.button}</a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};


export default ImageSlider;
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const StickyHero = () => {
  const lottieContainer = useRef(null);
  const lottieAnimation = useRef(null);

  useEffect(() => {
    // Load the Lottie animation
    lottieAnimation.current = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false, // We don't want the animation to auto-play, we will control it with scroll
      animationData: require('../../../../public/assets/Hero.json'), // Path to your Lottie JSON file
    });

    // Clean up on unmount
    return () => {
      if (lottieAnimation.current) {
        lottieAnimation.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position relative to the section containing the Lottie animation
      const scrollPosition = window.scrollY;
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate the scroll percentage (0 to 1)
      const scrollPercentage = 2*scrollPosition / maxScrollHeight;

      // Get the total number of frames in the Lottie animation
      const totalFrames = lottieAnimation.current.totalFrames;

      // Calculate the current frame based on the scroll percentage
      const currentFrame = Math.floor(scrollPercentage * totalFrames);

      // Set the animation to the current frame
      lottieAnimation.current.goToAndStop(currentFrame, true);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '1300vh' }}>
      <div
        ref={lottieContainer}
        style={{
         
          position: 'sticky',
          top: '0vh',
        }}
        className='ml-[5rem] mt-[-150px]'
      />
    </div>
  );
};

export default StickyHero;

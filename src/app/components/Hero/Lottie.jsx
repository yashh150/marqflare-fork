"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./homeanim.json"; // Update with the path to your Lottie animation JSON

const StickyLottie = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData:animationData,
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;
      const frame = scrollFraction * anim.totalFrames;
      
      // Play the animation based on scroll
      anim.goToAndStop(frame, true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anim.destroy(); // Cleanup animation when the component is unmounted
    };
  }, []);

  return (
    <div className="relative h-full" >
      <div
        style={{
          position: 'sticky',
          top: '0px', // Adjust the distance from the top as needed
          
          
          margin: '0 auto',
        }}
      >
        <div ref={lottieRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default StickyLottie;

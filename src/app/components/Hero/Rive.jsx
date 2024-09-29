"use client"

import { useEffect, useRef } from 'react';
import {Rive} from '@rive-app/canvas';

const ScrollAnimation = () => {
  const canvasRef = useRef(null);
  let stateMachineLoadInput;

  useEffect(() => {
    if (canvasRef.current) {
      const scrollAnimation = new Rive({
        src: "main.riv",
        canvas: canvasRef.current,
        stateMachines: "State Machine 1",
        artboard: "Frame 1",
        autoplay: true,
        onLoadError: () => console.log("ERROR LOADING RIVE"),
        onLoad: () => {
            console.log("LOADED RIVE")
          stateMachineLoadInput = scrollAnimation.stateMachineInputs("State Machine 1")[1];
          stateMachineLoadInput.value = 1;
          scrollAnimation.resizeDrawingSurfaceToCanvas();
        },
      });

      const handleScroll = () => {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        if (stateMachineLoadInput) {
          stateMachineLoadInput.value = scrollPercentage;
        }
      };

      document.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default ScrollAnimation;

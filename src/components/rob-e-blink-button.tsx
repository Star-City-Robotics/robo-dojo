import ROBEClosed from "/assets/ROB-E-CLOSED.png?url";
import ROBEOpen from "/assets/ROB-E-OPEN.png?url";
import { useEffect, useRef, useState } from "react";

interface RobEBlinkButtonProps {
  className?: string;
  onClick?: () => void;
}

export const RobEBlinkButton = ({
  className = "",
  onClick,
}: RobEBlinkButtonProps) => {
  const [currentImage, setCurrentImage] = useState(ROBEOpen);
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isBlinking) return; // Prevent multiple blink sequences

    setIsBlinking(true);

    // Blink sequence: open -> closed -> open -> closed -> open
    const blinkSequence = [
      { image: ROBEClosed, duration: 150 },
      { image: ROBEOpen, duration: 200 },
      { image: ROBEClosed, duration: 150 },
      { image: ROBEOpen, duration: 200 },
    ];

    let stepIndex = 0;

    const executeStep = () => {
      if (stepIndex < blinkSequence.length) {
        const step = blinkSequence[stepIndex];
        setCurrentImage(step.image);

        timeoutRef.current = setTimeout(() => {
          stepIndex++;
          executeStep();
        }, step.duration);
      } else {
        // End of sequence - return to normal state
        setCurrentImage(ROBEOpen);
        setIsBlinking(false);
      }
    };

    executeStep();
  };

  const handleMouseLeave = () => {
    // Clean up any ongoing animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsBlinking(false);
    setCurrentImage(ROBEOpen);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={`relative transition-transform hover:scale-105 active:scale-95 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      title="ROB-E - RoboDOJO Assistant"
    >
      <img
        src={currentImage}
        alt="ROB-E - RoboDOJO Assistant"
        className="w-full h-full object-contain transition-all duration-100"
        style={{
          filter: "brightness(1)",
        }}
      />
    </button>
  );
};

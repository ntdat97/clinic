import { useEffect, useRef, useState } from 'react';

export function useTransitionEffect() {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Set the state to true if the element is in the viewport
        if (top < windowHeight && bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener and visibility state when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setIsVisible(false);
    };
  }, []);

  return { ref, isVisible };
}
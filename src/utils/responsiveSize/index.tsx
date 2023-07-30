import { useState, useCallback, useEffect } from 'react';

const Responsive = (minSize: string, maxSize: string, maxWindow: number) => {
  const isMaxWidth = useMediaQuery(maxWindow);
  return isMaxWidth ? maxSize : minSize;
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

export { Responsive, useMediaQuery };

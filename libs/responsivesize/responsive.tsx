import React from 'react';

const Reponsive = (
  minSize: string | number,
  maxSize: string | number,
  maxWindow: number,
) => {
  const isMaxWidth = useMediaQuery(maxWindow);
  return isMaxWidth ? maxSize : minSize;
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  React.useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export { Reponsive, useMediaQuery };

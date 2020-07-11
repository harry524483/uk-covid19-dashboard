import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref: any): any => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const target = ref.current;

    const resizeObserver = new ResizeObserver((entries: any) => {
      entries.forEach((entry: any) => {
        setDimensions(entry.contentRect);
      });
    });

    resizeObserver.observe(target);
    return () => {
      resizeObserver.unobserve(target);
    };
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;

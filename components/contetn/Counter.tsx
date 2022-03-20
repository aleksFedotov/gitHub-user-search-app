import React, { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';

const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const headerRef = ref.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        headerRef!.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);
  return <h3 ref={ref} />;
};

export default Counter;

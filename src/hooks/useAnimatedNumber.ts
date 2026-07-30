import { useEffect, useState } from "react";

export function useAnimatedNumber(
  target: number,
  duration = 1000
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = 0;
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min(
        (now - startTime) / duration,
        1
      );

      const current = Math.floor(
        start + (target - start) * progress
      );

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
}
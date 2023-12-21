import CountUp from "react-countup";
import { useState, useEffect } from "react";

function CounterElement({ label, end, duration, delay }) {
  const [counterFinished, setCounterFinished] = useState(false);
  const timeoutInMs = (duration + delay) * 1000 - 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounterFinished(true);
    }, timeoutInMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-shadow md:text-2xl mb-2 md:mb-">
      <div className="text-4xl md:text-6xl">
        <CountUp
          start={0}
          end={end}
          duration={duration}
          delay={delay}
          separator=""
        />
      </div>
      <div
          className={`${
            counterFinished ? "opacity-100" : "opacity-0"
          } mt-1 transition-opacity ease-in-out duration-1000`}
        >
          {label}
      </div>
    </div>
  );
}

export default CounterElement;

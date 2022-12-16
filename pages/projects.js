import { useRef, useEffect } from "react";
import { Animate } from "framer";

const Projects = () => {
  const containerRef = useRef(null);
  const cardWidth = useWidth(containerRef);

  useEffect(() => {
    const animate = new Animate(containerRef.current);
    animate.start({
      x: [-cardWidth, 0],
      transition: { duration: 1 },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/3 bg-gray-500">Card 1</div>
        <div className="w-1/3 bg-gray-400">Card 2</div>
        <div className="w-1/3 bg-gray-300">Card 3</div>
      </div>
    </div>
  );
};

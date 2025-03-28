import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

const isPointInEllipse = (point: Point, ellipse: { cx: number; cy: number; rx: number; ry: number }) => {
  const dx = point.x - ellipse.cx;
  const dy = point.y - ellipse.cy;
  return (dx * dx) / (ellipse.rx * ellipse.rx) + (dy * dy) / (ellipse.ry * ellipse.ry) <= 1;
};

const generateRandomPath = (isRightOval: boolean) => {
  // Start point at bottom of takeoff strip
  const startX = isRightOval ? 600 : 200; // Center of each oval
  const startY = 410;
  
  // Randomly choose direction (left or right)
  const direction = Math.random() > 0.5 ? 1 : -1;
  
  // End point (randomized but always up)
  const endX = startX + direction * (300 + Math.random() * 200);
  const endY = -100 - Math.random() * 50;
  
  // Control points for a single smooth curve
  const control1X = startX;
  const control1Y = 350;
  
  const control2X = startX + direction * (50 + Math.random() * 50);
  const control2Y = 250;
  
  const control3X = startX + direction * (150 + Math.random() * 100);
  const control3Y = 150;
  
  const control4X = startX + direction * (250 + Math.random() * 150);
  const control4Y = 50;
  
  const control5X = startX + direction * (300 + Math.random() * 100);
  const control5Y = -25;
  
  const control6X = startX + direction * (325 + Math.random() * 75);
  const control6Y = -75;
  
  return `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${control3X} ${control3Y} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${control5X} ${control5Y} C ${control5X} ${control5Y}, ${control6X} ${control6Y}, ${endX} ${endY}`;
};

const generateLandingPath = (isRightOval: boolean) => {
  // Start point further outside oval at top
  const startX = isRightOval ? 600 + Math.random() * 200 : 200 - Math.random() * 200;
  const startY = -200 - Math.random() * 100; // Start higher up
  
  // End point at top landing strip (y=50)
  const endX = isRightOval ? 600 : 200;
  const endY = 50; // This is the y-position of the top landing strip
  
  // Control points for a single smooth curve
  const control1X = isRightOval ? 600 + Math.random() * 150 : 200 - Math.random() * 150;
  const control1Y = -150;
  
  const control2X = isRightOval ? 600 + Math.random() * 100 : 200 - Math.random() * 100;
  const control2Y = -100;
  
  const control3X = isRightOval ? 600 + Math.random() * 50 : 200 - Math.random() * 50;
  const control3Y = -50;
  
  const control4X = isRightOval ? 600 : 200;
  const control4Y = 0;
  
  const control5X = isRightOval ? 600 : 200;
  const control5Y = 25;
  
  const control6X = isRightOval ? 600 : 200;
  const control6Y = 37.5;
  
  // Use a single continuous Bezier curve with more control points
  return `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${control3X} ${control3Y} C ${control3X} ${control3Y}, ${control4X} ${control4Y}, ${control5X} ${control5Y} C ${control5X} ${control5Y}, ${control6X} ${control6Y}, ${endX} ${endY}`;
};

const TakeoffPath = () => {
  const [paths, setPaths] = useState<{ path: string; key: number; isRight: boolean }[]>([]);
  const nextKeyRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const addNewPath = () => {
      setPaths(currentPaths => {
        // Determine which oval to use
        let isRightOval;
        
        if (currentPaths.length === 0) {
          // Start with right oval
          isRightOval = true;
        } else {
          // Get the last path's oval
          const lastPath = currentPaths[currentPaths.length - 1];
          // Always alternate to the other oval
          isRightOval = !lastPath.isRight;
        }
        
        const newPath = {
          path: generateRandomPath(isRightOval),
          key: nextKeyRef.current++,
          isRight: isRightOval
        };
        
        return [...currentPaths, newPath];
      });

      // Schedule next path with delay between 2-5 seconds
      const nextDelay = 2000 + Math.random() * 3000;
      timeoutRef.current = setTimeout(addNewPath, nextDelay);
    };

    // Start with just the first path
    const firstPath = {
      path: generateRandomPath(true), // Start with right oval
      key: nextKeyRef.current++,
      isRight: true
    };
    setPaths([firstPath]);

    // Schedule the second path after a delay
    timeoutRef.current = setTimeout(addNewPath, 2000 + Math.random() * 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {paths.map(({ path, key, isRight }) => (
        <motion.path
          key={key}
          d={path}
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ 
            pathLength: 1,
            opacity: [1, 1, 0] 
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            opacity: {
              times: [0, 0.15, 1], // Start fading at 15% and be completely gone by the end
              duration: 6
            }
          }}
          onAnimationComplete={() => {
            // Remove this path after animation completes
            setPaths(current => current.filter(p => p.key !== key));
          }}
        />
      ))}
    </>
  );
};

const LandingPath = () => {
  const [paths, setPaths] = useState<{ path: string; key: number; isRight: boolean }[]>([]);
  const nextKeyRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const addNewPath = () => {
      setPaths(currentPaths => {
        // Determine which oval to use
        let isRightOval;
        
        if (currentPaths.length === 0) {
          // Start with right oval
          isRightOval = true;
        } else {
          // Get the last path's oval
          const lastPath = currentPaths[currentPaths.length - 1];
          // Always alternate to the other oval
          isRightOval = !lastPath.isRight;
        }
        
        const newPath = {
          path: generateLandingPath(isRightOval),
          key: nextKeyRef.current++,
          isRight: isRightOval
        };
        
        return [...currentPaths, newPath];
      });

      // Schedule next path with delay between 3-5 seconds
      const nextDelay = 3000 + Math.random() * 2000;
      timeoutRef.current = setTimeout(addNewPath, nextDelay);
    };

    // Start with just the first path
    const firstPath = {
      path: generateLandingPath(true), // Start with right oval
      key: nextKeyRef.current++,
      isRight: true
    };
    setPaths([firstPath]);

    // Schedule the second path after a delay
    timeoutRef.current = setTimeout(addNewPath, 3000 + Math.random() * 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {paths.map(({ path, key, isRight }) => (
        <motion.path
          key={key}
          d={path}
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ 
            pathLength: 1,
            opacity: [1, 1, 0] 
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            opacity: {
              times: [0, 0.85, 1], // Start fading at 85% and be completely gone by the end
              duration: 6
            }
          }}
          onAnimationComplete={() => {
            // Remove this path after animation completes
            setPaths(current => current.filter(p => p.key !== key));
          }}
        />
      ))}
    </>
  );
};

const LandingStrip = ({ zone, width, isTop, label }: { zone: number; width: number; isTop: boolean; label: string }) => {
  const zoneWidth = width / 2;
  const zoneCenter = (zone * zoneWidth) + (zoneWidth / 2);
  const stripWidth = 40;
  const stripHeight = 120;
  const yPos = isTop ? 50 : 350;
  
  return (
    <g>
      {/* Main strip */}
      <rect
        x={zoneCenter - stripWidth/2}
        y={yPos - stripHeight/2}
        width={stripWidth}
        height={stripHeight}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      {/* Center line */}
      <line
        x1={zoneCenter}
        y1={yPos - stripHeight/2}
        x2={zoneCenter}
        y2={yPos + stripHeight/2}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      {/* Landing lights */}
      <circle
        cx={zoneCenter}
        cy={yPos - stripHeight/2}
        r="2"
        fill="rgba(255,255,255,0.3)"
        className="animate-pulse"
      />
      <circle
        cx={zoneCenter}
        cy={yPos + stripHeight/2}
        r="2"
        fill="rgba(255,255,255,0.3)"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      {/* Label */}
      <text
        x={zoneCenter + stripWidth/2 + 10}
        y={yPos}
        fill="rgba(255,255,255,0.4)"
        fontSize="12"
        dominantBaseline="middle"
      >
        {label}
      </text>
    </g>
  );
};

const CrashFlash = () => {
  const [flashes, setFlashes] = useState<{ key: number; x: number; y: number }[]>([]);
  const nextKeyRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const isPointFarFromOvals = (point: Point) => {
    // Check distance from left oval center
    const leftOvalDist = Math.sqrt(
      Math.pow(point.x - 200, 2) + Math.pow(point.y - 200, 2)
    );
    
    // Check distance from right oval center
    const rightOvalDist = Math.sqrt(
      Math.pow(point.x - 600, 2) + Math.pow(point.y - 200, 2)
    );

    // Point must be at least 150px away from both oval centers
    return leftOvalDist > 150 && rightOvalDist > 150;
  };

  useEffect(() => {
    console.log('CrashFlash component mounted');
    
    const addNewFlash = () => {
      console.log('Attempting to add new flash');
      
      // Generate random position
      let x, y;
      let attempts = 0;
      const maxAttempts = 10;

      do {
        x = Math.random() * 800;
        y = Math.random() * 400;
        attempts++;
      } while (!isPointFarFromOvals({ x, y }) && attempts < maxAttempts);

      if (attempts < maxAttempts) {
        console.log('Adding new flash at:', { x, y });
        setFlashes(current => {
          const newFlashes = [...current, { key: nextKeyRef.current++, x, y }];
          console.log('Current flashes:', newFlashes);
          return newFlashes;
        });
      } else {
        console.log('Could not find suitable position after', maxAttempts, 'attempts');
      }

      // Schedule next flash with delay between 3-5 seconds
      const nextDelay = 3000 + Math.random() * 2000;
      console.log('Scheduling next flash in:', nextDelay, 'ms');
      timeoutRef.current = setTimeout(addNewFlash, nextDelay);
    };

    // Start the first flash after a delay
    const initialDelay = 3000 + Math.random() * 2000;
    console.log('Starting first flash in:', initialDelay, 'ms');
    timeoutRef.current = setTimeout(addNewFlash, initialDelay);

    return () => {
      console.log('Cleaning up CrashFlash component');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {flashes.map(({ key, x, y }) => (
        <motion.circle
          key={key}
          cx={x}
          cy={y}
          r="10"
          fill="rgba(255,0,0,0.8)"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 2, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            console.log('Flash animation completed:', { key, x, y });
            setFlashes(current => current.filter(f => f.key !== key));
          }}
        />
      ))}
    </>
  );
};

const FragmentedSkies = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 rounded-xl overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* SVG for zones */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {/* Zone boundaries - ellipses */}
        <ellipse cx="200" cy="200" rx="150" ry="300" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />
        <ellipse cx="600" cy="200" rx="150" ry="300" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />

        {/* Landing strips */}
        <LandingStrip zone={0} width={800} isTop={false} label="TAKEOFF" />
        <LandingStrip zone={1} width={800} isTop={false} label="TAKEOFF" />
        <LandingStrip zone={0} width={800} isTop={true} label="LANDING" />
        <LandingStrip zone={1} width={800} isTop={true} label="LANDING" />

        {/* Takeoff animation path */}
        <TakeoffPath />
        
        {/* Landing animation path */}
        <LandingPath />
        
        {/* Crash flash animation */}
        <CrashFlash />
      </svg>
    </div>
  );
};

export default FragmentedSkies; 
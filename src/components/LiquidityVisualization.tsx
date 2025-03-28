'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  position: { x: number; y: number };
  type: 'source' | 'destination';
}

interface Dot {
  id: string;
  startTime: number;
  duration: number;
  startNode: Node;
  endNode: Node;
  progress: number;
  size: number;
}

const MIN_DISTANCE = 100; // Minimum distance between nodes
const NODE_COUNT = 10; // Number of nodes for each type
const DOT_SPAWN_INTERVAL = 50; // Spawn a new dot every 50ms (20x more frequent)
const DOT_DURATION_MIN = 1000; // Minimum duration for dot animation (faster)
const DOT_DURATION_MAX = 3000; // Maximum duration for dot animation (faster)
const MAX_DOTS = 500; // Maximum number of dots to maintain for performance
const DOT_SIZE_MIN = 1; // Minimum dot size
const DOT_SIZE_MAX = 4; // Maximum dot size
const RADAR_ROTATION_SPEED = 0.01; // Reduced speed of radar rotation (half as fast)
const RADAR_ANGLE = Math.PI / 4; // Width of radar beam in radians
const PULSE_RING_COUNT = 3; // Number of pulse rings
const PULSE_RING_SPEED = 0.02; // Speed of pulse rings
const PULSE_RING_INTERVAL = 1000; // Time between new pulse rings

export default function LiquidityVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<{ sourceNodes: Node[]; destinationNodes: Node[] }>({ sourceNodes: [], destinationNodes: [] });
  const [dots, setDots] = useState<Dot[]>([]);
  const animationFrameRef = useRef<number>();
  const lastSpawnTimeRef = useRef<number>(0);
  const radarAngleRef = useRef<number>(0);
  const pulseRingsRef = useRef<{ radius: number; opacity: number }[]>([]);
  const lastPulseTimeRef = useRef<number>(0);

  // Generate random position that respects minimum distance
  const generatePosition = (existingNodes: Node[]): { x: number; y: number } => {
    const maxAttempts = 100;
    let attempts = 0;
    
    // Get the size of the square canvas
    const size = canvasRef.current?.width || 800;
    
    while (attempts < maxAttempts) {
      // Generate positions within the square bounds
      const x = Math.random() * size;
      const y = Math.random() * size;
      
      // Check distance from all existing nodes
      const isTooClose = existingNodes.some(node => {
        const dx = x - node.position.x;
        const dy = y - node.position.y;
        return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
      });
      
      if (!isTooClose) {
        return { x, y };
      }
      
      attempts++;
    }
    
    // If we couldn't find a good position, return a random one
    return {
      x: Math.random() * size,
      y: Math.random() * size
    };
  };

  // Initialize nodes
  useEffect(() => {
    if (!canvasRef.current) return;

    const sourceNodes: Node[] = [];
    const destinationNodes: Node[] = [];

    // Generate source nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      sourceNodes.push({
        id: `source-${i}`,
        position: generatePosition(sourceNodes),
        type: 'source'
      });
    }

    // Generate destination nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      destinationNodes.push({
        id: `destination-${i}`,
        position: generatePosition([...sourceNodes, ...destinationNodes]),
        type: 'destination'
      });
    }

    setNodes({ sourceNodes, destinationNodes });
  }, []);

  // Spawn new dots
  useEffect(() => {
    const spawnDot = () => {
      const now = Date.now();
      if (now - lastSpawnTimeRef.current < DOT_SPAWN_INTERVAL) return;
      
      // Limit total number of dots for performance
      if (dots.length >= MAX_DOTS) return;
      
      const startNode = nodes.sourceNodes[Math.floor(Math.random() * nodes.sourceNodes.length)];
      const endNode = nodes.destinationNodes[Math.floor(Math.random() * nodes.destinationNodes.length)];
      
      const newDot: Dot = {
        id: `dot-${now}`,
        startTime: now,
        duration: Math.random() * (DOT_DURATION_MAX - DOT_DURATION_MIN) + DOT_DURATION_MIN,
        startNode,
        endNode,
        progress: 0,
        size: Math.random() * (DOT_SIZE_MAX - DOT_SIZE_MIN) + DOT_SIZE_MIN
      };
      
      setDots(prev => [...prev, newDot]);
      lastSpawnTimeRef.current = now;
    };

    const spawnInterval = setInterval(spawnDot, DOT_SPAWN_INTERVAL);
    return () => clearInterval(spawnInterval);
  }, [nodes, dots.length]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.8;

      // Update and draw pulse rings
      const now = Date.now();
      
      // Add new pulse ring
      if (now - lastPulseTimeRef.current > PULSE_RING_INTERVAL) {
        pulseRingsRef.current.push({ radius: 0, opacity: 1 });
        lastPulseTimeRef.current = now;
      }

      // Update and draw existing pulse rings
      pulseRingsRef.current = pulseRingsRef.current.filter(ring => {
        ring.radius += PULSE_RING_SPEED;
        ring.opacity -= 0.01; // Fade out

        if (ring.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${ring.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        return true;
      });

      // Draw nodes
      nodes.sourceNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)'; // Blue for source
        ctx.fill();
        
        // Pulsing animation
        const pulseScale = 1 + Math.sin(Date.now() / 1000) * 0.2;
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, 12 * pulseScale, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.stroke();
      });

      nodes.destinationNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.8)'; // Green for destination
        ctx.fill();
        
        // Pulsing animation
        const pulseScale = 1 + Math.sin(Date.now() / 1000 + Math.PI) * 0.2;
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, 12 * pulseScale, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
        ctx.stroke();
      });

      // Update and draw dots
      const updatedDots = dots.filter(dot => {
        const elapsed = now - dot.startTime;
        const progress = Math.min(elapsed / dot.duration, 1);
        
        if (progress >= 1) return false;
        
        // Calculate position
        const x = dot.startNode.position.x + (dot.endNode.position.x - dot.startNode.position.x) * progress;
        const y = dot.startNode.position.y + (dot.endNode.position.y - dot.startNode.position.y) * progress;
        
        // Draw dot with varying size
        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, Math.PI * 2);
        
        // Fade in/out based on progress
        const opacity = Math.min(progress * 2, (1 - progress) * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        return true;
      });
      
      setDots(updatedDots);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [nodes, dots]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Get the container's dimensions
      const container = canvas.parentElement;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      
      // Set the canvas size to match the container's smallest dimension
      canvas.width = size;
      canvas.height = size;
      
      // Set a reasonable pixel density for retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      
      // Scale the canvas context to match the device pixel ratio
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      // Set the display size
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      // Regenerate nodes with new dimensions
      const sourceNodes: Node[] = [];
      const destinationNodes: Node[] = [];

      // Generate source nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        sourceNodes.push({
          id: `source-${i}`,
          position: generatePosition(sourceNodes),
          type: 'source'
        });
      }

      // Generate destination nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        destinationNodes.push({
          id: `destination-${i}`,
          position: generatePosition([...sourceNodes, ...destinationNodes]),
          type: 'destination'
        });
      }

      setNodes({ sourceNodes, destinationNodes });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.1)'
      }}
    />
  );
} 
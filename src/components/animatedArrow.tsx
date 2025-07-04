"use client";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ArrowRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants: Variants = {
  normal: { d: "M5 12h14" },
  animate: {
    d: ["M5 12h14", "M5 12h9", "M5 12h14"],
    transition: {
      duration: 0.4,
    },
  },
};

const secondaryPathVariants: Variants = {
  normal: { d: "m12 5 7 7-7 7", x: 0 },
  animate: {
    d: "m12 5 7 7-7 7",
    x: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const Animatedbutton = forwardRef<ArrowRightIconHandle, ArrowRightIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className, "flex flex-row items-center")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <a 
          href="mailto:rehansiddique962@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 text-xl font-light w-full"
        >
          
          <span className="bg-gradient-to-l to-orange-600 from-purple-600 text-xl font-semibold text-transparent bg-clip-text">
           Let's Talk
          </span>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox=""
          fill="none"
          stroke="#c34dea"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-rotate-50"
        >
          <motion.path
            d="M5 12h14"
            variants={pathVariants}
            animate={controls}
          />
          <motion.path
            d="m12 5 7 7-7 7"
            variants={secondaryPathVariants}
            animate={controls}
          />
        </svg>
      </div>
    );
  }
);

Animatedbutton.displayName = "ArrowRightIcon";

export { Animatedbutton };

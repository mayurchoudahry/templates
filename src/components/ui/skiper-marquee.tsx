"use client"

import { JSX, useEffect, useId, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Snowflake } from "lucide-react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: unknown
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

const tiles = [
  { icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 120"
      className="w-full h-full"
      fill="none"
    >
      <g>
        <path d="M200.1,27.4c-23.7,0-45.6,3.2-62.7,8.9c-9.7,3.2-17.3,7-22.5,11.4c-4.5,3.7-7.2,7.4-7.2,10.7c0,3.2,2.7,6.9,7.2,10.6c5.2,4.3,12.8,8.2,22.5,11.4c17.1,5.7,39,8.9,62.7,8.9c23.7,0,45.6-3.2,62.7-8.9c9.7-3.2,17.3-7,22.5-11.4c4.5-3.7,7.2-7.4,7.2-10.6c0-3.2-2.7-6.9-7.2-10.7c-5.2-4.3-12.8-8.2-22.5-11.4C245.7,30.6,223.8,27.4,200.1,27.4z M200.1,34.5c20.8,0,40.1,2.6,54.4,7.2c7.4,2.4,13.3,5.3,16.7,8c2.4,1.9,3.6,3.6,3.6,4.9c0,1.3-1.2,3-3.6,4.9c-3.4,2.7-9.3,5.6-16.7,8c-14.3,4.6-33.6,7.2-54.4,7.2c-20.8,0-40.1-2.6-54.4-7.2c-7.4-2.4-13.3-5.3-16.7-8c-2.4-1.9-3.6-3.6-3.6-4.9c0-1.3,1.2-3,3.6-4.9c3.4-2.7,9.3-5.6,16.7-8C160,37.1,179.3,34.5,200.1,34.5z" fill="#0058A7"/>
        <path d="M200.1,65.7c-19.3,0-37.2,1.7-50.6,4.8c-10.6,2.5-18.3,5.7-22.6,9.2c-2.7,2.2-4.2,4.2-4.2,6.1c0,1.9,1.5,3.9,4.2,6.1c4.3,3.5,12,6.7,22.6,9.2c13.4,3.1,31.3,4.8,50.6,4.8c19.3,0,37.2-1.7,50.6-4.8c10.6-2.5,18.3-5.7,22.6-9.2c2.7-2.2,4.2-4.2,4.2-6.1c0-1.9-1.5-3.9-4.2-6.1c-4.3-3.5-12-6.7-22.6-9.2C237.3,67.4,219.4,65.7,200.1,65.7z M200.1,72.1c17.7,0,34.2,1.5,46.6,4.1c8.6,1.8,15,4,18.3,6.1c1.6,1,2.4,2,2.4,2.7c0,0.7-0.8,1.7-2.4,2.7c-3.3,2.1-9.7,4.3-18.3,6.1c-12.4,2.6-28.9,4.1-46.6,4.1c-17.7,0-34.2-1.5-46.6-4.1c-8.6-1.8-15-4-18.3-6.1c-1.6-1-2.4-2-2.4-2.7c0-0.7,0.8-1.7,2.4-2.7c3.3-2.1,9.7-4.3,18.3-6.1C165.9,73.6,182.4,72.1,200.1,72.1z" fill="#0058A7"/>
      </g>
    </svg>
  ),
  },
  {
    icon: <Snowflake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 "></div>
    ),
  },
  {
    icon: <Snowflake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 "></div>
    ),
  },
  {
    icon: <Snowflake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 "></div>
    ),
  },
  {
    icon: <Snowflake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 "></div>
    ),
  },
]

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function Card(card: { icon: JSX.Element; bg?: JSX.Element }) {
  const id = useId()
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {card.icon}
      {card.bg && card.bg}
    </motion.div>
  )
}

export function SkiperMarquee({
  children,
  className,
  pauseOnHover = false,
  repeat = 2,
  ...props
}: {
  children?: React.ReactNode,
  className?: string,
  pauseOnHover?: boolean,
  repeat?: number,
  [key: string]: unknown
}) {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([])
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([])
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([])
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]))
      setRandomTiles2(shuffleArray([...tiles]))
      setRandomTiles3(shuffleArray([...tiles]))
      setRandomTiles4(shuffleArray([...tiles]))
    }
  }, [])

  // If children are provided, use them. Otherwise, fall back to the old tile behavior.
  if (children) {
    return (
      <Marquee
        className={className}
        pauseOnHover={pauseOnHover}
        repeat={repeat}
        {...props}
      >
        {children}
      </Marquee>
    );
  }

  // Old fallback behavior:
  return (
    <section id="cta">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:10s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:25s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <div className="absolute ">
              <div className="bg-backtround absolute inset-0 -z-10  rounded-full opacity-40 blur-xl dark:bg-background" />
            </div>
            <div className="to-backtround absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  )
}

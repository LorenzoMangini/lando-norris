"use client"

import { useEffect, useRef } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

const ASSETS = {
  diffuse: "/hero/diffuse.webp",
  alpha: "/hero/alpha.webp",
  depth: "/hero/depth.webp",
  normal: "/hero/normal.webp",

  helmetBase: "/hero/Norris_Helmet_mat_BaseColorYellow.webp",
  glassBase: "/hero/Norris_Glass_mat_BaseColor.webp",
  glassNormal: "/hero/Norris_Glass_mat_Normal.webp",
  discoMask: "/hero/disco_mask-01.webp",
  discoMatcap: "/hero/disco_matcap-01.webp",
  flare: "/hero/disco_lens-flare-15.webp",

  shadow: "/hero/shadow.webp",
  shadowSoft: "/hero/shadow-softer-edit.webp",
}

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f4f3ee]">
      <svg
        className="absolute inset-[-10%] h-[120%] w-[120%] text-[#cacbbb]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1">
          <path d="M-120 480C140 360 240 470 360 620S660 690 750 510" />
          <path d="M-60 710C170 590 330 720 520 580" />
          <path d="M1020-80C980 170 1160 230 1360 170S1640 230 1580 360" />
          <path d="M1180 760C1320 600 1510 640 1690 520" />
          <ellipse cx="730" cy="360" rx="260" ry="160" transform="rotate(-18 730 360)" />
          <ellipse cx="1450" cy="250" rx="260" ry="90" transform="rotate(8 1450 250)" />
        </g>
      </svg>
    </div>
  )
}

function NextRaceCard() {
  return (
    <motion.aside
      className="absolute bottom-6 left-4 z-40 h-[170px] w-[88px] text-[#535450] md:left-5"
      initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 rounded-sm border border-[#535450] bg-[#f4f3ee]/55 backdrop-blur-[1px]" />

      <div className="relative flex h-full flex-col items-center text-center">
        <p className="w-full px-2 pt-2 text-left text-[8px] font-black uppercase leading-none">
          Next Race
        </p>

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <svg viewBox="0 0 112 112" className="h-11 w-14" fill="none">
            <path
              d="M31 72c-9-5-13-15-10-25 4-14 17-18 29-15 8 2 13-2 19-8 8-8 18-7 25 0 8 8 5 21-5 26-7 4-16 2-24 6-10 5-10 20-22 22-4 1-8-1-12-6Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>

          <span className="text-[8px] font-black uppercase leading-none">
            Monaco GP
          </span>
        </div>

        <div className="h-px w-[72%] bg-current" />

        <div className="flex h-[70px] flex-col items-center justify-center gap-1">
          <div className="h-7 w-12 rounded-t-full border border-current opacity-70" />
          <p className="whitespace-pre-line text-[7px] font-black uppercase leading-[1.05]">
            Mclaren F1{"\n"}Since 2019
          </p>
        </div>
      </div>
    </motion.aside>
  )
}

function HelmetReveal({
  x,
  y,
}: {
  x: any
  y: any
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-30"
      style={{
        x,
        y,
        clipPath: "circle(15% at 50% 25%)",
      }}
    >
      <div className="absolute left-1/2 top-[4%] h-[45%] w-[43%] -translate-x-1/2 overflow-hidden rounded-[48%_52%_45%_55%/38%_44%_56%_62%]">
        <img
          src={ASSETS.helmetBase}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <img
          src={ASSETS.discoMatcap}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay"
          style={{
            WebkitMaskImage: `url(${ASSETS.discoMask})`,
            maskImage: `url(${ASSETS.discoMask})`,
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        />

        <div className="absolute left-0 top-[34%] h-[20%] w-full bg-white" />

        <img
          src={ASSETS.glassBase}
          alt=""
          className="absolute left-0 top-[40%] h-[28%] w-full object-cover brightness-[0.35]"
        />

        <img
          src={ASSETS.flare}
          alt=""
          className="absolute left-[30%] top-[-8%] h-[45%] w-[45%] object-contain opacity-45 mix-blend-screen"
        />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#f4f3ee]" />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX / window.innerWidth)
      mouseY.set(event.clientY / window.innerHeight)
    }

    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const spring = { stiffness: 70, damping: 24, mass: 0.7 }

  const bgX = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), spring)
  const bgY = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), spring)

  const personX = useSpring(useTransform(mouseX, [0, 1], [-16, 16]), spring)
  const personY = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), spring)

  const helmetX = useSpring(useTransform(mouseX, [0, 1], [-28, 28]), spring)
  const helmetY = useSpring(useTransform(mouseY, [0, 1], [-18, 18]), spring)

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])
  const bgScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const personScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const personScale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  return (
    <section
      ref={sectionRef}
      className="relative h-[150svh] overflow-hidden bg-[#f4f3ee]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f4f3ee]">
        <motion.div
          className="absolute inset-0"
          style={{
            x: prefersReducedMotion ? 0 : bgX,
            y: prefersReducedMotion ? 0 : bgY,
            scale: prefersReducedMotion ? 1 : bgScale,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: prefersReducedMotion ? 0 : bgScrollY }}
          >
            <Background />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[-2px] left-1/2 z-20 h-[96svh] w-[min(78vw,760px)] -translate-x-1/2"
          initial={{ opacity: 0, y: 34, scale: 1.02 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: prefersReducedMotion ? 0 : personScrollY,
            scale: prefersReducedMotion ? 1 : personScale,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              x: prefersReducedMotion ? 0 : personX,
              y: prefersReducedMotion ? 0 : personY,
            }}
          >
            <img
              src={ASSETS.shadowSoft}
              alt=""
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain opacity-45"
            />

            <img
              src={ASSETS.diffuse}
              alt="Lando Norris"
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              decoding="async"
              fetchPriority="high"
              style={{
                WebkitMaskImage: `url(${ASSETS.alpha})`,
                maskImage: `url(${ASSETS.alpha})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center bottom",
                maskPosition: "center bottom",
              }}
            />

            <img
              src={ASSETS.normal}
              alt=""
              className="pointer-events-none absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain opacity-[0.08] mix-blend-overlay"
            />

            <HelmetReveal
              x={prefersReducedMotion ? 0 : helmetX}
              y={prefersReducedMotion ? 0 : helmetY}
            />
          </motion.div>
        </motion.div>

        <NextRaceCard />
      </div>
    </section>
  )
}
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  const dotX = useSpring(cursorX, { stiffness: 900, damping: 55 })
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 55 })
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 24 })
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 24 })

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      if (!visible) setVisible(true)

      const target = event.target instanceof Element ? event.target : null
      setHovered(Boolean(target?.closest('a, button, input, textarea, select, [data-cursor-hover]')))
    }
    const onLeaveWindow = () => setVisible(false)
    const onEnterWindow = () => setVisible(true)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeaveWindow)
    window.addEventListener('pointerenter', onEnterWindow)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeaveWindow)
      window.removeEventListener('pointerenter', onEnterWindow)
    }
  }, [visible, cursorX, cursorY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full"
          style={{
            background: '#d2ff00',
            boxShadow: '0 0 0 1px rgba(40,44,32,0.45), 0 0 18px rgba(210,255,0,0.8)',
          }}
          animate={{ width: hovered ? 10 : 6, height: hovered ? 10 : 6 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-white"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovered ? 54 : 34,
          height: hovered ? 54 : 34,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}

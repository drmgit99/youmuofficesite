import { useEffect, useState, useRef } from 'react'

interface UseCountUpProps {
  end: number
  duration?: number
  startOnView?: boolean
  decimals?: number
}

export const useCountUp = ({
  end,
  duration = 2000,
  startOnView = true,
  decimals = 0,
}: UseCountUpProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }

    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [startOnView, hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(end * easeOutQuart)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, hasStarted])

  return { count: count.toFixed(decimals), ref }
}

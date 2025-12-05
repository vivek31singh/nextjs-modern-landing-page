"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

interface CounterProps {
  /**
   * Target value to count to
   */
  target: number
  /**
   * Duration in seconds
   */
  duration?: number
  /**
   * Suffix to display after number
   */
  suffix?: string
  /**
   * Prefix to display before number
   */
  prefix?: string
}

/**
 * Counter Component
 * Animated number counter that increments from 0 to target
 * Uses Framer Motion for GPU-accelerated animation
 */
export function Counter({ target, duration = 2.5, suffix = "", prefix = "" }: CounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayValue = useTransform(rounded, (v) => `${prefix}${v}${suffix}`)
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
        animate(count, target, {
          duration,
          ease: "easeOut",
        })
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [count, target, duration, isVisible])

  return (
    <motion.span ref={ref} className="font-bold">
      {displayValue}
    </motion.span>
  )
}

interface StatisticItem {
  /**
   * Counter value
   */
  value: number
  /**
   * Label for the statistic
   */
  label: string
  /**
   * Suffix for the number
   */
  suffix?: string
  /**
   * Prefix for the number
   */
  prefix?: string
}

interface StatisticsProps {
  /**
   * Array of statistics to display
   */
  statistics: StatisticItem[]
}

/**
 * Statistics Component
 * Displays animated counter cards for key metrics
 */
export function Statistics({ statistics }: StatisticsProps) {
  return (
    <section id="stats" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/5 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-foreground/60">Join thousands of teams building the future</p>
        </motion.div>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="glass glass-hover p-6 rounded-xl mb-4 transition-all">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={2.5} />
                </motion.div>
              </div>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

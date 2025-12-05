"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  /**
   * Icon component to display
   */
  icon: LucideIcon
  /**
   * Feature title
   */
  title: string
  /**
   * Feature description
   */
  description: string
  /**
   * Optional gradient color class
   */
  gradient?: string
  /**
   * Optional index for staggered animation
   */
  index?: number
}

/**
 * FeatureCard Component
 * Individual card with glassmorphism effect, icon, and hover animations
 * Implements GPU-accelerated transforms for performance
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "from-primary to-secondary",
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <div className="glass glass-hover relative h-full p-6 rounded-xl overflow-hidden">
        {/* Background gradient accent */}
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-3xl`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon container */}
          <motion.div
            className={`inline-block p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4 group-hover:shadow-lg transition-shadow`}
            whileHover={{ rotate: 6, scale: 1.05 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>

          {/* Description */}
          <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient} w-0 group-hover:w-full transition-all duration-300`}
        />
      </div>
    </motion.div>
  )
}

interface FeaturesGridProps {
  /**
   * Array of features to display
   */
  features: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>
}

/**
 * FeaturesGrid Component
 * Responsive grid layout with glassmorphic cards
 */
export function FeaturesGrid({ features }: FeaturesGridProps) {
  const gradients = ["from-primary to-secondary", "from-secondary to-accent", "from-accent to-primary"]

  return (
    <section id="features" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Powerful Features Built for Success
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Everything you need to build, deploy, and scale modern web applications with confidence
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={gradients[index % gradients.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

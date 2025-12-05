"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  /**
   * Main headline
   */
  headline: string
  /**
   * Subheading text
   */
  subheading: string
  /**
   * Primary CTA button text
   */
  primaryCta: string
  /**
   * Secondary CTA button text
   */
  secondaryCta: string
  /**
   * Array of benefits to highlight
   */
  benefits: string[]
}

/**
 * CTASection Component
 * High-conversion call-to-action section with gradient buttons and benefits list
 */
export function CTASection({ headline, subheading, primaryCta, secondaryCta, benefits }: CTASectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="cta" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/5 pointer-events-none" />
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass p-8 md:p-12 lg:p-16 rounded-2xl"
        >
          {/* Content */}
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              {headline}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
              {subheading}
            </motion.p>
          </div>

          {/* Benefits */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-shadow"
            >
              {primaryCta}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              {secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

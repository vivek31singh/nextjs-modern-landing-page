"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

interface FooterLink {
  /**
   * Link label
   */
  label: string
  /**
   * Link URL
   */
  href: string
}

interface FooterColumn {
  /**
   * Column title
   */
  title: string
  /**
   * Links in the column
   */
  links: FooterLink[]
}

interface FooterProps {
  /**
   * Footer columns
   */
  columns: FooterColumn[]
  /**
   * Company name
   */
  companyName: string
  /**
   * Copyright year
   */
  copyrightYear: number
}

/**
 * Footer Component
 * Multi-column footer with social links and copyright information
 */
export function Footer({ columns, companyName, copyrightYear }: FooterProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 md:py-16 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">{companyName}</h3>
            <p className="text-sm text-foreground/60">
              Building the future of web development, one innovation at a time.
            </p>
          </motion.div>

          {/* Links */}
          {columns.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-semibold text-sm mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © {copyrightYear} {companyName}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

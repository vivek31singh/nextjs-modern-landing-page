"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/feature-card"
import { Statistics } from "@/components/counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Zap, Rocket, Shield, Gauge, Code2, Users } from "lucide-react"

/**
 * Home Page Component
 * Sophisticated landing page with all sections and animations
 * Optimized with dynamic imports for heavy components
 */
export default function Home() {
  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "Statistics", href: "#stats" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "CTA", href: "#cta" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with modern web technologies and best practices for blazing-fast load times.",
    },
    {
      icon: Rocket,
      title: "Easy to Deploy",
      description: "One-click deployment to any cloud platform with automatic scaling and zero downtime updates.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, compliance, and advanced threat detection built-in.",
    },
    {
      icon: Gauge,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with real-time metrics, insights, and customizable reports.",
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Simple API, extensive documentation, and SDK support for all major languages and frameworks.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams with role-based access, activity logs, and seamless collaboration tools.",
    },
  ]

  const statistics = [
    { value: 10000, suffix: "+", label: "Active Users" },
    { value: 99, suffix: ".9%", label: "Uptime" },
    { value: 50, suffix: "ms", label: "Response Time" },
    { value: 180, suffix: "+", label: "Countries" },
  ]

  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we deploy and manage our applications. The performance improvements are incredible.",
      name: "Sarah Chen",
      title: "CTO, TechCorp",
      rating: 5,
      avatar: "SC",
    },
    {
      quote:
        "Outstanding support and documentation. Their team went above and beyond to help us integrate everything seamlessly.",
      name: "Michael Rodriguez",
      title: "Founder, StartupXYZ",
      rating: 5,
      avatar: "MR",
    },
    {
      quote: "The developer experience is phenomenal. Our entire team was productive within hours of implementation.",
      name: "Emma Williams",
      title: "Tech Lead, InnovateCo",
      rating: 5,
      avatar: "EW",
    },
    {
      quote: "Best investment we made this year. ROI was evident within the first month of deployment.",
      name: "James Thompson",
      title: "VP Engineering, Enterprise Inc",
      rating: 5,
      avatar: "JT",
    },
  ]

  const ctaBenefits = [
    "Unlimited scalability and performance",
    "Dedicated customer success team",
    "Custom integrations and API access",
    "Priority support and SLA guarantees",
  ]

  const footerColumns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Security", href: "#" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Community", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation links={navigationLinks} />

      {/* Hero Section */}
      <HeroSection
        headline="The Future of Web Development"
        subheading="Build, deploy, and scale your applications with confidence. Our platform provides everything you need to succeed in the modern web."
        primaryCta="Get Started"
        secondaryCta="Learn More"
      />

      {/* Features Section */}
      <FeaturesGrid features={features} />

      {/* Statistics Section */}
      <Statistics statistics={statistics} />

      {/* Testimonials Section */}
      <TestimonialsCarousel testimonials={testimonials} autoPlayInterval={6000} />

      {/* CTA Section */}
      <CTASection
        headline="Ready to Transform Your Business?"
        subheading="Join thousands of companies using our platform to build and scale their applications. Start your free trial today—no credit card required."
        primaryCta="Start Free Trial"
        secondaryCta="Schedule Demo"
        benefits={ctaBenefits}
      />

      {/* Footer */}
      <Footer columns={footerColumns} companyName="Platform" copyrightYear={new Date().getFullYear()} />
    </main>
  )
}

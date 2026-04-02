// src/config/siteConfig.ts
import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Glow by Grace",
  tagline: "Luxury Hair & Makeup Studio - Where Beauty Meets Excellence",
  logo: "/images/logo.svg",
  heroImage: "https://images.unsplash.com/photo-1560066984-138dad7c30f2?w=1600&h=900&fit=crop",

  services: [
    {
      id: 1,
      name: "Hair Styling",
      price: "KSh 2,000",
      duration: "1-2 hrs",
      popular: true,
      description: "Professional blow-dry, curls, or sleek straightening",
      features: ["Heat protectant", "Finishing spray", "Style consultation"],
    },
    {
      id: 2,
      name: "Makeup Application",
      price: "KSh 3,500",
      duration: "1.5 hrs",
      popular: true,
      description: "Flawless base, contour, and premium products",
      features: ["HD foundation", "False lashes", "Lipstick to keep"],
    },
    {
      id: 3,
      name: "Bridal Package",
      price: "KSh 15,000",
      duration: "Full day",
      popular: false,
      description: "Complete bridal transformation with trial session",
      features: ["Pre-wedding trial", "Bridal touch-up kit", "On-location service"],
    },
    {
      id: 4,
      name: "Braiding & Twists",
      price: "KSh 4,000+",
      duration: "3-5 hrs",
      popular: false,
      description: "Professional braiding services",
      features: ["Knotless option", "Bulk ordering", "Maintenance tips"],
    },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop", alt: "Bridal makeup", title: "Wedding Glam" },
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop", alt: "Hair styling", title: "Elegant Curls" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop", alt: "Makeup application", title: "Natural Glow" },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop", alt: "Braiding", title: "Knotless Braids" },
  ],

  about: {
    title: "Meet Grace",
    description: "With 8+ years of experience in luxury beauty, I specialize in making every client feel confident and radiant.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop",
    experience: "8+ Years",
    certification: ["CIDESCO Certified", "London Beauty Academy", "Advanced Bridal Specialist"],
  },

  contact: {
    phone: "+254719165008",
    whatsapp: "https://wa.me/254719165008",
    email: "oohmycode@gmail.com",
    instagram: "https://instagram.com/glowbygrace",
    location: "Westlands, Nairobi",
    hours: "Mon-Sat: 9am - 6pm | Sun: Closed",
  },
};
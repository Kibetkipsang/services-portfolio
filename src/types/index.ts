// src/types/index.ts
export interface Service {
  id: string | number;
  name: string;
  price: string;
  duration: string;
  popular: boolean;
  description: string;
  features: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  location: string;
  hours: string;
}

export interface AboutInfo {
  title: string;
  description: string;
  image: string;
  experience: string;
  certification: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  logo: string;
  heroImage: string;
  services: Service[];
  gallery: GalleryImage[];
  about: AboutInfo;
  contact: ContactInfo;
}
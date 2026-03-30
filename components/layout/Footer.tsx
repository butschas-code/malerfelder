"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { COMPANY, NAVIGATION } from "@/lib/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[rgb(var(--ink))]">
      {/* Main Footer */}
<<<<<<< HEAD
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
=======
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
>>>>>>> origin/main
          {/* Left: Company Info & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt={COMPANY.name}
                  width={200}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-[rgb(var(--ink-muted))] text-sm leading-relaxed max-w-md">
                Mit über 16 Jahren Erfahrung und stetiger Weiterbildung Ihr kompetenter Partner für Malerarbeiten in der Region Luzern.
              </p>
            </div>

            {/* NAP - Name, Address, Phone */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(var(--brand))] mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">{COMPANY.name}</p>
                  <p className="text-[rgb(var(--ink-muted))]">{COMPANY.address.street}</p>
                  <p className="text-[rgb(var(--ink-muted))]">{COMPANY.address.zip} {COMPANY.address.city}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(var(--brand))] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.contact.phoneLink}`}
                  className="text-sm hover:text-[rgb(var(--brand))] transition-colors"
                >
                  {COMPANY.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[rgb(var(--brand))] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-sm hover:text-[rgb(var(--brand))] transition-colors"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>

            {/* Route planen button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[rgb(var(--paper-dark))] hover:bg-[rgb(var(--line))] rounded-full text-sm font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Route planen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Right: Map & Navigation */}
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
>>>>>>> origin/main
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <h4 className="font-heading text-lg font-medium mb-4">Standort</h4>
              <div className="aspect-video rounded-xl overflow-hidden bg-[rgb(var(--paper-dark))]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.0!2d8.3!3d47.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA2JzAwLjAiTiA4wrAxNyczNi4wIkU!5e0!3m2!1sde!2sch!4v1600000000000!5m2!1sde!2sch&q=${encodeURIComponent(
                    `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
                  )}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Standort ${COMPANY.name}`}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-heading text-lg font-medium mb-4">Navigation</h4>
              <nav className="space-y-2">
                {NAVIGATION.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--brand))] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgb(var(--line))]">
<<<<<<< HEAD
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
=======
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
>>>>>>> origin/main
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[rgb(var(--ink-muted))]">
              © {currentYear} {COMPANY.name}
            </p>
            <nav className="flex items-center space-x-6">
              {NAVIGATION.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[rgb(var(--ink-muted))] hover:text-[rgb(var(--brand))] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

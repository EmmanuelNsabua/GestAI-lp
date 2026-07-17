import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Accueil' },
  { href: '#problemes', label: 'Solution' },
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#tarifs', label: 'Tarifs' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    // Wait for drawer close animation then scroll
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 280);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-saphir tracking-tight">
                Gest<span className="text-cyan">AI</span>
              </span>
            </a>

            {/* Center Links (Desktop) */}
            <nav className="hidden md:flex space-x-10">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-base font-medium text-saphir-light hover:text-saphir transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action (Desktop) */}
            <div className="hidden md:flex items-center">
              <a
                href="#waitlist"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 py-2.5 border-2 border-saphir rounded-full text-base font-semibold text-saphir bg-transparent hover:bg-saphir hover:text-white transition-all duration-300"
              >
                Rejoindre
              </a>
            </div>

            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-saphir hover:bg-saphir/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 flex flex-col space-y-1">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleMobileNav(link.href)}
                    className="text-left w-full text-lg font-medium text-saphir py-3 border-b border-gray-100 last:border-0 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleMobileNav('#waitlist')}
                  className="mt-4 w-full text-center px-6 py-3 rounded-xl text-base font-semibold text-white bg-saphir hover:bg-saphir-light transition-all duration-300"
                >
                  Accès bêta gratuit →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
};

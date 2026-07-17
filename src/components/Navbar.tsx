import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-saphir tracking-tight">
                Gest<span className="text-cyan">AI</span>
              </span>
            </a>
          </div>

          {/* Center Links (Desktop only) */}
          <nav className="hidden md:flex space-x-10">
            <a href="#hero" className="text-base font-medium text-saphir-light hover:text-saphir transition-colors">
              Accueil
            </a>
            <a href="#problemes" className="text-base font-medium text-saphir-light hover:text-saphir transition-colors">
              Solution
            </a>
            <a href="#fonctionnalites" className="text-base font-medium text-saphir-light hover:text-saphir transition-colors">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="text-base font-medium text-saphir-light hover:text-saphir transition-colors">
              Tarifs
            </a>
          </nav>

          {/* Right Action (Log In / CTA) */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a 
              href="#waitlist" 
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2.5 border-2 border-saphir rounded-full shadow-sm text-base font-semibold text-saphir bg-transparent hover:bg-saphir hover:text-white transition-all duration-300"
            >
              Connexion
            </a>
          </div>
          
        </div>
      </div>
    </motion.header>
  );
};

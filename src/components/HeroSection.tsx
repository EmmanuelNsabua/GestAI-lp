import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showThinking, setShowThinking] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  
  const fullText = "Quels sont nos produits en surstock ?";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowThinking(true), 400);
        setTimeout(() => {
          setShowThinking(false);
          setShowResponse(true);
        }, 1800);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl tracking-tight font-extrabold text-saphir sm:text-5xl md:text-6xl"
            >
              <span className="block xl:inline">Ne gérez plus votre stock.</span>{' '}
              <span className="block text-emerald">Parlez-lui.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-3 text-base text-saphir-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              La première application de gestion de stock par Intelligence Artificielle 
              conçue pour tous les commerçants et gestionnaires de stock. Pilotez vos flux, passez vos 
              commandes fournisseurs et analysez vos marges par simple message texte 
              ou vocal.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <a 
                href="#waitlist" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-saphir hover:bg-saphir-light shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Devenir testeur →
              </a>
              <p className="mt-3 text-sm text-saphir-light/70 font-medium">
                Rejoignez les centaines de commerçants qui co-conçoivent l'avenir de la logistique.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column - Interactive Demo */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* Increased padding here (p-6 sm:p-8) */}
            <div className="relative mx-auto w-full rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] lg:max-w-md bg-white border border-gray-100 p-6 sm:p-8 z-10">
              
              {/* Fake UI Header */}
              <div className="flex items-center space-x-4 mb-8 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center">
                  <span className="text-cyan font-bold text-lg">IA</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-saphir">Assistant GestAI</h3>
                  <p className="text-sm text-emerald flex items-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald mr-1.5 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    En ligne
                  </p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="space-y-6">
                
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-saphir text-white rounded-2xl rounded-tr-sm px-5 py-4 max-w-[90%] shadow-md">
                    {/* Increased font size */}
                    <p className="text-base min-h-[24px] leading-relaxed">{typedText}<span className="animate-pulse opacity-70">|</span></p>
                  </div>
                </div>

                {/* AI Thinking */}
                {showThinking && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm border border-gray-100">
                      <div className="flex space-x-2 items-center h-6">
                        <motion.div className="w-2 h-2 bg-[#00F2FE] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                        <motion.div className="w-2 h-2 bg-[#00F2FE] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                        <motion.div className="w-2 h-2 bg-[#00F2FE] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* AI Response */}
                {showResponse && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm p-5 shadow-lg border border-gray-100 w-full max-w-[95%]">
                      <p className="text-base text-saphir mb-4 font-semibold">Voici vos produits en surstock :</p>
                      
                      {/* Fake Chart SVG */}
                      <div className="bg-gray-50/80 rounded-xl p-4">
                        <svg className="w-full h-32" viewBox="0 0 100 40" preserveAspectRatio="none">
                          {/* Rx=4 for rounded corners, fluo cyan #00F2FE */}
                          <motion.rect initial={{ height: 0, y: 40 }} animate={{ height: 28, y: 12 }} transition={{ duration: 0.8, ease: "easeOut" }} x="8" width="14" className="fill-[#00F2FE]" rx="4" />
                          <motion.rect initial={{ height: 0, y: 40 }} animate={{ height: 15, y: 25 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} x="33" width="14" className="fill-saphir/20" rx="4" />
                          <motion.rect initial={{ height: 0, y: 40 }} animate={{ height: 35, y: 5 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} x="58" width="14" className="fill-[#00F2FE]" rx="4" />
                          <motion.rect initial={{ height: 0, y: 40 }} animate={{ height: 20, y: 20 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} x="83" width="14" className="fill-saphir/20" rx="4" />
                        </svg>
                        <div className="flex justify-between mt-3 text-[11px] text-gray-500 font-bold px-1 uppercase tracking-wider">
                          <span>Riz</span>
                          <span>Huile</span>
                          <span>Sucre</span>
                          <span>Farine</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
            
            {/* Decorative blobs behind the mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-[#00F2FE]/20 to-emerald/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};


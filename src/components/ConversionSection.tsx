import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const ConversionSection = () => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setErrorMessage("Veuillez entrer une adresse e-mail.");
      setFormState('error');
      return;
    }
    
    if (!validateEmail(email)) {
      setErrorMessage("L'adresse e-mail n'est pas valide.");
      setFormState('error');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xkodjlor', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setFormState('success');
        setEmail('');
      } else {
        const data = await response.json();
        const msg = data?.errors?.[0]?.message || "Une erreur est survenue. Réessayez.";
        setErrorMessage(msg);
        setFormState('error');
      }
    } catch {
      setErrorMessage("Connexion impossible. Vérifiez votre connexion et réessayez.");
      setFormState('error');
    }
  };

  return (
    <section id="waitlist" className="bg-background py-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan/5 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold text-saphir sm:text-4xl mb-6">
          Le futur du commerce s'écrit avec vous.
        </h2>
        <p className="text-lg text-saphir-light/80 mb-10 max-w-2xl mx-auto">
          Nous finalisons actuellement le développement de l'application. Nous recherchons 
          un groupe restreint de commerçants ambitieux pour tester la version 
          bêta et façonner l'outil à leurs besoins réels.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 text-center"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-2xl font-bold text-saphir mb-2">Inscription confirmée !</h3>
                <p className="text-saphir-light/70">
                  Merci pour votre confiance. Nous vous contacterons très prochainement 
                  avec vos accès bêta testeur.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formState === 'error') setFormState('idle');
                    }}
                    placeholder="Votre adresse e-mail professionnelle"
                    disabled={formState === 'submitting'}
                    className={`w-full px-5 py-4 bg-gray-50 border ${formState === 'error' ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-cyan focus:border-cyan'} rounded-xl text-saphir placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200`}
                  />
                </div>
                
                {formState === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-red-500 text-sm text-left flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1.5" />
                    {errorMessage}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-saphir hover:bg-saphir-light shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saphir transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Validation en cours...
                    </>
                  ) : (
                    <>
                      Devenir testeur
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Vos données sont sécurisées et ne seront jamais partagées.
                </p>
              </motion.form>
            )}
            
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} GestAI. Tous droits réservés.
        </p>
      </div>
    </section>
  );
};

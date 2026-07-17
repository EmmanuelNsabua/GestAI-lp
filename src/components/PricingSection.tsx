import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0",
      description: "Pour découvrir la puissance de l'IA.",
      features: [
        "Jusqu'à 50 produits en stock",
        "100 requêtes IA par mois",
        "Support communautaire"
      ]
    },
    {
      name: "Micro-boutiques",
      price: "15",
      isPopular: true,
      description: "Idéal pour les commerçants indépendants.",
      features: [
        "Produits illimités",
        "500 requêtes IA par mois",
        "Support prioritaire par email"
      ]
    },
    {
      name: "Grossistes",
      price: "50",
      description: "Pour les entrepôts et gros volumes.",
      features: [
        "Produits illimités",
        "Requêtes IA illimitées",
        "Accompagnement dédié & setup 1-to-1"
      ]
    }
  ];

  return (
    <section id="tarifs" className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-saphir sm:text-4xl"
          >
            Des tarifs adaptés à <span className="text-emerald">votre taille.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-saphir-light/80"
          >
            Que vous démarriez votre activité ou que vous gériez plusieurs entrepôts, 
            nous avons un plan fait pour vous.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                plan.isPopular 
                ? 'border-2 border-cyan shadow-[0_20px_40px_rgba(6,182,212,0.15)] scale-105 z-10' 
                : 'border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-xl'
              } transition-all duration-300 ease-in-out`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-4">
                  <span className="bg-cyan text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-saphir mb-2">{plan.name}</h3>
                <p className="text-saphir-light/70 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <p className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-saphir">{plan.price}$</span>
                  <span className="ml-1 text-xl font-medium text-saphir-light/70">/mois</span>
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mr-3" />
                    <span className="text-saphir-light/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-auto block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.isPopular
                  ? 'bg-saphir text-white hover:bg-saphir-light shadow-md'
                  : 'bg-cyan/10 text-cyan hover:bg-cyan/20'
                }`}
              >
                Commencer
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

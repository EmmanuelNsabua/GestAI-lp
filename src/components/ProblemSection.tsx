import { motion } from 'framer-motion';
import { FileSpreadsheet, Clock, AlertTriangle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      // Using fill to simulate solid icons with pastel colors
      icon: <FileSpreadsheet className="h-8 w-8 text-[#FF8A65]" fill="#FF8A65" fillOpacity="0.2" />,
      bgColor: "bg-[#FF8A65]/10",
      title: "Trop de tableurs complexes",
      description: "Des fichiers Excel lourds, rigides, qui demandent des heures de formation et finissent toujours par planter ou contenir des erreurs."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-[#FF5252]" fill="#FF5252" fillOpacity="0.2" />,
      bgColor: "bg-[#FF5252]/10",
      title: "Ruptures invisibles",
      description: "Le décalage entre le stock réel et le système vous fait perdre des ventes, avec des clients frustrés qui partent à la concurrence."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#FFB74D]" fill="#FFB74D" fillOpacity="0.2" />,
      bgColor: "bg-[#FFB74D]/10",
      title: "Perte de temps de saisie",
      description: "Vous passez plus de temps derrière un écran à faire de la double saisie que sur votre cœur de métier avec vos fournisseurs et clients."
    }
  ];

  return (
    <section id="problemes" className="bg-[#f1f5f9] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-saphir sm:text-4xl"
          >
            Trop de tableurs, trop d'écrans, <span className="text-emerald">pas assez de temps.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-saphir-light/80"
          >
            Que vous gériez une boutique de quartier ou un entrepôt de gros, votre stock bouge à la minute près. 
            Les logiciels actuels sont devenus un fardeau plutôt qu'une aide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-3xl p-8 border border-white shadow-[0_8px_30px_rgba(15,23,42,0.06),0_2px_10px_rgba(15,23,42,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(15,23,42,0.12),0_10px_20px_rgba(15,23,42,0.08)] group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${problem.bgColor}`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-saphir mb-3">{problem.title}</h3>
              <p className="text-saphir-light/70 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

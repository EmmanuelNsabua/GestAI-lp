import { motion } from 'framer-motion';
import { MessageSquare, PackageCheck, BarChart3, ShieldAlert } from 'lucide-react';

export const FeatureSection = () => {
  const features = [
    {
      icon: <MessageSquare className="h-7 w-7 text-cyan" />,
      colorClass: "bg-cyan/10",
      title: "Le Chat Opérationnel",
      description: <>Plus aucun menu complexe. Écrivez ou dites simplement : <br/><span className="inline-block mt-2 mb-1 bg-cyan/10 text-cyan font-medium px-3 py-1 rounded-lg text-sm italic">"Quels sont nos produits en surstock dans l'allée B ?"</span><br/> L'application s'exécute instantanément.</>
    },
    {
      icon: <PackageCheck className="h-7 w-7 text-emerald" />,
      colorClass: "bg-emerald/10",
      title: "Réapprovisionnement Intelligent",
      description: "L'application anticipe vos ruptures en analysant vos historiques. Elle rédige elle-même le bon de commande. Vous validez d'un clic dans le chat."
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-purple-400" />,
      colorClass: "bg-purple-400/10",
      title: "Analyse Financière Instantanée",
      description: <>Demandez-lui : <br/><span className="inline-block mt-2 mb-1 bg-purple-400/10 text-purple-500 font-medium px-3 py-1 rounded-lg text-sm italic">"Quelle a été notre meilleure marge brute cette semaine ?"</span><br/> Plus besoin d'exporter des fichiers Excel, obtenez le chiffre précis en une seconde.</>
    },
    {
      icon: <ShieldAlert className="h-7 w-7 text-orange-400" />,
      colorClass: "bg-orange-400/10",
      title: "Gestion des Litiges sur le Pouce",
      description: <>Un colis arrive endommagé ? Prenez une photo, envoyez-la dans le chat : <br/><span className="inline-block mt-2 mb-1 bg-orange-400/10 text-orange-500 font-medium px-3 py-1 rounded-lg text-sm italic">"Gère le retour avec le fournisseur X"</span><br/> L'IA gèle le stock et envoie la réclamation.</>
    }
  ];

  const benefits = [
    { title: "Zéro formation requise", value: "Prise en main en 5 min chrono" },
    { title: "Réduction des ruptures", value: "- 35% grâce à l'IA" },
    { title: "Gain de temps massif", value: "Jusqu'à 2h libérées par jour" }
  ];

  return (
    <section id="fonctionnalites" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Solution Intro & Grid (Sticky Layout) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start mb-32 relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 mb-10 lg:mb-0 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-extrabold text-saphir sm:text-4xl leading-tight mb-6">
              Découvrez GestAI : Votre adjoint logistique <span className="text-cyan">disponible 24h/24.</span>
            </h2>
            <p className="text-lg text-saphir-light/80 leading-relaxed">
              Imaginez un assistant expert qui connaît votre entrepôt par cœur, automatise 
              vos tâches répétitives et à qui vous pouvez donner des ordres en langage 
              naturel, exactement comme si vous envoyiez un SMS à un collègue.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background rounded-3xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.colorClass}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-saphir mb-3 leading-snug">{feature.title}</h3>
                <p className="text-sm text-saphir-light/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits/ROI Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-saphir via-[#0a1128] to-[#041a2e] rounded-[2.5rem] p-8 sm:p-14 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan/10 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#00F2FE]/10 blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="pt-8 first:pt-0 md:pt-0 md:px-6 flex flex-col items-center justify-center"
              >
                <p className="text-4xl font-extrabold text-white mb-3 tracking-tight">{benefit.value}</p>
                <p className="text-cyan-light/90 font-medium text-sm uppercase tracking-wider">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

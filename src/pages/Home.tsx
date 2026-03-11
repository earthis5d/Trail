import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Handshake, ArrowRight, Search, Users, FileText, Home, PawPrint } from 'lucide-react';
import { PETS } from '../constants';
import { PetCard } from '../components/PetCard';

export const HomePage: React.FC = () => {
  const featuredPets = PETS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="layout-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm-6qVQgMDRc98jl4LssjA02rtHA7aZW1OPLaVPx6fcNK-QRI0svzvDAeZA95oJI5RiuZvTcpa9HizkgOppVI1gZzyu_jMdqJMXEFFXfN4VfMMpWmP4pgiBogGAaFPGBic6zN-AdHv5cjfa1ZHvODon7SBT2M28RY5iAMDLshoNjpaPanfCKLlcTjVj_39i0mY9yKMiniV7xiKdroDPIfaV2L765WEHlesTMLTE9GeDV4qe9W2BaMzaXOcfuQZZ4teICF8_JlEixQ" 
                  alt="Happy Dog" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
                  Find Your New <span className="text-primary">Best Friend</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Give a loving home to a pet in need. Browse through hundreds of dogs, cats, and small animals waiting to meet their forever family.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/browse" className="btn-primary flex items-center gap-2">
                  Browse Pets
                </Link>
                <button className="btn-outline">
                  Success Stories
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="bg-primary/5 py-24">
        <div className="layout-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Adopt?</h2>
            <p className="text-lg text-slate-600">Choosing adoption means saving a life and finding a loyal companion for years to come.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Save a Life', desc: 'Every adoption opens up space in shelters for another animal in need of rescue and care.' },
              { icon: ShieldCheck, title: 'Health Screened', desc: 'All our pets receive full medical checkups, vaccinations, and microchips before adoption.' },
              { icon: Handshake, title: 'Lifetime Support', desc: 'We provide expert resources and behavioral guidance to help your new friend settle into your home.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm"
              >
                <div className="bg-primary/10 w-fit p-3 rounded-xl text-primary mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-24">
        <div className="layout-container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Featured Pets</h2>
              <p className="text-slate-500">Meet some of our residents looking for their forever homes.</p>
            </div>
            <Link to="/browse" className="text-primary font-bold flex items-center gap-1 hover:underline">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPets.map(pet => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="layout-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it Works</h2>
            <p className="text-slate-400 text-lg">Your journey to pet parenthood in four simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Search, title: 'Search', desc: 'Filter by breed, age, size, and location to find your match.' },
              { icon: Users, title: 'Meet', desc: 'Schedule a visit to spend time with the pet at our shelter.' },
              { icon: FileText, title: 'Apply', desc: 'Fill out an application and complete our quick vetting process.' },
              { icon: Home, title: 'Take Home', desc: 'Finalize the adoption and start your life together!' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6">
                <div className="size-16 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black text-2xl">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="layout-container">
          <div className="bg-primary rounded-3xl p-12 lg:p-20 flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden">
            <PawPrint size={200} className="absolute top-0 right-0 text-white/10 -rotate-12 translate-x-1/4 -translate-y-1/4" />
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 max-w-2xl leading-tight">
              Ready to meet your new best friend?
            </h2>
            <p className="text-slate-800 text-lg font-medium max-w-xl">
              Join thousands of happy families who found their perfect companion through PawAdopt.
            </p>
            <button className="bg-slate-900 text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

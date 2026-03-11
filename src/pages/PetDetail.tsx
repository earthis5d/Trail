import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Cake, 
  Maximize2, 
  Zap, 
  Fingerprint, 
  FileText, 
  Stethoscope, 
  Smile, 
  Share2, 
  HeartHandshake,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { PETS } from '../constants';

export const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pet = PETS.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="layout-container py-20 text-center">
        <h2 className="text-2xl font-bold">Pet not found</h2>
        <Link to="/browse" className="text-primary hover:underline mt-4 block">Back to browse</Link>
      </div>
    );
  }

  return (
    <div className="layout-container py-8">
      <Link to="/browse" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to browse
      </Link>

      {/* Hero Section */}
      <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-xl">
        <img 
          src={pet.mainImage} 
          alt={pet.name} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Available</span>
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-black mb-4">Meet {pet.name}</h1>
          <p className="text-white/90 text-xl flex items-center gap-2">
            <MapPin size={24} className="text-primary" />
            {pet.location} • {pet.age} {pet.breed}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Cake} label="Age" value={pet.age} />
            <StatCard icon={Maximize2} label="Size" value={pet.weight || pet.size} />
            <StatCard icon={Zap} label="Energy" value={pet.energyLevel} />
            <StatCard icon={Fingerprint} label="ID" value={`#${pet.id}45`} />
          </div>

          {/* Bio Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
              <FileText size={28} className="text-primary" />
              About {pet.name}
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
              <p className="text-slate-600 leading-relaxed text-lg">
                {pet.description}
              </p>
            </div>
          </section>

          {/* Health & Personality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                <Stethoscope size={24} className="text-primary" />
                Health & Medical
              </h3>
              <ul className="space-y-4">
                {pet.healthInfo.map((info, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                <Smile size={24} className="text-primary" />
                Personality Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {pet.traits.map((trait, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                    {trait}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Image Gallery */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pet.gallery.length > 0 ? pet.gallery.map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm"
                >
                  <img src={img} alt={`${pet.name} gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              )) : (
                <div className="col-span-full py-12 bg-slate-100 rounded-3xl text-center text-slate-400">
                  No additional photos available
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar: Inquiry Form */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-primary/20 shadow-2xl sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Adopt {pet.name}</h3>
            <p className="text-slate-500 text-sm mb-8">Interested in making {pet.name} part of your family? Fill out the form below.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full rounded-xl border-primary/10 bg-slate-50 focus:ring-primary focus:border-primary p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full rounded-xl border-primary/10 bg-slate-50 focus:ring-primary focus:border-primary p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000" 
                  className="w-full rounded-xl border-primary/10 bg-slate-50 focus:ring-primary focus:border-primary p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your home</label>
                <textarea 
                  rows={3} 
                  placeholder="Do you have other pets? A fenced yard?" 
                  className="w-full rounded-xl border-primary/10 bg-slate-50 focus:ring-primary focus:border-primary p-3"
                />
              </div>
              <button className="btn-primary w-full py-4 text-lg">
                Send Inquiry
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-primary/10 space-y-4">
              <button className="flex items-center gap-4 w-full group">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Share2 size={24} />
                </div>
                <span className="font-bold text-slate-700">Share {pet.name}'s Profile</span>
              </button>
              <button className="flex items-center gap-4 w-full group">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <HeartHandshake size={24} />
                </div>
                <span className="font-bold text-slate-700">Sponsor {pet.name}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center shadow-sm">
    <Icon size={24} className="text-primary mb-3" />
    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">{label}</span>
    <span className="font-bold text-slate-900">{value}</span>
  </div>
);

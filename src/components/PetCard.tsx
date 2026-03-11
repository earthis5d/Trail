import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Pet } from '../types';
import { motion } from 'motion/react';

interface PetCardProps {
  pet: Pet;
}

export const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-white rounded-2xl border border-primary/10 overflow-hidden hover:shadow-xl transition-all"
    >
      <Link to={`/pet/${pet.id}`} className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={pet.mainImage} 
          alt={pet.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <button 
          className="absolute top-4 right-4 size-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-primary shadow-lg transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Handle favorite
          }}
        >
          <Heart size={20} />
        </button>
        {pet.isNew && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg">New</span>
          </div>
        )}
      </Link>
      
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">{pet.name}</h3>
          <span className="text-primary font-bold">${pet.price}</span>
        </div>
        <p className="text-sm text-slate-500">{pet.breed} • {pet.age}</p>
        
        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-primary" />
            {pet.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-primary" />
            2 days ago
          </span>
        </div>
      </div>
    </motion.div>
  );
};

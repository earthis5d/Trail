import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Heart, Search, Bell, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="layout-container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <PawPrint size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">PawAdopt</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/browse" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Adopt</Link>
          <Link to="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">How it Works</Link>
          <Link to="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Stories</Link>
          <Link to="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:relative lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" size={18} />
            <input 
              type="text" 
              placeholder="Search breeds..." 
              className="h-10 w-64 pl-10 pr-4 rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-primary/5 text-slate-600 hover:text-primary transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-xl bg-primary/5 text-slate-600 hover:text-primary transition-colors">
              <Bell size={20} />
            </button>
            <button className="size-10 rounded-full border-2 border-primary overflow-hidden">
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary/10 py-16">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <PawPrint size={24} />
              <span className="text-xl font-bold">PawAdopt</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Connecting loving homes with pets in need. Join our community and find your forever friend today.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/browse" className="hover:text-primary transition-colors">Adopt a Pet</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Pet Care Guides</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shelters & Rescues</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Get the latest pet updates delivered to your inbox.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="rounded-xl border-primary/10 bg-background-light focus:ring-primary focus:border-primary px-4 py-2 text-sm"
              />
              <button className="btn-primary py-2 text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2024 PawAdopt. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

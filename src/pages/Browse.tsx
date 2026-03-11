import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, ChevronUp, MapPin, Search } from 'lucide-react';
import { PETS } from '../constants';
import { PetCard } from '../components/PetCard';
import { AnimalType, AgeGroup, Size, Gender } from '../types';

export const BrowsePage: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<AnimalType[]>([]);
  const [selectedAges, setSelectedAges] = useState<AgeGroup[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<Gender[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [breedSearch, setBreedSearch] = useState('');

  const allBreeds = useMemo(() => {
    const breeds = new Set<string>();
    PETS.forEach(pet => {
      if (selectedTypes.length === 0 || selectedTypes.includes(pet.type)) {
        breeds.add(pet.breed);
      }
    });
    return Array.from(breeds).sort();
  }, [selectedTypes]);

  const filteredPets = useMemo(() => {
    return PETS.filter(pet => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(pet.type);
      const ageMatch = selectedAges.length === 0 || selectedAges.includes(pet.ageGroup);
      const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(pet.size);
      const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(pet.gender);
      const breedMatch = selectedBreeds.length === 0 || selectedBreeds.includes(pet.breed);
      return typeMatch && ageMatch && sizeMatch && genderMatch && breedMatch;
    });
  }, [selectedTypes, selectedAges, selectedSizes, selectedGenders, selectedBreeds]);

  const toggleFilter = (list: any[], setList: Function, value: any) => {
    if (list.includes(value)) {
      setList(list.filter(v => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredBreeds = allBreeds.filter(breed => 
    breed.toLowerCase().includes(breedSearch.toLowerCase())
  );

  return (
    <div className="layout-container py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Filters</h2>
            <button 
              onClick={() => {
                setSelectedTypes([]);
                setSelectedAges([]);
                setSelectedSizes([]);
                setSelectedGenders([]);
                setSelectedBreeds([]);
                setBreedSearch('');
              }}
              className="text-sm font-medium text-primary hover:underline"
            >
              Clear all
            </button>
          </div>

          <div className="space-y-6">
            <FilterGroup title="Animal Type">
              {['Dog', 'Cat', 'Rabbit'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedTypes.includes(type as AnimalType)}
                    onChange={() => {
                      toggleFilter(selectedTypes, setSelectedTypes, type);
                      setSelectedBreeds([]); // Reset breeds when type changes to avoid invalid combinations
                    }}
                    className="form-checkbox rounded border-primary/20 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{type}s</span>
                </label>
              ))}
            </FilterGroup>

            <FilterGroup title="Breed">
              <div className="space-y-3">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Search breeds..."
                    value={breedSearch}
                    onChange={(e) => setBreedSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-primary/10 rounded-xl text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {filteredBreeds.length > 0 ? (
                    filteredBreeds.map(breed => (
                      <label key={breed} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={selectedBreeds.includes(breed)}
                          onChange={() => toggleFilter(selectedBreeds, setSelectedBreeds, breed)}
                          className="form-checkbox rounded border-primary/20 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{breed}</span>
                      </label>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">No breeds found</p>
                  )}
                </div>
              </div>
            </FilterGroup>

            <FilterGroup title="Age">
              {['Puppy/Kitten', 'Young', 'Adult', 'Senior'].map(age => (
                <label key={age} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedAges.includes(age as AgeGroup)}
                    onChange={() => toggleFilter(selectedAges, setSelectedAges, age)}
                    className="form-checkbox rounded border-primary/20 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{age}</span>
                </label>
              ))}
            </FilterGroup>

            <FilterGroup title="Size">
              <div className="grid grid-cols-2 gap-2">
                {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                  <button 
                    key={size}
                    onClick={() => toggleFilter(selectedSizes, setSelectedSizes, size)}
                    className={`px-3 py-2 border rounded-xl text-xs font-medium transition-all ${
                      selectedSizes.includes(size as Size) 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-primary/20 text-slate-600 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Gender">
              {['Male', 'Female'].map(gender => (
                <label key={gender} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedGenders.includes(gender as Gender)}
                    onChange={() => toggleFilter(selectedGenders, setSelectedGenders, gender)}
                    className="form-checkbox rounded border-primary/20 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{gender}</span>
                </label>
              ))}
            </FilterGroup>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Find your new best friend</h1>
              <p className="text-slate-500 mt-2">Showing {filteredPets.length} pets looking for a home</p>
            </div>
            
            <div className="flex gap-3">
              <select className="rounded-xl border-primary/10 bg-primary/5 text-sm font-medium focus:ring-primary focus:border-primary py-2 px-4 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <button className="lg:hidden btn-primary p-2 flex items-center justify-center">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-primary/10 p-6 rounded-full text-primary mb-4">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No pets found</h3>
              <p className="text-slate-500">Try adjusting your filters to find more results.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const FilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-primary/10 pb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 mb-4"
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  );
};

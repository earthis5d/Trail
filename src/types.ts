export type AnimalType = 'Dog' | 'Cat' | 'Rabbit' | 'Other';
export type Size = 'Small' | 'Medium' | 'Large' | 'X-Large';
export type Gender = 'Male' | 'Female';
export type AgeGroup = 'Puppy/Kitten' | 'Young' | 'Adult' | 'Senior';

export interface Pet {
  id: string;
  name: string;
  type: AnimalType;
  breed: string;
  age: string;
  ageGroup: AgeGroup;
  size: Size;
  gender: Gender;
  location: string;
  price: number;
  description: string;
  mainImage: string;
  gallery: string[];
  traits: string[];
  healthInfo: string[];
  isNew?: boolean;
  energyLevel: 'Low' | 'Medium' | 'High';
  weight?: string;
}

export interface FilterState {
  type: AnimalType[];
  ageGroup: AgeGroup[];
  size: Size[];
  gender: Gender[];
}

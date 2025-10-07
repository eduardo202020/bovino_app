// Tipos para los datos de animales y usuarios

export interface Animal {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  breed: string;
  age: number;
  ageCategory: string;
  image: string;
  photos?: {
    front?: string;
    rightSide?: string;
    leftSide?: string;
  };
  gender?: string;
  weight?: string;
  birthDate?: string;
  birthLocation?: string;
  rfidTag?: string;
  registrationDate?: string; // Nueva propiedad para ordenamiento
}

export interface AnimalDetail {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  image: string;
  breed: string;
  photos?: {
    front?: string;
    rightSide?: string;
    leftSide?: string;
  };
  age: string;
  weight: string;
  gender: string;
  birthDate: string;
  vaccinations: Vaccination[];
  healthRecords: HealthRecord[];
}

export interface Vaccination {
  name: string;
  date: string;
  status: 'completed' | 'pending';
}

export interface HealthRecord {
  date: string;
  condition: string;
  treatment: string;
  vet: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  animalsCount: number;
  lastActive: string;
  status: string;
  location?: Location;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  farmName?: string;
}

export interface AdminAnimal {
  id: string;
  name: string;
  breed: string;
  owner: string;
  rfidTag: string;
  status: string;
  registeredDate: string;
}

export interface ConsultAnimal {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  breed: string;
  age: string;
  weight: string;
  image: string;
}

// Lista de razas disponibles para selección
export const CATTLE_BREEDS = [
  'Holstein',
  'Jersey',
  'Angus',
  'Charolais',
  'Brahman',
  'Simmental',
  'Hereford',
  'Brown Swiss',
  'Nelore',
  'Limousin',
  'Gelbvieh',
  'Gyr',
  'Guzerá',
  'Brangus',
  'Santa Gertrudis',
  'Criollo',
  'Senepol',
  'Shorthorn',
  'Zebu',
  'Red Angus',
] as const;

export type CattleBreed = (typeof CATTLE_BREEDS)[number];

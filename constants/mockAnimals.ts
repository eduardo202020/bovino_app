import { Animal, AnimalDetail } from './types';

export const mockAnimals: Animal[] = [
  {
    id: '12345',
    name: 'Bessie',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Holstein',
    age: 3,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
  },
  {
    id: '67890',
    name: 'Daisy',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Jersey',
    age: 2,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '11111',
    name: 'Max',
    status: 'Enfermo',
    statusColor: '#ef4444',
    breed: 'Angus',
    age: 4,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
  },
  {
    id: '22222',
    name: 'Luna',
    status: 'En tratamiento',
    statusColor: '#f59e0b',
    breed: 'Charolais',
    age: 6,
    ageCategory: 'Mayores (5+ años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '33333',
    name: 'Capitán',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Brahman',
    age: 4,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
  },
  {
    id: '44444',
    name: 'Estrella',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Simmental',
    age: 2,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '55555',
    name: 'Toro',
    status: 'Cuarentena',
    statusColor: '#ef4444',
    breed: 'Hereford',
    age: 5,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '66666',
    name: 'Paloma',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Brown Swiss',
    age: 3,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '77777',
    name: 'Rayo',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Nelore',
    age: 1,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
  },
  {
    id: '88888',
    name: 'Canela',
    status: 'Embarazada',
    statusColor: '#8b5cf6',
    breed: 'Limousin',
    age: 4,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
  },
  {
    id: '99999',
    name: 'Diamante',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Gelbvieh',
    age: 7,
    ageCategory: 'Mayores (5+ años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
  },
];

export const mockAnimalDetails: Record<string, AnimalDetail> = {
  '12345': {
    id: '12345',
    name: 'Bessie',
    status: 'Activo',
    statusColor: '#10b981',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    breed: 'Holstein',
    age: '3 años',
    weight: '550 kg',
    gender: 'Hembra',
    birthDate: '15/03/2021',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'Brucelosis', date: '15/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '05/09/2024',
        condition: 'Revisión rutinaria',
        treatment: 'Ninguno',
        vet: 'Dr. García',
      },
      {
        date: '12/08/2024',
        condition: 'Mastitis leve',
        treatment: 'Antibióticos',
        vet: 'Dr. Rodríguez',
      },
    ],
  },
  '67890': {
    id: '67890',
    name: 'Daisy',
    status: 'Activo',
    statusColor: '#10b981',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    breed: 'Jersey',
    age: '2 años',
    weight: '420 kg',
    gender: 'Hembra',
    birthDate: '22/07/2022',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'IBR/BVD', date: '20/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '15/09/2024',
        condition: 'Chequeo mensual',
        treatment: 'Vitaminas',
        vet: 'Dr. López',
      },
    ],
  },
  '11111': {
    id: '11111',
    name: 'Max',
    status: 'Enfermo',
    statusColor: '#ef4444',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    breed: 'Angus',
    age: '4 años',
    weight: '680 kg',
    gender: 'Macho',
    birthDate: '10/05/2020',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'Clostridiosis', date: '25/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '28/09/2024',
        condition: 'Fiebre alta',
        treatment: 'Antiinflamatorios',
        vet: 'Dr. Martínez',
      },
      {
        date: '20/09/2024',
        condition: 'Pérdida de apetito',
        treatment: 'Suplementos vitamínicos',
        vet: 'Dr. Martínez',
      },
    ],
  },
  '22222': {
    id: '22222',
    name: 'Luna',
    status: 'En tratamiento',
    statusColor: '#f59e0b',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    breed: 'Charolais',
    age: '6 años',
    weight: '620 kg',
    gender: 'Hembra',
    birthDate: '08/02/2018',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'Leptospirosis', date: '10/12/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '02/10/2024',
        condition: 'Cojera leve',
        treatment: 'Reposo y antiinflamatorios',
        vet: 'Dr. Fernández',
      },
      {
        date: '25/09/2024',
        condition: 'Revisión de pezuñas',
        treatment: 'Recorte preventivo',
        vet: 'Dr. Fernández',
      },
    ],
  },
};

// Función auxiliar para obtener datos de un animal específico
export const getAnimalData = (animalId: string): AnimalDetail => {
  return (
    mockAnimalDetails[animalId] || {
      id: animalId,
      name: 'Animal Desconocido',
      status: 'Desconocido',
      statusColor: '#6b7280',
      image:
        'https://via.placeholder.com/400x400/cccccc/666666?text=Sin+Imagen',
      breed: 'N/A',
      age: 'N/A',
      weight: 'N/A',
      gender: 'N/A',
      birthDate: 'N/A',
      vaccinations: [],
      healthRecords: [],
    }
  );
};

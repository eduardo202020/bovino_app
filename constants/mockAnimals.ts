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
    registrationDate: '2025-10-01T10:00:00.000Z',
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
    registrationDate: '2025-10-02T14:30:00.000Z',
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
    registrationDate: '2025-10-03T09:15:00.000Z',
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
    registrationDate: '2025-10-04T16:45:00.000Z',
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
    registrationDate: '2025-10-05T11:20:00.000Z',
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
    registrationDate: '2025-10-06T08:30:00.000Z',
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
    registrationDate: '2025-09-28T13:45:00.000Z',
  },
  {
    id: '66666',
    name: 'Maravilla',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Gyr',
    age: 3,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-09-30T16:20:00.000Z',
  },
  {
    id: '77777',
    name: 'Rojizo',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Senepol',
    age: 1,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-10-08T11:15:00.000Z',
  },
  {
    id: '88888',
    name: 'Paloma',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Brown Swiss',
    age: 3,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-09-25T12:30:00.000Z',
  },
  {
    id: '99999',
    name: 'Rayo',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Nelore',
    age: 1,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    registrationDate: '2025-09-22T14:45:00.000Z',
  },
  {
    id: '10101',
    name: 'Canela',
    status: 'Embarazada',
    statusColor: '#8b5cf6',
    breed: 'Limousin',
    age: 4,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-09-18T09:20:00.000Z',
  },
  {
    id: '12121',
    name: 'Diamante',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Gelbvieh',
    age: 7,
    ageCategory: 'Mayores (5+ años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    registrationDate: '2025-09-15T16:10:00.000Z',
  },
  {
    id: '13131',
    name: 'Tornado',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Santa Gertrudis',
    age: 5,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-09-12T08:40:00.000Z',
  },
  {
    id: '14141',
    name: 'Esperanza',
    status: 'Activo',
    statusColor: '#10b981',
    breed: 'Red Angus',
    age: 2,
    ageCategory: 'Jóvenes (1-2 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    registrationDate: '2025-09-08T13:55:00.000Z',
  },
  {
    id: '15151',
    name: 'Valiente',
    status: 'Cuarentena',
    statusColor: '#ef4444',
    breed: 'Brangus',
    age: 3,
    ageCategory: 'Adultos (3-5 años)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    registrationDate: '2025-09-05T10:25:00.000Z',
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
  '33333': {
    id: '33333',
    name: 'Capitán',
    status: 'Activo',
    statusColor: '#10b981',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrr7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    breed: 'Brahman',
    age: '4 años',
    weight: '720 kg',
    gender: 'Macho',
    birthDate: '12/04/2020',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'Brucelosis', date: '18/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '08/09/2024',
        condition: 'Revisión rutinaria',
        treatment: 'Desparasitación',
        vet: 'Dr. Mendoza',
      },
    ],
  },
  '44444': {
    id: '44444',
    name: 'Estrella',
    status: 'Activo',
    statusColor: '#10b981',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    breed: 'Simmental',
    age: '2 años',
    weight: '480 kg',
    gender: 'Hembra',
    birthDate: '28/06/2022',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'IBR/BVD', date: '22/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '12/09/2024',
        condition: 'Control de crecimiento',
        treatment: 'Suplementos nutricionales',
        vet: 'Dr. Silva',
      },
    ],
  },
  '77777': {
    id: '77777',
    name: 'Rojizo',
    status: 'Activo',
    statusColor: '#10b981',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    breed: 'Senepol',
    age: '1 año',
    weight: '320 kg',
    gender: 'Macho',
    birthDate: '15/09/2023',
    vaccinations: [
      { name: 'Fiebre aftosa', date: '01/10/2024', status: 'completed' },
      { name: 'Clostridiosis', date: '28/11/2024', status: 'pending' },
    ],
    healthRecords: [
      {
        date: '18/09/2024',
        condition: 'Primera revisión',
        treatment: 'Vacunación básica',
        vet: 'Dr. Castillo',
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

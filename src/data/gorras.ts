import type { Gorra } from '../types';

export const gorras: Gorra[] = [
  // Clemont
  { 
    id: 1, 
    marca: 'Clemont', 
    color: 'Beige', 
    descripcion: 'Clemont beige con bordado dorado', 
    unidades: 2, 
    imagen: '/images/assets/clemont-beige.jpg' 
  },
  { 
    id: 2, 
    marca: 'Clemont', 
    color: 'Negro con blanco', 
    descripcion: 'Clemont negro con detalles blancos', 
    unidades: 2, 
    imagen: '/images/assets/clemont-negro-blanco.jpg' 
  },
  { 
    id: 3, 
    marca: 'Clemont', 
    color: 'Negro con rojo y blanco', 
    descripcion: 'Clemont negro con logo C y detalles rojos', 
    unidades: 2, 
    imagen: '/images/assets/clemont-negro-rojo-blanco.jpg' 
  },
  { 
    id: 4, 
    marca: 'Clemont', 
    color: 'Negro con rojo', 
    descripcion: 'Clemont negro con bordado rojo', 
    unidades: 1, 
    imagen: '/images/assets/clemont-negro-rojo.jpg' 
  },
  
  // Fe
  { 
    id: 5, 
    marca: 'Fe', 
    color: 'Blanco', 
    descripcion: 'Gorra Fe blanca minimalista', 
    unidades: 1, 
    imagen: '/images/assets/fe-blanco.jpg' 
  },
  { 
    id: 6, 
    marca: 'Fe', 
    color: 'Negro', 
    descripcion: 'Gorra Fe negra con cruz', 
    unidades: 1, 
    imagen: '/images/assets/fe-negro.jpg' 
  },
  
  // Amiri
  { 
    id: 7, 
    marca: 'Amiri', 
    color: 'Negro', 
    descripcion: 'Amiri negro con logo bordado', 
    unidades: 1, 
    imagen: '/images/assets/amiri-negro.jpg' 
  },
  
  // Hugo Boss
  { 
    id: 8, 
    marca: 'Hugo Boss', 
    color: 'Blanco', 
    descripcion: 'Hugo Boss blanca con logo dorado', 
    unidades: 1, 
    imagen: '/images/assets/hugo-boss-blanco.jpg' 
  },
  { 
    id: 9, 
    marca: 'Hugo Boss', 
    color: 'Negro con diseño grande', 
    descripcion: 'Hugo Boss negro con patrón grande', 
    unidades: 1, 
    imagen: '/images/assets/hugo-boss-negro-diseno-grande.jpg' 
  },
  { 
    id: 10, 
    marca: 'Hugo Boss', 
    color: 'Negro con diseño en visera', 
    descripcion: 'Hugo Boss negro con diseño en visera', 
    unidades: 3, 
    imagen: '/images/assets/hugo-boss-negro-visera.jpg' 
  },
  { 
    id: 11, 
    marca: 'Hugo Boss', 
    color: 'Negro con blanco', 
    descripcion: 'Hugo Boss negro con logo blanco', 
    unidades: 4, 
    imagen: '/images/assets/hugo-boss-negro-blanco.jpg' 
  },
  { 
    id: 12, 
    marca: 'Hugo Boss', 
    color: 'Negro con rojo', 
    descripcion: 'Hugo Boss negro con detalles rojos', 
    unidades: 3, 
    imagen: '/images/assets/hugo-boss-negro-rojo.jpg' 
  },
  { 
    id: 13, 
    marca: 'Hugo Boss', 
    color: 'Negro', 
    descripcion: 'Hugo Boss negro clásico', 
    unidades: 1, 
    imagen: '/images/assets/hugo-boss-negro.jpg' 
  },
  
  // Puma
  { 
    id: 14, 
    marca: 'Puma', 
    color: 'Negro', 
    descripcion: 'Puma negro con logo blanco', 
    unidades: 1, 
    imagen: '/images/assets/puma-negro.jpg' 
  }
];

// Obtener todas las marcas únicas
export const getMarcas = (): string[] => {
  return Array.from(new Set(gorras.map(gorra => gorra.marca))).sort();
};

// Obtener todos los colores únicos
export const getColores = (): string[] => {
  return Array.from(new Set(gorras.map(gorra => gorra.color))).sort();
};

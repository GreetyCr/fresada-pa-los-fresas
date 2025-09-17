import { useState, useMemo } from 'react';
import type { Gorra, FilterState } from '../types';

export const useFilter = (gorras: Gorra[]) => {
  const [filters, setFilters] = useState<FilterState>({
    marca: [],
    color: [],
    searchTerm: ''
  });

  const filteredGorras = useMemo(() => {
    return gorras.filter(gorra => {
      // Filtro por marca
      const marcaMatch = filters.marca.length === 0 || filters.marca.includes(gorra.marca);
      
      // Filtro por color
      const colorMatch = filters.color.length === 0 || filters.color.includes(gorra.color);
      
      // Filtro por búsqueda de texto
      const searchMatch = filters.searchTerm === '' || 
        gorra.marca.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        gorra.color.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        gorra.descripcion.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return marcaMatch && colorMatch && searchMatch;
    });
  }, [gorras, filters]);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const addMarca = (marca: string) => {
    if (!filters.marca.includes(marca)) {
      updateFilter('marca', [...filters.marca, marca]);
    }
  };

  const removeMarca = (marca: string) => {
    updateFilter('marca', filters.marca.filter(m => m !== marca));
  };

  const addColor = (color: string) => {
    if (!filters.color.includes(color)) {
      updateFilter('color', [...filters.color, color]);
    }
  };

  const removeColor = (color: string) => {
    updateFilter('color', filters.color.filter(c => c !== color));
  };

  const clearFilters = () => {
    setFilters({
      marca: [],
      color: [],
      searchTerm: ''
    });
  };

  return {
    filters,
    filteredGorras,
    updateFilter,
    addMarca,
    removeMarca,
    addColor,
    removeColor,
    clearFilters
  };
};

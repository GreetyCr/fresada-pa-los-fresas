import React, { useState } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import type { FilterState } from '../types';
import { getMarcas, getColores } from '../data/gorras';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onAddMarca: (marca: string) => void;
  onRemoveMarca: (marca: string) => void;
  onAddColor: (color: string) => void;
  onRemoveColor: (color: string) => void;
  onClearFilters: () => void;
  resultCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onAddMarca,
  onRemoveMarca,
  onAddColor,
  onRemoveColor,
  onClearFilters,
  resultCount
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    marcas: true,
    colores: true
  });

  const marcas = getMarcas();
  const colores = getColores();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const hasActiveFilters = filters.marca.length > 0 || filters.color.length > 0 || filters.searchTerm !== '';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Buscar
        </label>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => onFilterChange('searchTerm', e.target.value)}
            placeholder="Buscar por marca, color o descripción..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-red focus:border-transparent"
          />
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {resultCount} resultado{resultCount !== 1 ? 's' : ''} encontrado{resultCount !== 1 ? 's' : ''}
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="flex items-center gap-2 text-sm text-brand-red hover:text-red-700 font-medium"
        >
          <X size={16} />
          Limpiar filtros
        </button>
      )}

      {/* Marcas Filter */}
      <div className="space-y-2">
        <button
          onClick={() => toggleSection('marcas')}
          className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Marcas
          {expandedSections.marcas ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.marcas && (
          <div className="space-y-2 pl-2">
            {marcas.map(marca => (
              <label key={marca} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.marca.includes(marca)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onAddMarca(marca);
                    } else {
                      onRemoveMarca(marca);
                    }
                  }}
                  className="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{marca}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colores Filter */}
      <div className="space-y-2">
        <button
          onClick={() => toggleSection('colores')}
          className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Colores
          {expandedSections.colores ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.colores && (
          <div className="space-y-2 pl-2">
            {colores.map(color => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onAddColor(color);
                    } else {
                      onRemoveColor(color);
                    }
                  }}
                  className="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Filter size={20} />
          <span className="font-medium">Filtros</span>
          {hasActiveFilters && (
            <span className="bg-brand-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {filters.marca.length + filters.color.length + (filters.searchTerm ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile filter overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white dark:bg-gray-800 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/assets/logo.jpeg" 
                  alt="Logo" 
                  className="h-8 w-8 object-cover rounded-full border border-red-600"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filtros</h3>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit sticky top-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filtros</h3>
        <FilterContent />
      </div>
    </>
  );
};

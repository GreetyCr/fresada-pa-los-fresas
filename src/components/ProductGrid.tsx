import React from 'react';
import { ProductCard } from './ProductCard';
import type { Gorra } from '../types';
import { Package } from 'lucide-react';

interface ProductGridProps {
  gorras: Gorra[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ gorras }) => {
  if (gorras.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <Package size={64} className="text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
          No se encontraron gorras
        </h3>
        <p className="text-gray-500 dark:text-gray-500 text-center">
          Intenta ajustar tus filtros o términos de búsqueda para encontrar lo que buscas.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {gorras.map(gorra => (
          <ProductCard key={gorra.id} gorra={gorra} />
        ))}
      </div>
    </div>
  );
};

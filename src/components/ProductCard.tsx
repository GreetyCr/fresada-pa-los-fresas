import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { Gorra } from '../types';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface ProductCardProps {
  gorra: Gorra;
}

export const ProductCard: React.FC<ProductCardProps> = ({ gorra }) => {
  const isLowStock = gorra.unidades <= 2;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        <img
          src={getImageUrl(gorra.imagen)}
          alt={`Gorra ${gorra.marca} ${gorra.color} - ${gorra.descripcion}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />
        
        {/* Low stock indicator */}
        {isLowStock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            Pocas unidades
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
            {gorra.marca}
          </h3>
          <span className={`text-sm px-2 py-1 rounded-full font-medium ${
            isLowStock 
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}>
            {gorra.unidades} disponible{gorra.unidades !== 1 ? 's' : ''}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Color: <span className="font-medium">{gorra.color}</span>
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {gorra.descripcion}
        </p>
        
        <button className="w-full bg-brand-red hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

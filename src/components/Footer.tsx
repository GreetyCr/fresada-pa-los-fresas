import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/images/assets/logo.jpeg" 
                alt="Fresada pa' los fresas Logo" 
                className="h-10 w-10 object-cover rounded-full border-2 border-red-600"
              />
              <h3 className="text-xl font-bold">
                Fresada pa' los fresas
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu destino para gorras premium de las mejores marcas. 
              Calidad y estilo en cada pieza.
            </p>
          </div>

          {/* Brands */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-red-600">Marcas Disponibles</h4>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Clemont</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Fe</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Amiri</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hugo Boss</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Puma</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Fresada pa' los fresas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

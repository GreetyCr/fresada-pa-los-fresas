import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { useFilter } from './hooks/useFilter';
import { gorras } from './data/gorras';

function AppContent() {
  const {
    filters,
    filteredGorras,
    addMarca,
    removeMarca,
    addColor,
    removeColor,
    updateFilter,
    clearFilters
  } = useFilter(gorras);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <FilterSidebar
            filters={filters}
            onFilterChange={updateFilter}
            onAddMarca={addMarca}
            onRemoveMarca={removeMarca}
            onAddColor={addColor}
            onRemoveColor={removeColor}
            onClearFilters={clearFilters}
            resultCount={filteredGorras.length}
          />
          <ProductGrid gorras={filteredGorras} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
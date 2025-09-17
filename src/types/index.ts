export interface Gorra {
  id: number;
  marca: string;
  color: string;
  descripcion: string;
  unidades: number;
  imagen: string;
}

export interface FilterState {
  marca: string[];
  color: string[];
  searchTerm: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type SortOption = 'nombre' | 'marca' | 'unidades' | 'color';
export type SortOrder = 'asc' | 'desc';

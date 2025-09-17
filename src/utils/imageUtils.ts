/**
 * Utilidades para manejo de imágenes
 */

// Imagen placeholder por defecto
export const PLACEHOLDER_IMAGE = '/images/assets/placeholder.svg';

/**
 * Obtiene la URL de imagen con fallback
 * @param imagePath - Ruta de la imagen
 * @returns URL de imagen con fallback
 */
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return PLACEHOLDER_IMAGE;
  return imagePath;
};

/**
 * Obtiene la clase de posicionamiento de imagen basada en el archivo
 * @param imagePath - Ruta de la imagen
 * @returns Clase CSS para object-position
 */
export const getImagePositionClass = (imagePath: string): string => {
  if (!imagePath) return 'object-center';
  
  const filename = imagePath.split('/').pop()?.toLowerCase() || '';
  
  // Imágenes que necesitan posicionamiento centro-superior personalizado
  if (filename.includes('clemont-beige') || 
      filename.includes('clemont-negro-blanco')) {
    return 'object-[center_30%]';
  }
  
  // Clemont negro-rojo-blanco necesita posicionamiento ligeramente superior
  if (filename.includes('clemont-negro-rojo-blanco')) {
    return 'object-[center_35%]';
  }
  
  // Imágenes que necesitan posicionamiento más hacia el centro-arriba
  if (filename.includes('clemont-negro-rojo') || 
      filename.includes('amiri-negro')) {
    return 'object-[center_20%]';
  }
  
  // Por defecto, centrar
  return 'object-center';
};

/**
 * Maneja el error de carga de imagen
 * @param event - Evento de error de imagen
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== PLACEHOLDER_IMAGE) {
    img.src = PLACEHOLDER_IMAGE;
  }
};
